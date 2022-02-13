import { Component, OnInit,ViewChild } from '@angular/core';

import { MatTable } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
      
 
  }

 

}

 