import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articleList : Article[] = [
    new Article(1, 'article1'),
    new Article(2, 'article2'),
    new Article(3, 'article3')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
