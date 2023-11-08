import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-web-services',
    standalone: true,
    imports: [NgFor,RouterLink,RouterOutlet],
    template: `
        <router-outlet/>
  `,
    styleUrls: ['web-services.scss']
})
export default class WebServicesPageComponent {
}
