import 'reflect-metadata';

import { app } from './app';
import { env } from './lib/env';

async function bootstrap() {
  app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
  });
}

void bootstrap();
