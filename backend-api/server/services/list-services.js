import _uniq  from 'lodash/uniq';
import _split from 'lodash/split';
import _forEach from 'lodash/forEach';
import _includes from 'lodash/includes';

import * as HnAPI from './hn-services.js';
import * as Redis from './redis-services.js';
import * as ArticleServices from './article-services.js';

const key = 'list:';
const _removeUnusedArticles = async ariticleList => {
  const lists = await getLists(-1);
  const articleIdList = _uniq(_split(lists.join(','), ','));

  _forEach(_split(ariticleList, ','), async articleId => {
    const isIncluded = _includes(articleIdList, articleId);
    if (!isIncluded) ArticleServices.deleteArticle(articleId);
  });
};


// redis functions
export const getListSize =   () => Redis.lLen(key);
export const getLists    = max  => Redis.lRange(key, max);
export const trimList    = num  => Redis.lTrim(key, num);
export const setList     = list => Redis.lPush(key, list);
export const getIndex    = num  => Redis.lIndex(key, num);
export const removeEdgeBrackets = string => string.substring(1, string.length - 1);


export const addMissingArticlesFromList = ariticleList => {
  try {
    _forEach(ariticleList, async articleId => {

      let article = await ArticleServices.getRedisArticle(articleId);

      if (!article.id) {
        let articleObj = await HnAPI.getSingleHNArticle(articleId); //hn article api
        articleObj = ArticleServices.parseArticle(articleObj); //pull article as object
        ArticleServices.setRedisArticle(articleObj);
      }
    });
    return null;
  } catch (err) {
    console.log(err);
    return 'Server Error Occured';
  }
};


export const clearLastList = async () => {
  const listLength = await getListSize();

  if (listLength > 5) {
    const lastList = await getIndex(-1);
    _removeUnusedArticles(lastList);
    await trimList(5);
  }
  return null;
};
