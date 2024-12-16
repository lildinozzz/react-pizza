type TEnvConfig = {
  [key: string]: string;
};

export default function buildDevServer(configEnv: TEnvConfig) {
  return {
    port: 3000,
    strictPort: true,
    host: configEnv.REACT_APP_HOST,
  };
}
