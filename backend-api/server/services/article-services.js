import * as Redis from './redis-services.js';
const key = 'article';
const _makeKey = articleId => `${key}:${articleId}`;

export const parseArticle     = article => JSON.parse(article);
export const deleteArticle    = articleId => Redis.del(_makeKey(articleId));

export const setRedisArticle = async ({id, title='', url='', type='', by=''}) => {
  const articleKey = _makeKey(id);

  return await Redis.mSet([
    `${articleKey}:id`,     id,
    `${articleKey}:title`,  title,
    `${articleKey}:url`,    url,
    `${articleKey}:type`,   type,
    `${articleKey}:author`, by,
  ]);
};

export const getRedisArticle = async (id) => {
  const articleKey = _makeKey(id);

  const article = await Redis.mGet([
    `${articleKey}:id`,
    `${articleKey}:title`,
    `${articleKey}:url`,
    `${articleKey}:type`,
    `${articleKey}:author`,
  ]);

  return {
    id: article[0],
    title: article[1],
    url: article[2],
    type: article[3],
    author: article[4],
  };
};
