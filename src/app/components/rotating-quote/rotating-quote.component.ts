import { Component, Input, OnInit, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-rotating-quote',
  templateUrl: './rotating-quote.component.html',
  styleUrls: ['./rotating-quote.component.scss'],
  standalone: true,
})
export class RotatingQuoteComponent implements OnInit {

  /** The array of strings to select from */
  @Input() strings: Array<string> = [];

  /** The time interval before the text changes, in seconds */
  @Input() interval: number = 5;

  /** The currently displayed string */
  currentString: WritableSignal<string> = signal('');

  ngOnInit(): void {
    this.currentString.set(this.strings[0]);
    this.startText();
  }

  startText(): void {
    setInterval(() => {
      const s = this.strings.filter((s) => s !== this.currentString());
      if (s.length <= 0) return;
      this.currentString.set(s[Math.floor(Math.random() * s.length)]);
    }, this.interval * 1000);
  }

}
