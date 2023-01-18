import { rest } from 'msw';

const urlPrefix = '/api/user';

interface LoginRequestBody {
  userId: string;
  password: string;
}

const regexEmail =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const login = rest.post<LoginRequestBody>(`${urlPrefix}/login`, (req, res, ctx) => {
  const { userId, password } = req.body;

  if (userId && password) {
    if (!regexEmail.test(userId)) {
      return res(
        ctx.status(400),
        ctx.json({
          status: '400',
          message: 'Wrong Email Format',
          errors: [],
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.cookie('Authorization', '1234123124'),
      ctx.json({
        accessToken: '1234123124',
        expiredDate: '25/12/31',
        message: 'Login Success',
        links: [
          {
            reIssue: 'http://localhost:3000/~~',
          },
        ],
      })
    );
  }
  return res(
    ctx.status(400),
    ctx.json({
      status: '400',
      message: 'Empty user id or password',
      errors: [],
    })
  );
});

const userHandlers = [login];

export default userHandlers;
