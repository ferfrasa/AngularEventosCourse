import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[modal-trigger]' // como es un atributo el selector va de esta forma
})

export class ModalTriggerDirective implements OnInit {

  private el: HTMLElement;
  @Input('modal-trigger') modalId: string;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement; // referenciar el ellemeto donde se llama la directiva

  }

  ngOnInit() {

    this.el.addEventListener('click', e => {
      try {
        this.$(`#${this.modalId}`).modal({});

      } catch (error) {
        console.log(error);
      }

    });
  }

}
