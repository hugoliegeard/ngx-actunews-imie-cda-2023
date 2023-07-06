import {Component, OnInit} from '@angular/core';
import {CategorySubjectService} from "../services";
import {Observable} from "rxjs";
import {Category} from "../../shared";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  categories$: Observable<Category[]>;

  constructor(private categorySubjectService: CategorySubjectService) {
  }

  ngOnInit(): void {
    this.categories$ = this.categorySubjectService.categories;
  }
}
