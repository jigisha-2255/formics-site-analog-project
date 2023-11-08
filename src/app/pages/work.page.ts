import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-work',
  standalone: true,
  imports:[NgFor,RouterOutlet],
  template: `
     <router-outlet/>
  `,
  styleUrls:['work.scss']
})
export default class WorkPageComponent {
}