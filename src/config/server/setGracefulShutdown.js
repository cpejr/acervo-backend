import { EXIT_STATUS } from '../../utils/general/constants.js';
import logger from '../logger.js';

export default function shutdownServer({
  serverConnection,
  databaseConnection,
  s3rverConnection,
  maildevConnection,
}) {
  const exitSignals = ['SIGINT', 'SIGTERM', 'SIGQUIT'];
  exitSignals.forEach((signal) => {
    process.on(signal, () => {
      serverConnection.close(async () => {
        try {
          await databaseConnection.connection.close(false);
          if (s3rverConnection) await s3rverConnection.close();
          if (maildevConnection)
            await new Promise((resolve, reject) => {
              maildevConnection.close((err) => {
                if (err) reject(err);
                else resolve();
              });
            });

          logger.info(`App exited with success`);
          process.exit(EXIT_STATUS.SUCCESS);
        } catch (error) {
          logger.error(error, 'App exited with failure');
          process.exit(EXIT_STATUS.FAILURE);
        }
      });
    });
  });
}
