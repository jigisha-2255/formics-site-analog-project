import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-work',
  standalone: true,
  imports:[NgFor,RouterLink,RouterOutlet],
  template: `
      <div class="flex flex-col lg:flex-row section-padding">
        <div class="w-full">
            <div class="flex flex-row my-2">
                <h1 class="font-semibold mx-2 font-40 head-color w-full text-center">Our Work</h1>
            </div>
            <p class="text-justify my-5 w-full font-20 text-color tracking-wide">Lorem ipsum dolor sit amet consectetur.
                Cursus neque sit ut eros tortor. Ultrices sodales mattis eu eget rhoncus in. Diam lorem sociis nam non
                facilisis aliquet sit et. Convallis est ullamcorper lacus tortor diam lectus. Imperdiet elementum lectus at
                semper donec nibh.</p>
            <div class="flex flex-wrap justify-between">
                <div class="flex flex-col items-center p-7 my-5 rounded-md work-card" *ngFor="let work of works" routerLink="/work/work-details">
                    <div class="flex flex-row items-center">
                        <img src="{{work.src}}" alt="img">
                    </div>
                    <div class="text-justify font-24 font-bold mt-5">
                        {{work.heading}}
                    </div>
                    <div class="text-justify font-20 font-normal head-color">
                        {{work.date}}
                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-center">
                <!-- <pagination-controls (pageChange)="p = $event" class="float-right"></pagination-controls> -->
            </div>
        </div>
      </div>
  `,
  styleUrls:['../work.scss']
})
export default class WorkPageComponent {
  constructor() {}
  p:any=0;
  ngOnInit(): void {}
  works=[
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428154/formics-site/gxcadqak466e2hru2wxb.svg',
      heading:'Passmoto',
      date:'September 19th, 2018'
    },
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428154/formics-site/gxcadqak466e2hru2wxb.svg',
      heading:'Passmoto',
      date:'September 19th, 2018'
    },
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428154/formics-site/gxcadqak466e2hru2wxb.svg',
      heading:'Passmoto',
      date:'September 19th, 2018'
    },
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428154/formics-site/gxcadqak466e2hru2wxb.svg',
      heading:'Passmoto',
      date:'September 19th, 2018'
    },
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428154/formics-site/gxcadqak466e2hru2wxb.svg',
      heading:'Passmoto',
      date:'September 19th, 2018'
    },
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428154/formics-site/gxcadqak466e2hru2wxb.svg',
      heading:'Passmoto',
      date:'September 19th, 2018'
    },
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428154/formics-site/gxcadqak466e2hru2wxb.svg',
      heading:'Passmoto',
      date:'September 19th, 2018'
    },
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428154/formics-site/gxcadqak466e2hru2wxb.svg',
      heading:'Passmoto',
      date:'September 19th, 2018'
    },
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428154/formics-site/gxcadqak466e2hru2wxb.svg',
      heading:'Passmoto',
      date:'September 19th, 2018'
    },
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428154/formics-site/gxcadqak466e2hru2wxb.svg',
      heading:'Passmoto',
      date:'September 19th, 2018'
    },
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428154/formics-site/gxcadqak466e2hru2wxb.svg',
      heading:'Passmoto',
      date:'September 19th, 2018'
    },
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428154/formics-site/gxcadqak466e2hru2wxb.svg',
      heading:'Passmoto',
      date:'September 19th, 2018'
    },
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428154/formics-site/gxcadqak466e2hru2wxb.svg',
      heading:'Passmoto',
      date:'September 19th, 2018'
    },
  ]
}
