import Request from 'request-promise-native';

const host = 'https://hacker-news.firebaseio.com';

export const getLatestHNArticles = () => Request(`${host}/v0/topstories.json`);
export const getSingleHNArticle = articleId => Request(`${host}/v0/item/${articleId}.json`);
