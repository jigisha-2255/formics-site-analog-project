import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-work-details',
    standalone: true,
    imports: [NgFor],
    template: `
        <div class="flex flex-col lg:flex-row section-padding" data-aos="fade-up">
    <div class="w-full">
        <div class="flex flex-row my-2">
            <h1 class="font-semibold mx-2 font-40 head-color w-full">Passmoto</h1>
        </div>
        <p class="text-justify my-5 w-full font-20 text-color">Lorem ipsum dolor sit amet consectetur.
            Cursus neque sit ut eros tortor. Ultrices sodales mattis eu eget rhoncus in. Diam lorem sociis nam non
            facilisis aliquet sit et. Convallis est ullamcorper lacus tortor diam lectus. Imperdiet elementum lectus at
            semper donec nibh.</p>
        <div class="flex flex-row justify-center" data-aos="zoom-in">            
            <img src="https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428154/formics-site/gxcadqak466e2hru2wxb.svg" alt="img">
        </div>
        <p class="text-justify my-5 w-full font-20 text-color">
            Lorem ipsum dolor sit amet consectetur. Cursus neque sit ut eros tortor. Ultrices sodales mattis eu eget rhoncus in. Diam lorem sociis nam non facilisis aliquet sit et. Convallis est ullamcorper lacus tortor diam lectus. Imperdiet elementum lectus at semper donec nibh. Lorem ipsum dolor sit amet consectetur. Cursus neque sit ut eros tortor. Ultrices sodales mattis eu eget rhoncus in. Diam lorem sociis nam non facilisis aliquet sit et. Convallis est ullamcorper lacus tortor diam lectus. Imperdiet elementum lectus at semper donec nibh. Lorem ipsum dolor sit amet consectetur. Cursus neque sit ut eros tortor. Ultrices sodales mattis eu eget rhoncus in. Diam lorem sociis nam non facilisis aliquet sit et. Convallis est ullamcorper lacus tortor diam lectus. Imperdiet elementum lectus at semper donec nibh.
        </p>
        <p class="text-justify my-5 w-full font-20 text-color">
            Lorem ipsum dolor sit amet consectetur. Cursus neque sit ut eros tortor. Ultrices sodales mattis eu eget rhoncus in. Diam lorem sociis nam non facilisis aliquet sit et.
        </p>
        <div>
            <h1 class="text-lg text-color font-20 font-bold my-2">Features and functionalities:</h1>
            <ul>
                <li *ngFor="let functionality of functionalities" class="text-color font-20 my-2">
                    {{functionality.details}}
                </li>
            </ul>
        </div>
        <div>
            <h1 class="text-lg text-color font-20 font-bold mt-5">Technologies Used:</h1>
            <ul>
                <li *ngFor="let technology of technologies" class="text-color font-20 my-2">
                    {{technology.details}}
                </li>
            </ul>
        </div>
    </div>
</div>
  `,
    styleUrls: ['work-details.scss']
})
export default class WorkDetailsPageComponent {
    functionalities = [
        {
            details: 'Service Delivery of your own bike from one place to another in any emergency.'
        },
        {
            details: 'Live tracking of your vehicle.'
        },
        {
            details: 'Another application created for drivers to manage their deliveries.'
        }
    ]
    technologies = [
        {
            details: 'Frontend: Flutter, Angular, Javascript, Android, IOS.'
        },
        {
            details: 'Backend: Firebase, Nx monorepos, MongoDB, Stripe, NestJS.'
        }
    ]
}
