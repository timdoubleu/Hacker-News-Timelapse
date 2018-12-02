import _split from 'lodash/split';

import * as HnAPI           from '../services/hn-services.js';
import * as ArticleServices from '../services/article-services.js';
import * as ListServices    from '../services/list-services.js';


export const testList = async () => {
  let list = await HnAPI.getLatestHNArticles();
  list = ListServices.removeEdgeBrackets(list);
  list = _split(list, ',');
  list.forEach(async articleId => {
    const a = await HnAPI.getSingleArticle(articleId)
    console.log(a);
  });
  return list;
};
  
  
export const testArticle = async () => {

  let articleObj = await HnAPI.getSingleArticle('16148441'); //hn article api
  articleObj = ArticleServices.parseArticle(articleObj); //pull article as object

  await ArticleServices.setRedisArticle(articleObj);
  return await ArticleServices.getRedisArticle('16148441');
};
