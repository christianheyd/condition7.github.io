import { AfterViewInit, Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: '[setIconSize]',
  standalone: true,
})
export class IconSizeDirective implements AfterViewInit {
  private _elementRef = inject(ElementRef);

  @Input() size: string = '';
  
  ngAfterViewInit(): void {
    this.setStyles();
  }

  setStyles(): void {
    this._elementRef.nativeElement.style.fontSize = this.size;
    this._elementRef.nativeElement.style.lineHeight = this.size;
    this._elementRef.nativeElement.style.height = this.size;
    this._elementRef.nativeElement.style.width = this.size;
  }
}
