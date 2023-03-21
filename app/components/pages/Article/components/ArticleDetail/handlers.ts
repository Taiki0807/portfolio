import { rest } from 'msw';

export const handlers = [
  rest.get('*/api/blog/posts/5', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 5,
          category: {
            id: 1,
            name: 'none',
            color: '#000000',
          },
          main_text:
            '<h1>テスト</h1>\n' +
            '<h2>ssss</h2>\n' +
            '<p>テスト投稿</p>\n' +
            '<h1>test</h1>\n' +
            '<p>ssss</p>\n' +
            '<h1>test</h1>\n' +
            '<hr />\n' +
            '<p><img alt="" src="http://localhost:8000/media/editor/1390_pc_thumb_20230319202531845776.jpg" /></p>\n' +
            '<p><code>aaaaaa</code></p>\n' +
            '<h1>test2222</h1>',
          toc_text:
            '<ul>\n' +
            '<li><a href="#_1">テスト</a></li>\n' +
            '<li><a href="#test">test</a></li>\n' +
            '<li><a href="#test_1">test</a></li>\n' +
            '<li><a href="#test2222">test2222</a></li>\n' +
            '</ul>',
          title: 'Test投稿',
          thumbnail: null,
          lead_text: 'テスト',
          created_at: '2023-03-08T15:29:39+09:00',
        },
      ])
    );
  }),
];
