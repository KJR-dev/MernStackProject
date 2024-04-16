import app from "./app";
import { config } from "./config";

const startServer = () => {
    const PORT = config.get("port");
    try {
        app.listen(PORT, () => {
            // eslint-disable-next-line no-console
            console.log(`http://localhost:${PORT}`);
        });
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        process.exit(1);
    }
};

startServer();
