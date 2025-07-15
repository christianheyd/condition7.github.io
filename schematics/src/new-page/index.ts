import { apply, chain, mergeWith, move, Rule, SchematicContext, SchematicsException, strings, template, Tree, url } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { virtualFs, workspaces } from '@angular-devkit/core';
import { classify, dasherize } from '@angular-devkit/core/src/utils/strings';


function createHost(tree: Tree): workspaces.WorkspaceHost {
  return {
    async readFile(path: string): Promise<string> {
      const data = tree.read(path);
      if (!data) {
        throw new SchematicsException('File not found.');
      }
      return virtualFs.fileBufferToString(data);
    },
    async writeFile(path: string, data: string): Promise<void> {
      return tree.overwrite(path, data);
    },
    async isDirectory(path: string): Promise<boolean> {
      return !tree.exists(path) && tree.getDir(path).subfiles.length > 0;
    },
    async isFile(path: string): Promise<boolean> {
      return tree.exists(path);
    },
  };
}

function addImportAndRoute(_options: Schema, filePath: string): Rule {
  return (tree: Tree) => {
    const buffer = tree.read(filePath);
    if (!buffer) {
      throw new Error(`Could not read file: ${filePath}`);
    }

    let content = buffer.toString('utf-8');

    // === 1. Add import statement ===
    const newImport = `import { ${ classify(_options.name) }Component } from './pages/${ dasherize(_options.name) }/${ dasherize(_options.name) }.component';\n`;

    // Match all import lines
    const importRegex = /import .* from .+;\r?\n/g;
    const matches = content.match(importRegex);

    if (matches && matches.length > 0) {
      const lastImport = matches[matches.length - 1];
      content = content.replace(
        lastImport,
        lastImport + newImport
      );
    } else {
      // No import found; insert at top
      content = newImport + content;
    }

    // === 2. Add new route before wildcard route ===
    const lineToInsert = `    { path: '${ _options.name }', component: ${ classify(_options.name) }Component },`;
    const redirectToLine = `    { path: '**', redirectTo: ''}`;

    if (content.includes(redirectToLine)) {
      content = content.replace(
        redirectToLine,
        `${lineToInsert}\n${redirectToLine}`
      );
    } else {
      throw new Error(`redirectTo route not found in ${filePath}`);
    }

    // === 3. Overwrite file with modified content ===
    tree.overwrite(filePath, content);
    return tree;
  };
}

export function newPage(_options: Schema): Rule {
  return async (tree: Tree, _context: SchematicContext) => {
    const host = createHost(tree);
    const {workspace} = await workspaces.readWorkspace('/', host);

    const project = workspace.projects.get('condition7');
    if (!project) return;

    // addImportAndRoute(_options, `${project.sourceRoot}/app/app.routes.ts`);

    const sourceTemplate = url("./files");
    const parameterizedTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings
      }),
      move(`${project.sourceRoot}/app/pages`),
    ]);
    tree = mergeWith(parameterizedTemplate)(tree, _context) as Tree;
    // return tree;
    return chain([addImportAndRoute(_options, `${project.sourceRoot}/app/app.routes.ts`), mergeWith(parameterizedTemplate)])
  };
}
