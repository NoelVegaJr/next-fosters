import prisma from './db';

export default async function validateSession(sessionId) {
  if (sessionId === undefined || sessionId === null) return false;

  const session = await prisma.session.findFirst({
    where: {
      id: sessionId,
      expires: {
        gte: new Date(),
      },
    },
  });
  if (session) {
    return {
      ...session,
    };
  } else {
    return false;
  }
}
