import 'reflect-metadata';

import { app } from './app';
import { dbConnection } from './config/db.config';
import { env } from './lib/env';

async function bootstrap() {
  await dbConnection();

  app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
  });
}

void bootstrap();
