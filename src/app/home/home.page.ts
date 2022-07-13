import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  categories = [];
  highlights = [];
  featured = [];
  catSlideOpts = { 
    freeMode: true,
    slidesPerView: 3.5,
    slidesOffsetBefore: 11,
    spaceBetween: 10,
  };
  constructor(private http: HttpClient) {}

  ngOnInit() { 
    this.http.get('https://devdactic.fra1.digitaloceanspaces.com/foodui/home.json').subscribe((res: any) => {
      console.log((res));
      this.categories = res.categories;
      this.highlights = res.highlights;
      this.featured = res.featured;
    });
  }
}
