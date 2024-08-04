// pages/api/auth/csrf.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { getCsrfToken } from 'next-auth/react';

export default async function csrf(req: NextApiRequest, res: NextApiResponse) {
  const csrfToken = await getCsrfToken({ req });
  res.status(200).json({ csrfToken });
}
