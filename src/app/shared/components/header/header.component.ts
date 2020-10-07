import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', 
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements  OnInit {
  isNextVersion = location.hostname.startsWith('next.material.angular.io');
  skipLinkHref: string|null;
  skipLinkHidden = true;
  etanMobile = false;
  menuToggleState = false;  
  ngOnInit() { }

  menuToggle(className){
    if(!this.menuToggleState){ this.openMenu(); this.menuToggleState = true; }
    else { this.closeMenu(); this.menuToggleState = false; }
  }

  openMenu(){
    $('div.circle').addClass('expand');
            
    $('div.burger').addClass('open');	
    $('div.x, div.y, div.z').addClass('collapse');
    $('.menu li').addClass('animate');
    
    setTimeout(function(){ 
      $('div.y').hide(); 
      $('div.x').addClass('rotate30'); 
      $('div.z').addClass('rotate150'); 
    }, 70);
    setTimeout(function(){
      $('div.x').addClass('rotate45'); 
      $('div.z').addClass('rotate135');  
    }, 120);
  }

  closeMenu(){
    $('div.burger').removeClass('open');	
    $('div.x').removeClass('rotate45').addClass('rotate30'); 
    $('div.z').removeClass('rotate135').addClass('rotate150');				
    $('div.circle').removeClass('expand');
    $('.menu li').removeClass('animate');
    
    setTimeout(function(){ 			
      $('div.x').removeClass('rotate30'); 
      $('div.z').removeClass('rotate150'); 			
    }, 50);
    setTimeout(function(){
      $('div.y').show(); 
      $('div.x, div.y, div.z').removeClass('collapse');
    }, 70);	
  }

}
