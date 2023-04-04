import '../../errors/unhandledErrors.js'; // To handle unhandled rejections and uncaught exceptions

import { EXIT_STATUS } from '../../utils/general/constants.js';
import isDevEnvironment from '../../utils/general/isDevEnvironment.js';
import expressConfig from '../express.js';
import logger from '../logger.js';
import maildevConfig from '../mail/maildev.js';
import mongoConfig from '../mongo.js';
import s3rverConfig from '../S3/s3rver.js';
import shutdownServer from './shutdownServer.js';

export default async function startServer() {
  try {
    let s3rverConnection;
    let maildevConnection;
    if (isDevEnvironment) {
      s3rverConnection = await s3rverConfig();
      maildevConnection = await maildevConfig();
    }

    const databaseConnection = await mongoConfig();
    const serverConnection = await expressConfig();

    shutdownServer({
      serverConnection,
      databaseConnection,
      s3rverConnection,
      maildevConnection,
    });
  } catch (err) {
    logger.error(err, 'App exited with failure');
    process.exit(EXIT_STATUS.FAILURE);
  }
}
