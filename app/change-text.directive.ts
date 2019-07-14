import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[cT]'
})
export class ChangeTextDirective {

   constructor(Element: ElementRef) {
      console.log(Element);
      Element.nativeElement.innerText = "SHIVA CONCEPT SOLUTION";
   }

}
