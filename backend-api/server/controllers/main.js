import _split from 'lodash/split';
import _map from 'lodash/map';

import * as Redis           from '../services/redis-services.js';
import * as HnAPI           from '../services/hn-services.js';
import * as ArticleServices from '../services/article-services.js';
import * as ListServices    from '../services/list-services.js';

export const maintainData = async (request, h) => {
  try {
    let list = await HnAPI.getLatestHNArticles();
    list = ListServices.removeEdgeBrackets(list);
    ListServices.setList(list);
    list = _split(list, ',');
    ListServices.addMissingArticlesFromList(list);
    ListServices.clearLastList();

    return h.response('success');
  } catch (err) {
    console.log(err);
    return 'Server Error Occured';
  }
};


export const getArticles = async (request) => {
  const interval = request.params.interval;

  try {
    const list = _split(await ListServices.getIndex(interval), ',');

    return await Promise.all(_map(list, async articleId => 
      await ArticleServices.getRedisArticle(articleId)));

  } catch (err) {
    console.log(err);
    return 'Server Error Occured';
  }
};

export const nukeItAll = async () => await Redis.flushDb();
export const getLists  = async () => await ListServices.getLists(-1);
