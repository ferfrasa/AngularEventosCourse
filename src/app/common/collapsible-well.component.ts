import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4 class="well-title">
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <!-- content goes here-->
      <ng-content select="[well-body]" *ngIf="visible"></ng-content>

    </div>
  `
})

export class CollapsibleWellComponent {

  visible = true;

  toggleContent() {
    this.visible = !this.visible;

  }
}
