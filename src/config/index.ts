interface Config {
    apikey: string;
    secret: string;
    port: number;
}

const _config: Config = {
    apikey: process.env.API_KEY!,
    secret: process.env.SECRET!,
    port: Number(process.env.PORT!),
};

export const config = {
    get(key: keyof Config): string | number {
        const value = _config[key];
        if (!value) {
            process.exit();
        }
        return value;
    },
};
