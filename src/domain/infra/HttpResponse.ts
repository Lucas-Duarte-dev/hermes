export type HttpResponse = {
  statusCode: number;
  body: any;
};

export function ok<T = Object | null>(dto?: T): HttpResponse {
  return {
    statusCode: 200,
    body: dto,
  };
}

export function created(): HttpResponse {
  return {
    statusCode: 201,
    body: undefined,
  };
}

export function clientError(error: Error): HttpResponse {
  return {
    statusCode: 400,
    body: {
      error: error.message,
    },
  };
}

export function unauthorized(error: Error): HttpResponse {
  return {
    statusCode: 401,
    body: {
      error: error.message,
    },
  };
}

export function fail(error: Error): HttpResponse {
  console.error(error.stack);

  return {
    statusCode: 500,
    body: {
      error: error.message,
    },
  };
}
