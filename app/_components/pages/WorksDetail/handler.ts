import { rest } from 'msw';
import { Works } from '../type';

export const handlers = [
  rest.get('*/api/works/works/5', (req, res, ctx) => {
    const mockWorksData: Works[] = [
      {
        id: 5,
        category: {
          id: 1,
          name: 'none',
          color: '#000000',
        },
        tag: [
          {
            id: 1,
            name: 'Next.js',
          },
          {
            id: 2,
            name: '機械学習',
          },
        ],
        title: 'Test投稿',
        thumbnail: '',
        description: 'テスト',
        githubLink: '',
        siteLink: '',
      },
    ];

    return res(ctx.status(200), ctx.json(mockWorksData));
  }),
];
