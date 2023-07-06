import {Component, OnInit} from '@angular/core';
import {Post} from "../../../shared";
import {PostService} from "../../../core";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];
  featuredPosts: Post[] = [];
  nextPage: string|null = null;

  owlOptions: OwlOptions = {
    loop: true,
    nav: false,
    items: 1,
    mouseDrag: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  }

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(apiPostResponse => {
      this.posts = apiPostResponse["hydra:member"];
      this.featuredPosts = this.posts.splice(0,3);
      this.nextPage = apiPostResponse["hydra:view"] ? apiPostResponse["hydra:view"]["hydra:next"] : null;

      console.log(this.posts);
      console.log(this.featuredPosts);
      console.log(this.nextPage);
    });
  }

  onScroll(): void {
    /*this.postService.getPostsFromUri(this.nextPage)?.subscribe(apiPostResponse => {
      for (let post of apiPostResponse["hydra:member"]) {
        this.posts.push(post);
      }
      this.nextPage = apiPostResponse["hydra:view"] ? apiPostResponse["hydra:view"]["hydra:next"] : null;
      console.log(this.nextPage);
    });*/
  }
}
