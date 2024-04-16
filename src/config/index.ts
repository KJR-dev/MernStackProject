interface Config {
    apikey: string;
    secret: string;
}

const _config: Config = {
    apikey: process.env.API_KEY!,
    secret: process.env.SECRET!,
};

export const config = {
    get(key: keyof Config): string {
        const value = _config[key];
        if (!value) {
            process.exit();
        }
        return value;
    },
};
