import { db, seedData } from '@/database';
import { Entry } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === 'production') {
    return res.status(401).json({
      message: 'Seed will not run in production mode',
    });
  }

  await db.connect();

  await Entry.deleteMany();
  await Entry.insertMany(seedData.entries);

  await db.disconnect();
  res.status(200).json({ message: 'Seed  successfully executed' });
}
