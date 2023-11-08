import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="section-padding flex flex-wrap justify-between items-center">
      <div class="w-33 mx-2 my-5" *ngFor="let service of appServices">
        <div>
          <h1 class="text-sky font-24 font-bold">{{service.heading}}</h1>
          <ul *ngFor="let data of service.content" class="service">
            <li class="font-20 text-color service-details">{{data.details}}</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrls:['services.scss']
})
export default class ServicesPageComponent {
  constructor() {}

  ngOnInit(): void {}

  appServices=[
    {
      heading:'AI & ML Solutions',
      content:[
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
      ]
    },
    {
      heading:'IOT Solutions',
      content:[
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
      ]
    },
    {
      heading:'Mobile Health',
      content:[
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
      ]
    },
    {
      heading:'Cloud based services',
      content:[
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
      ]
    },
    {
      heading:'Web Application',
      content:[
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
      ]
    },
    {
      heading:'Mobile Application',
      content:[
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
      ]
    },
    {
      heading:'Enterprise scale solutions',
      content:[
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
      ]
    },
    {
      heading:'Marketing Solution ',
      content:[
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
      ]
    },
    {
      heading:'Chatbot',
      content:[
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
      ]
    },
    {
      heading:'UI/UX & Graphics',
      content:[
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
      ]
    },
    {
      heading:'Business Analytics',
      content:[
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
      ]
    },
    {
      heading:'DevOps & Hosting',
      content:[
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
        {
          details:'- Lorem ipsum dolor sit amet con'
        },
      ]
    },
  ] 
}
