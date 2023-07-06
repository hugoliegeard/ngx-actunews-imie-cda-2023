import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiCategoryResponse, ApiPostResponse} from "../../../shared";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<ApiPostResponse> {
    return this.http.get<ApiPostResponse>(environment.apiEndpoint + '/api/posts');
  }

  getPostsFromUri(uri?: string | null) {
    return uri ? this.http.get<ApiPostResponse>(environment.apiEndpoint + uri) : null;
  }

}
