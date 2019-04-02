import { Video } from './../video';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos : Video[] = [
    
    {"_id" : "124336", "title":"1Ftgh Title","url":"7127ashadhj","description":"vcvscvvjhvzxcjv"},
    {"_id" : "124336", "title":"12Ftgh Title","url":"7127ashadhj","description":"vcvscvvjhvzxcjv"},
    {"_id" : "124336", "title":"123Ftgh Title","url":"7127ashadhj","description":"vcvscvvjhvzxcjv"},
    {"_id" : "124336", "title":"1234Ftgh Title","url":"7127ashadhj","description":"vcvscvvjhvzxcjv"},
    {"_id" : "124336", "title":"12345Ftgh Title","url":"7127ashadhj","description":"vcvscvvjhvzxcjv"},
    {"_id" : "124336", "title":"123455Ftgh Title","url":"7127ashadhj","description":"vcvscvvjhvzxcjv"},
    {"_id" : "124336", "title":"1234556Ftgh Title","url":"7127ashadhj","description":"vcvscvvjhvzxcjv"},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
