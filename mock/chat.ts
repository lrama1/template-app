import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/chat',
    method: 'post',
    response: ({ body }) => {
      return {
        code: 0,
        data: `Response to: ${body.message}`,
      };
    },
  },
] as MockMethod[];