import mongoose from 'mongoose';

import { env } from '../lib/env';

export async function dbConnection() {
  await mongoose.connect(
    env.DATABASE_URL.replace(
      '<PASSWORD>',
      encodeURIComponent(env.DATABASE_PASSWORD),
    ),
    {
      dbName: 'golden-cart',
    },
  );
  console.log('DATABASE connected successfully ✅');
}
