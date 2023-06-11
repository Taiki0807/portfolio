import { rest } from 'msw';

export const handlers = [
  rest.get('*/api/blog/posts/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 2,
          category: {
            id: 1,
            name: 'none',
            color: '#000000',
          },
          title: 'Test2',
          thumbnail:
            'http://34.82.101.16/media/1390_pc_thumb.jpg',
          lead_text: 'テスト投稿です',
        },
        {
          id: 1,
          category: {
            id: 1,
            name: 'none',
            color: '#000000',
          },
          title: 'Test投稿',
          thumbnail: null,
          lead_text: 'test',
        },
      ])
    );
  }),
];
