import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services-details',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="flex flex-col lg:flex-row w-full bg-section1">
    <div class="w-full section-padding"  data-aos="zoom-in">
        <h1 class="font-40 tracking-wider my-7 text-white font-bold w-full leading-tight">Angular JS</h1>
        <p class="text-white tracking-widest my-2 w-full font-24 font-bold">
            Transform your concepts into agile scalable, and effective AngularJS apps.
        </p>
        <p class="text-white tracking-widest my-7 w-full font-20">
            Lorem ipsum dolor sit amet consectetur. Cursus neque sit ut eros tortor. Ultrices sodales mattis eu eget rhoncus in. Diam lorem sociis nam non facilisis aliquet sit et. Convallis est ullamcorper lacus tortor diam lectus. Imperdiet elementum lectus at semper donec nibh.
        </p>
    </div>
</div>

<div class="flex flex-col lg:flex-row bg-section2 section-padding">
    <div class="w-full lg:w-1/2" data-aos="fade-right">
        <div class="flex flex-row my-2">
            <div>
                <h1 class="font-semibold mx-2 font-40 head-color w-full">
                    Lorem ipsum dolor sit amet consectetur.
                </h1>
            </div>
        </div>
        <p class="text-justify my-5 w-full font-20 text-color">
            Lorem ipsum dolor sit amet consectetur. Cursus neque sit ut eros tortor. Ultrices sodales mattis eu eget rhoncus in. Diam lorem sociis nam non facilisis aliquet sit et. Convallis est ullamcorper lacus tortor diam lectus. Imperdiet elementum lectus at semper donec nibh.Lorem ipsum dolor sit amet consectetur. Cursus neque sit ut eros tortor. Ultrices sodales mattis eu eget rhoncus in. Diam lorem sociis nam non facilisis aliquet sit et. Convallis est ullamcorper lacus tortor diam lectus. Imperdiet elementum lectus at semper donec nibh.
        </p>
        <p class="text-justify my-5 w-full font-20 text-color">
            Lorem ipsum dolor sit amet consectetur. Cursus neque sit ut eros tortor. Ultrices sodales mattis eu eget rhoncus in. Diam lorem sociis nam non facilisis aliquet sit et. Convallis est ullamcorper lacus tortor diam lectus. Imperdiet elementum lectus at semper donec nibh.
        </p>
    </div>
    <div class="w-full lg:w-1/2 flex justify-center items-center" data-aos="fade-left">
        <img src="https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428133/formics-site/umnfvp3oac7frewtk8wn.svg" class="section2img" alt="img">
    </div>
</div>

<div class="flex flex-col bg-subTitle section-padding">
    <div class="flex flex-row items-center justify-center w-full">
        <div>
            <hr class="heading-border cursor-pointer duration-500 w-20" />
        </div>
        <h1 class="font-semibold mx-2 font-40 head-color">Sub Title</h1>
        <div>
            <hr class="heading-border cursor-pointer duration-500 w-20" />
        </div>
    </div>
    <div class="flex flex-row justify-center my-5 text-color font-20">
        Lorem ipsum dolor sit amet consectetur lectus viverra enim cursus nibh volutpat risus urna amet dui.
    </div>
    <div class="flex flex-wrap">
        <div class="flex flex-col p-0 lg:p-7 m-0 md:m-5 rounded-md services-card" *ngFor="let service of services;let i=index" data-aos="zoom-in">
            <div class="flex flex-row items-center">
                <div class="font-extrabold text-sky font-24 border-b-4 mr-2"> 
                    0{{i+1}} /  
                </div>
                <div class="font-extrabold text-sky font-24 border-b-4 border-white">
                    {{service.name}}
                </div>
            </div>
            <div class="text-justify font-20 my-2 text-color">
                {{service.content}}
            </div>
        </div>
    </div>
</div>
  `,
  styleUrls:['services-details.scss']
})
export default class ServicesDetailsPageComponent {
  constructor() {}
  services=[
    {
      name:'Lorem ipsum',
      content:'Lorem ipsum dolor sit amet consectetur. Quam pretium elementum nam mattis tortor lectus nibh urna.Nec integer purus convallis at. Non fermentum nulla dui risus pretium at vel aenean urna. In sit iaculis ac ornare integer viverra purus.'
    },
    {
      name:'Lorem ipsum',
      content:'Lorem ipsum dolor sit amet consectetur. Quam pretium elementum nam mattis tortor lectus nibh urna.Nec integer purus convallis at. Non fermentum nulla dui risus pretium at vel aenean urna. In sit iaculis ac ornare integer viverra purus.'
    },
    {
      name:'Lorem ipsum',
      content:'Lorem ipsum dolor sit amet consectetur. Quam pretium elementum nam mattis tortor lectus nibh urna.Nec integer purus convallis at. Non fermentum nulla dui risus pretium at vel aenean urna. In sit iaculis ac ornare integer viverra purus.'
    },
    {
      name:'Lorem ipsum',
      content:'Lorem ipsum dolor sit amet consectetur. Quam pretium elementum nam mattis tortor lectus nibh urna.Nec integer purus convallis at. Non fermentum nulla dui risus pretium at vel aenean urna. In sit iaculis ac ornare integer viverra purus.'
    },
    {
      name:'Lorem ipsum',
      content:'Lorem ipsum dolor sit amet consectetur. Quam pretium elementum nam mattis tortor lectus nibh urna.Nec integer purus convallis at. Non fermentum nulla dui risus pretium at vel aenean urna. In sit iaculis ac ornare integer viverra purus.'
    },
    {
      name:'Lorem ipsum',
      content:'Lorem ipsum dolor sit amet consectetur. Quam pretium elementum nam mattis tortor lectus nibh urna.Nec integer purus convallis at. Non fermentum nulla dui risus pretium at vel aenean urna. In sit iaculis ac ornare integer viverra purus.'
    }
  ]
}