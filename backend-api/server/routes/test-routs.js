import * as testController from '../controllers/test-controller';


export default [
  {
    method: 'GET', path: '/test/list',
    handler: testController.testList,
  },

  {
    method: 'GET', path: '/test/article',
    handler: testController.testArticle,
  }
];
