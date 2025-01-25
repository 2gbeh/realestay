export const authResource = {
  login: {
    body: {
      user: '2gbeh',
      password: 'secret',
    },
    data: {
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphbmUiLCJzdWIiOjIsImlhdCI6MTcyOTMyMzQ1OSwiZXhwIjoxNzI5OTI4MjU5fQ.lZZyeQQS6ARnfkcW1GJa-zI37WDkiIw9vefVOfnBS8A',
    },
    error: {
      message: 'Invalid credentials',
      error: 'Unauthorized',
      statusCode: 401,
    },
  },
};
