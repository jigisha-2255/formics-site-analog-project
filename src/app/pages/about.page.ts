import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
 
@Component({
    selector: 'app-about',
    standalone: true,
    imports: [NgFor],
    template: `
    <div class="flex flex-col lg:flex-row justify-center section-padding section-height items-center">
    <div class="w-full">
        <div class="flex flex-row">
            <h1 class="font-semibold mx-2 font-40 head-color w-full text-center">We Are Formics.io</h1>
        </div>
        <p class="text-center my-3 w-full font-20 font-normal text-color">Lorem ipsum dolor sit amet consectetur. Cursus neque sit ut eros tortor. Ultrices sodales mattis eu eget rhoncus in. Diam lorem sociis nam non facilisis aliquet sit et. Convallis est ullamcorper lacus tortor diam lectus. Imperdiet elementum lectus at semper donec nibh.</p>
        <div class="flex flex-row justify-center about-img my-5">
          <img src="https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428109/formics-site/df8cxoqmwhio3ap6hxd5.svg" alt="img">
        </div>
    </div>
  </div>
  
  <div class="flex flex-col lg:flex-row bg-section2 section-padding">
    <div class="w-full">
        <div class="flex flex-row my-2">
            <div class="mr-5">
                <h1 class="font-semibold mx-2 font-40 head-color w-full text-end">Company Statistic</h1>
            </div>
            <div class="flex items-center">
                <hr class="heading-border cursor-pointer duration-500 w-20" />
            </div>
        </div>
        <div class="flex flex-wrap">
          <div class="flex flex-row justify-center items-center p-7 m-2 rounded-md statistics-card"
              *ngFor="let service of statistics">
              <div class="w-full lg:w-1/2">
                  <img src="{{service.src}}" alt="img">
              </div>
              <div class="flex flex-col mt-3 font-bold text-gray-400 text-md w-full lg:w-1/2">
                <h1 class="text-4xl text-black">{{service.items}}</h1>
                <div>
                  {{service.name}}
                </div>
              </div>
          </div>
      </div>
    </div>
  </div>
  
  <div class="flex flex-col justify-center bg-white section-height section-padding">
    <div class="flex flex-row items-center justify-center w-full">
        <div>
            <hr class="heading-border cursor-pointer duration-500 w-20" />
        </div>
        <h1 class="font-semibold mx-2 font-40 head-color">Title Here</h1>
        <div>
            <hr class="heading-border cursor-pointer duration-500 w-20" />
        </div>
    </div>
    <div class="flex flex-wrap relative mt-16">
        <div class="w-1/5 flex flex-col items-center justify-center w-33 mx-2 my-10 xl:my-0 p-5 goal-cards rounded-lg relative" *ngFor="let goal of goals">
            <img class="my-2 absolute -top-14" src="{{goal.src}}" alt="img">
            <h1 class="relative mt-14 mb-2 uppercase font-semibold mx-2 font-24 head-color">{{goal.name}}</h1>
            <p class="text-justify text-color font-20 my-2">{{goal.details}}</p>
        </div>
    </div>
  </div>
  
  <div class="flex flex-col lg:flex-row bg-section2 section-padding">
    <div class="w-full">
        <div class="flex flex-row justify-end my-2">
            <div class="flex items-center">
                <hr class="heading-border cursor-pointer duration-500 w-20" />
            </div>
            <div class="ml-2">
                <h1 class="font-semibold mx-2 font-40 head-color w-full text-end">Our Solutions Highlights</h1>
            </div>
        </div>
        <div class="flex flex-wrap justify-between">
            <div class="flex flex-col px-5 py-3 my-3 rounded-md highlights-card justify-center" *ngFor="let highlight of highlights">
                <div class="flex flex-row items-center">
                    <div class="text-lightgray flex items-center font-20 font-normal -tracking-wide">
                        {{highlight.detail}}
                      </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  `,
  styleUrls:['about.scss']
})
export default class AboutPageComponent {
  constructor() {}

  ngOnInit(): void {}

  statistics=[
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428138/formics-site/hg5l44qpmkbkrpolw3ep.svg',
      items:'30+',
      name:'Professionals'
    },
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428138/formics-site/j1jrxfz3aq83owv6sx4y.svg',
      items:'2+',
      name:'Years of Industry Experiences'
    },
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428139/formics-site/cpki22l3gepqn9pyv9gd.svg',
      items:'30+',
      name:'Worldwide Clients'
    }
  ]

  goals=[
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428139/formics-site/hn9qewzolovovqedzpf2.svg',
      name:'Vision',
      details:'Lorem ipsum dolor sit amet consectetur. Quam pretium elementum nam mattis tortor lectus nibh urna. Nec integer purus convallis at. Non fermentum nulla dui risus pretium at vel aenean urna. In sit iaculis ac ornare integer viverra purus.'
    },
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428127/formics-site/lav3b1e2j5wqipqt1tjt.svg',
      name:'Mission',
      details:'Lorem ipsum dolor sit amet consectetur. Quam pretium elementum nam mattis tortor lectus nibh urna. Nec integer purus convallis at. Non fermentum nulla dui risus pretium at vel aenean urna. In sit iaculis ac ornare integer viverra purus.'
    },
    {
      src:'https://res.cloudinary.com/dlb7imsxr/image/upload/v1699440050/formics-site/hg7h2axzwczgqynkf7h0.svg',
      name:'Core Value',
      details:'Lorem ipsum dolor sit amet consectetur. Quam pretium elementum nam mattis tortor lectus nibh urna. Nec integer purus convallis at. Non fermentum nulla dui risus pretium at vel aenean urna. In sit iaculis ac ornare integer viverra purus.'
    }
  ]

  highlights=[
    {
      detail:'Lorem ipsum dolor sit amet consectetur.'
    },
    {
      detail:'Lorem ipsum dolor sit amet consectetur Quam pretium ela.'
    },
    {
      detail:'Lorem ipsum dolor sit amet.'
    },
    {
      detail:'Lorem ipsum dolor sit amet consectetur.'
    },
    {
      detail:'Lorem ipsum dolor sit amet consectetur.'
    },
    {
      detail:'Lorem ipsum dolor sit amet consectetur Quam pretium ela.'
    },
    {
      detail:'Lorem ipsum dolor sit amet consectetur Quam pretium ela.'
    },
    {
      detail:'Lorem ipsum dolor sit amet.'
    },
    {
      detail:'Lorem ipsum dolor sit amet consectetur.'
    },
    {
      detail:'Lorem ipsum dolor sit amet consectetur Quam pretium ela.'
    },
  ]
}
