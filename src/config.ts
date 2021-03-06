const {
  VUE_APP_FD_VUE_DEV_TOOLS,
  VUE_APP_FD_NAME,
  VUE_APP_VERSION,
  NODE_ENV,
} = process.env;

export const devToolsEnabled = VUE_APP_FD_VUE_DEV_TOOLS === 'enabled';
export const libName = (VUE_APP_FD_NAME as string) || '<name not set>';
export const version = VUE_APP_VERSION as string;
export const env = (NODE_ENV as string) || 'production';
