import app from "./app";
import { config } from "./config";
import logger from "./config/logger";

const startServer = () => {
    const PORT = config.get("port");
    try {
        app.listen(PORT, () => {
            logger.info(`server on http://localhost:${PORT}`);
        });
    } catch (err: unknown) {
        if (err instanceof Error) {
            logger.error(err.message);
            process.exit(1);
        }
    }
};

startServer();
