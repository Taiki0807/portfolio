export const getFetcher = <T>(
  path: string,
  cache: RequestCache = 'default',
  headers = {}
): Promise<T> => {
  return fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + path,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      cache,
    }
  ).then((res) => HandleErrors(res));
};

export const postFetcher = <T>(
  path: string,
  body: T,
  headers = {}
) => {
  return fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL + path,
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    }
  ).then((res) => HandleErrors(res));
};

const HandleErrors = (res: any) => {
  if (res.ok) {
    return res.json();
  }

  switch (res.status) {
    case 400:
      throw Error('INVALID_TOKEN');
    case 401:
      throw Error('UNAUTHORIZED');
    case 403:
      const error: any = new Error('FORBIDDEN');
      error.info = res.json();
      error.status = res.status;
      throw error;
    case 404:
      throw Error('NOT_FOUND');
    case 500:
      throw Error('INTERNAL_SERVER_ERROR');
    case 502:
      throw Error('BAD_GATEWAY');
    default:
      throw Error('UNHANDLED_ERROR');
  }
};
