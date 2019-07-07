import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-review',
  templateUrl: './news-review.component.html',
  styleUrls: ['./news-review.component.scss']
})
export class NewsReviewComponent implements OnInit {

  newsReview: string = "news";
  
  constructor() { }

  ngOnInit() {
  }

  chonNewsReview(val){
    this.newsReview = val;
   
  }

}
