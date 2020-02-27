import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackComponent } from '../../components/snack/snack.component';

@Directive({
  selector: '[appSnack]'
})
export class SnackDirective {
  @Input() duration: number;
  @Input() text: string;

  constructor(private elementRef: ElementRef,
              private snackBar: MatSnackBar) {

  }

  @HostListener('click') openSnackBar(): void {
    this.showSnackBar();
  }

  private showSnackBar(): void {
    this.snackBar.openFromComponent(SnackComponent, {
      duration: this.duration * 1000,
      data: {
        text: this.text
      }
    });
  }

}
