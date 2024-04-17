import winston from "winston";

const logger = winston.createLogger({
    level: "debug",
    defaultMeta: {
        serviceName: "auth-service",
    },
    transports: [
        new winston.transports.File({
            dirname: "logs",
            filename: "error.log",
            level: "error",
            silent: false,
        }),
        new winston.transports.File({
            dirname: "logs",
            filename: "warn.log",
            level: "warn",
            silent: false,
        }),
        new winston.transports.File({
            dirname: "logs",
            filename: "info.log",
            level: "info",
            silent: false,
        }),
        new winston.transports.File({
            dirname: "logs",
            filename: "debug.log",
            level: "debug",
            silent: false,
        }),
        new winston.transports.File({
            dirname: "logs",
            filename: "combine.log",
            level: "debug",
            silent: false,
        }),
        new winston.transports.Console({
            level: "debug",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
        }),
    ],
});

export default logger;
