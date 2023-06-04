import { rest } from 'msw';
import productList from './data/productList.json';

export const handlers = [
  // 経歴リスト
  rest.get('/careerList', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(productList));
  }),
  // 制作物リスト
  rest.get('/productList', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(productList));
  })
];
