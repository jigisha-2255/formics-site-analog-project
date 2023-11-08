import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-web-services',
    standalone: true,
    imports: [NgFor,RouterLink,RouterOutlet],
    template: `
    <div class="flex flex-col lg:flex-row items-center bg-section1 section-padding">
    <div class="w-full" data-aos="fade-up">
        <h1 class="font-40 tracking-wider my-5 text-white font-bold w-full leading-tight"> 
            Web Application<br/> Consectetur Amet Tellus Pellentesque.
        </h1>
        <p class="text-white tracking-widest my-5 w-full font-24">
            Lorem ipsum dolor sit amet consectetur. Cursus neque sit ut eros tortor. Ultrices sodales mattis eu eget rhoncus in. Diam lorem sociis nam non facilisis aliquet sit et. Convallis est ullamcorper lacus tortor diam lectus. Imperdiet elementum lectus at semper donec nibh.
        </p>
    </div>
    </div>

    <div class="flex flex-col bg-white section-padding">
        <div class="flex flex-row items-center justify-center w-full">
            <div>
                <hr class="heading-border cursor-pointer duration-500 w-20" />
            </div>
            <h1 class="font-semibold mx-2 font-40 head-color">We Provide</h1>
            <div>
                <hr class="heading-border cursor-pointer duration-500 w-20" />
            </div>
        </div>
        <div class="flex flex-row justify-center my-5 text-color font-20">
            Lorem ipsum dolor sit amet consectetur lectus viverra enim cursus nibh volutpat risus urna amet dui.
        </div>
        <div class="flex flex-wrap">
            <div class="flex flex-col p-7 m-5 rounded-md services-card" *ngFor="let service of services" data-aos="zoom-in"> 
                <div class="flex flex-row items-center">
                    <div class="font-bold text-sky font-24">
                        {{service.name}}
                    </div>
                </div>
                <div class="text-justify font-20 my-2 text-color">
                    {{service.content}}
                </div>
                <div>
                    <button class="text-sky font-bold text-lg" routerLink="/web-services/services-details">Read More<i class="fa fa-angle-right ml-2 text-xs"></i></button>
                </div>
            </div>
        </div>
    </div>
  `,
    styleUrls: ['../web-services.scss']
})
export default class WebServicesPageComponent {
    services = [
        {
            name: 'Angular JS',
            content: 'Lorem ipsum dolor sit amet consectetur. Quam pretium elementum nam mattis tortor lectus nibh urna.Nec integer purus convallis at. Non fermentum nulla dui risus pretium at vel aenean urna. In sit iaculis ac ornare integer viverra purus.'
        },
        {
            name: 'React JS',
            content: 'Lorem ipsum dolor sit amet consectetur. Quam pretium elementum nam mattis tortor lectus nibh urna.Nec integer purus convallis at. Non fermentum nulla dui risus pretium at vel aenean urna. In sit iaculis ac ornare integer viverra purus.'
        },
        {
            name: 'Node JS',
            content: 'Lorem ipsum dolor sit amet consectetur. Quam pretium elementum nam mattis tortor lectus nibh urna.Nec integer purus convallis at. Non fermentum nulla dui risus pretium at vel aenean urna. In sit iaculis ac ornare integer viverra purus.'
        },
        {
            name: '.Net Core',
            content: 'Lorem ipsum dolor sit amet consectetur. Quam pretium elementum nam mattis tortor lectus nibh urna.Nec integer purus convallis at. Non fermentum nulla dui risus pretium at vel aenean urna. In sit iaculis ac ornare integer viverra purus.'
        },
        {
            name: 'C#',
            content: 'Lorem ipsum dolor sit amet consectetur. Quam pretium elementum nam mattis tortor lectus nibh urna.Nec integer purus convallis at. Non fermentum nulla dui risus pretium at vel aenean urna. In sit iaculis ac ornare integer viverra purus.'
        },
        {
            name: 'PHP',
            content: 'Lorem ipsum dolor sit amet consectetur. Quam pretium elementum nam mattis tortor lectus nibh urna.Nec integer purus convallis at. Non fermentum nulla dui risus pretium at vel aenean urna. In sit iaculis ac ornare integer viverra purus.'
        },
        {
            name: 'Javascript',
            content: 'Lorem ipsum dolor sit amet consectetur. Quam pretium elementum nam mattis tortor lectus nibh urna.Nec integer purus convallis at. Non fermentum nulla dui risus pretium at vel aenean urna. In sit iaculis ac ornare integer viverra purus.'
        }
    ]
}
