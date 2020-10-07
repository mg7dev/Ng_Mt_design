import { Component, OnInit } from '@angular/core';
// import $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html', 
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements  OnInit {
  
  isNextVersion = location.hostname.startsWith('next.material.angular.io');
  menuToggleState = false;
   
  footerContent = [
    { 
      title : 'NAVIGATION', 
      children : [
        { name : 'Home', url : '' },
        { name : 'Applications', url : '' },
        { name : 'Product ideas', url : '' },
        { name : 'Contact Us', url : '' },        
      ]
    },
    { 
      title : 'COMPANY',
      children : [
        { name : 'About Us', url : '' },
        { name : 'Press', url : '' },
        { name : 'Partners', url : '' },
        { name : 'Careers', url : '' },     
      ] 
    },
    { 
      title : 'RESOURCES',
      children : [
        { name : 'API Docs', url : '' },
        { name : 'Blog', url : '' },
        { name : 'Status', url : '' },
        { name : '', url : '' },
      ] 
    },
    { 
      title : 'LEGAL',
      children : [
        { name : 'Privacy Policy', url : '' },
        { name : 'EU Privacy Policy', url : '' },
        { name : 'Terms of Use', url : '' },
        { name : 'Privacy Shield Policy', url : '' }, 
      ] 
    },
    { 
      title : 'SUPPORT',
      children : [
        { name : 'Contact', url : '' },
        { name : 'support@etan.io', url : '' },
        { name : '+1 800 111 2221', url : '' },
        { name : 'Talk to us on Live Chat', url : '' },
      ]
    },
  ]

  constructor(){}

  ngOnInit() {

  }

  menuToggle(className){
    if(!this.menuToggleState){ this.openMenu(); this.menuToggleState = true; }
    else { this.closeMenu(); this.menuToggleState = false; }
  }

  openMenu(){
    // $('div.circle').addClass('expand');
            
    // $('div.burger').addClass('open');	
    // $('div.x, div.y, div.z').addClass('collapse');
    // $('.menu li').addClass('animate');
    
    // setTimeout(function(){ 
    //   $('div.y').hide(); 
    //   $('div.x').addClass('rotate30'); 
    //   $('div.z').addClass('rotate150'); 
    // }, 70);
    // setTimeout(function(){
    //   $('div.x').addClass('rotate45'); 
    //   $('div.z').addClass('rotate135');  
    // }, 120);
  }

  closeMenu(){
    // $('div.burger').removeClass('open');	
    // $('div.x').removeClass('rotate45').addClass('rotate30'); 
    // $('div.z').removeClass('rotate135').addClass('rotate150');				
    // $('div.circle').removeClass('expand');
    // $('.menu li').removeClass('animate');
    
    // setTimeout(function(){ 			
    //   $('div.x').removeClass('rotate30'); 
    //   $('div.z').removeClass('rotate150'); 			
    // }, 50);
    // setTimeout(function(){
    //   $('div.y').show(); 
    //   $('div.x, div.y, div.z').removeClass('collapse');
    // }, 70);	
  }
}
