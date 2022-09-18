import validateSession from '../../../utils/session';

export default async function handler(req, res) {
  const session = await validateSession(req.cookies.session);
  res.json(session);
}
