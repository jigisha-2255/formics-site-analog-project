import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule],
  template: `<div class="main-container">
  <div class="h-[100px] items-center justify-between w-full flex flex-col lg:flex-row section-padding bg-simple-header" [ngClass]="{'bg-header':router.url==='/','bg-services-header':router.url==='/web-services'}">
    <div class="hidden lg:inline-flex w-full items-center">
      <div class="flex w-1/2">
        <div class="w-1/2 flex justify-center">
          <div class="flex justify-center">
          <div>
              <img src="https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428128/formics-site/uxrppfteehcjsgg24cwd.svg" alt="img">
            </div>
            <div class="flex items-center w-80 pl-4 uppercase text-white text-2xl font-bold">
              Formics.io
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div class="flex flex-row justify-between items-center header">
          <div>
            <a class="text-gray-200" routerLink="/" routerLinkActive="active" [ngClass]="{'active':router.url==='/'}">
              Home
            </a>
          </div>
          <div>
            <a class="text-gray-200" routerLink="/about" routerLinkActive="active" [ngClass]="{'active':router.url==='/about'}">
              About
            </a>
          </div>
          <div>
            <div class="dropdown py-5">
              <button class="dropbtn" routerLink="/services" [ngClass]="{'active':router.url==='/services','active-link':router.url==='/web-services'}">
                Services
                <i class="fa fa-angle-down text-xs"></i>
              </button>
              <div class="dropdown-content dropdown-shadow rounded-lg">
                <div class="h-2 rounded-t-lg" style="background-color: #ADCFFF;"> 
                </div>
                <a routerLink="/web-services" routerLinkActive="active" [ngClass]="{'active':router.url==='/web-services'}" class="text-center text-sm dropdown-text">Web</a>
                <a routerLink="" class="text-center text-sm dropdown-text">Mobile</a>
                <a routerLink="" class="text-center text-sm dropdown-text">Bot</a>
              </div>
            </div>
          </div>
          <div>
            <a class="text-gray-200" routerLink="/work" routerLinkActive="active" [ngClass]="{'active':router.url==='/work','active-link':router.url==='/work/work-details'}">
              Work
            </a>
          </div>
          <div>
            <button class="border-b text-gray-200 px-5 py-2" style="border:1px solid white; border-radius:5px;">Contact
              us</button>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:h-32 h-24 w-full lg:hidden flex justify-between">
      <div class="w-3/4 flex flex-row items-center">
        <div>
          <img src="https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428128/formics-site/uxrppfteehcjsgg24cwd.svg" alt="img">
        </div>
        <div class="flex items-center w-80 pl-4 uppercase text-white text-2xl font-bold">
          Formics.io
        </div>
      </div>

      <div class="w-1/4 flex justify-end items-center">
        <i class="fa fa-bars text-white" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"></i>
      </div>
      <div id="drawer-navigation"
        class="bg-header fixed top-0 left-0 z-40 w-64 h-screen pb-4 overflow-y-auto transition-transform -translate-x-full"
        tabindex="-1" aria-labelledby="drawer-navigation-label">
        <div class="pb-4 px-5 overflow-y-auto">
          <ul class="font-medium">
            <li class="flex justify-between items-center border-bottom navbar" data-drawer-hide="drawer-navigation">
              <a routerLink="/" routerLinkActive="active" [ngClass]="{'active':router.url==='/'}"  class="flex items-center p-3 text-gray-200 rounded-lg dark:text-white group">
                <span class="ml-3">Home</span>
              </a>
            </li>
            <li class="flex justify-between items-center border-bottom navbar" data-drawer-hide="drawer-navigation">
              <a routerLink="/about" routerLinkActive="active" [ngClass]="{'active':router.url==='/about'}" class="flex items-center p-3 text-gray-200 rounded-lg dark:text-white group">
                <span class="flex-1 ml-3 whitespace-nowrap">About</span>
              </a>
            </li>
            <li class="flex justify-between items-center border-bottom navbar" data-drawer-hide="drawer-navigation">
              <a routerLink="services" routerLinkActive="active" [ngClass]="{'active':router.url==='/services'}"
                class="flex items-center p-3 text-gray-200 rounded-lg group">
                <span class="ml-3">Services</span>
              </a>
              <i class="fa fa-angle-right py-0 width-20 text-white" data-drawer-target="drawer-navigation-services"
                data-drawer-show="drawer-navigation-services" data-drawer-hide="drawer-navigation"
                aria-controls="drawer-navigation"></i>
            </li>
            <li class="flex justify-between items-center border-bottom navbar" data-drawer-hide="drawer-navigation">
              <a routerLink="work" routerLinkActive="active" [ngClass]="{'active':router.url==='/work'}" class="flex items-center p-3 text-gray-200 rounded-lg dark:text-white group">
                <span class="flex-1 ml-3 whitespace-nowrap">Work</span>
              </a>
            </li>

            <li class="flex justify-between items-center border-bottom navbar">
              <button class="border-b text-gray-200 px-5 py-2"
                style="border:1px solid white; border-radius:5px;">Contact
                us</button>
            </li>
          </ul>
        </div>
      </div>

      <div id="drawer-navigation-services"
        class="fixed top-0 left-0 z-40 w-64 h-screen pb-4 overflow-y-auto transition-transform -translate-x-full bg-header"
        tabindex="-1" aria-labelledby="drawer-navigation-label">
        <div class="pb-4 px-5 overflow-y-auto">
          <ul class="font-medium">
            <li class="flex justify-between items-center border-bottom navbar" data-drawer-hide="drawer-navigation-services">
              <a routerLink="services" routerLinkActive="active" routerLink="web-services" class="flex items-center p-3 text-gray-200 rounded-lg dark:text-white group">
                <span class="ml-3">Web</span>
              </a>
            </li>
            <li class="flex justify-between items-center border-bottom navbar" data-drawer-hide="drawer-navigation-services">
              <a routerLink="" class="flex items-center p-3 text-gray-200 rounded-lg dark:text-white group">
                <span class="flex-1 ml-3 whitespace-nowrap">Mobile</span>
              </a>
            </li>
            <li class="flex justify-between items-center border-bottom navbar" data-drawer-hide="drawer-navigation-services">
              <a routerLink=""
                class="flex items-center p-3 text-gray-200 rounded-lg dark:text-white group">
                <span class="ml-3">Bot</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <router-outlet></router-outlet>
  <div class="flex flex-col py-5 bg-footer section-padding">
    <div class="flex flex-col items-center text-center justify-center px-5 lg:px-24 my-10">
      <p class="cursive-font font-40 text-white uppercase text-bold">Formics.io</p>
    </div>
    <div class="flex flex-col lg:flex-row items-center pb-10 border-b">
      <div
        class="flex flex-col w-full text-center justify-center items-center text-white uppercase w-33 my-2 lg:my-0 text-lg">
        <p>205 - Corporate Avenue,<br/>
        Jyotinagar Main Road, B/h Crystal Mall,<br/>
        Rajkot - 360005</p>
      </div>
      <div class="flex flex-col items-center text-white w-33 my-2 lg:my-0 font-20">
        <p>
          <b>Phone:</b> +91 93135 77801 <br />
        </p>
        <p>
          <b>Email:</b> coffeeformics.io
        </p>
      </div>
      <div class="flex flex-row items-center justify-center w-33 my-2 lg:my-0">
        <i class="fa-brands fa-twitter rounded-full p-2 text-white icon-bg"></i>
        <i class="fa-brands fa-whatsapp rounded-full p-2 text-white icon-bg"></i>
        <i class="fa-brands fa-facebook rounded-full p-2 text-white icon-bg"></i>
        <i class="fa-brands fa-instagram rounded-full p-2 text-white icon-bg"></i>
        <i class="fa-brands fa-skype rounded-full p-2 text-white icon-bg"></i>
        <i class="fa-brands fa-linkedin rounded-full p-2 text-white icon-bg"></i>
      </div>
    </div>
    <div class="flex flex-row justify-center px-5 lg:px-20">
      <small class="mt-5 footer-text text-lg text-white">Copyright © 2023. All Rights
        Reserved.</small>
    </div>
  </div>
</div> `,
  styles: [
    `
      :host {
        max-width: 100%;
        width:100%;
        margin: 0;
        padding: 0;
      }
      .bg-header,.bg-services-header,.bg-web-services{
          background-image: url('https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428126/formics-site/ovx9djjpt5nrid9d7qc6.svg');
          background-color:#3686F7;
          background-size:cover;
          background-repeat:no-repeat;
      }
      .bg-simple-header,.bg-work-header,.bg-services-details,.bg-work-details{
          background-color:#3686F7;
      }
      .bg-footer{
          background-color:#3686F7;
      }
      .main-container{
          width:100%;
      }
      .section-padding{
          padding-left:7rem;
          padding-right:7rem;
      }
      .w-33{
          width:33.33%;
      }
      .active{
          color:#fff;
      }
      .active-link{
        color:#fff!important;
      }
      .dropbtn.active{
        color:#fff!important;
      }

      .dropdown {
          float: left;
          overflow: hidden;
      }
      .dropdown .dropbtn {
          border: none;
          outline: none;
          --tw-text-opacity: 1;
          color: rgb(229 231 235 / var(--tw-text-opacity));
          background-color: inherit;
          font-family: inherit;
          margin: 0;
          height: auto;
      }
      .dropdown-shadow{
          box-shadow: 0px 0px 10px 0px #2D328240;
      }

      .dropdown-text{
          color: #667085;
      }

      a:hover{
          cursor: pointer;
      }
      .header div a,.header div button{
          font-size:20px;
      }
      .dropdown-content {
          display: none;
          position: absolute;
          background-color: #fff;
          min-width: 100px;
          z-index: 1;
          margin-top: 10px;
      }

      .dropdown-content a {
          float: none;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          text-align: left;
      }

      .dropdown:hover .dropdown-content {
          display: block;
      }

      .icon-bg{
          background-color:rgba(255,255,255,0.1);
          height: 48px;
          width:48px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size:24px;
          margin:0 7px;
      }
      .font-20{
          font-size:20px;
      }
      .font-40{
          font-size:40px;
      }
      @media(max-width:640px){
          .section-padding{
              padding-left:2rem;
              padding-right:2rem;
          }
          .w-33{
              width:100%;
          }
          .bg-header,.bg-services-header,.bg-web-services{
              background-image: url('https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428126/formics-site/ovx9djjpt5nrid9d7qc6.svg');
              background-color:#3686F7;
              background-size: auto;
          }
      }
      @media(min-width:640px) and (max-width:768px){
          .section-padding{
              padding-left:2rem;
              padding-right:2rem;
          }
          .w-33{
              width:100%;
          }
          .bg-header,.bg-services-header,.bg-web-services{
              background-image: url('https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428126/formics-site/ovx9djjpt5nrid9d7qc6.svg');
              background-color:#3686F7;
              background-size: auto;
          }
      }

      @media(min-width:768px) and (max-width:1024px){
          .section-padding{
              padding-left:2rem;
              padding-right:2rem;
          }
          .bg-header,.bg-services-header,.bg-web-services{
              background-image: url('https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428126/formics-site/ovx9djjpt5nrid9d7qc6.svg');
              background-color:#3686F7;
              background-size: cover;
          }
      }
      @media(min-width:1024px) and (max-width:1280px){
          .section-padding{
              padding-left:4rem;
              padding-right:2rem;
          }
          .bg-header,.bg-services-header,.bg-web-services{
              background-image: url('https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428126/formics-site/ovx9djjpt5nrid9d7qc6.svg');
              background-color:#3686F7;
              background-size: cover;
          }
      }
      @media(min-width:1280px) and (max-width:1800px){
          .bg-header,.bg-services-header,.bg-web-services{
              background-image: url('https://res.cloudinary.com/dlb7imsxr/image/upload/v1699428126/formics-site/ovx9djjpt5nrid9d7qc6.svg');
              background-color:#3686F7;
              background-size: cover;
          }
      }
    `,
  ],
})
export class AppComponent {
  constructor(public router:Router){}
}
