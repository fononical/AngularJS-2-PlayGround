import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {

    constructor(private el: ElementRef, private renderer: Renderer){
        //el.nativeElement.style.color = 'red';
    }

    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
        this.renderer.setElementStyle(this.el.nativeElement, 'color', 'green');

    }

    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '600px');
        this.renderer.setElementStyle(this.el.nativeElement, 'color', 'red');
    }
}