// the code below can only be modified with commercial license
// if you want to use it in the commercial usage
// please contact us for more information: hello@lobehub.com

const {
  NEXT_PUBLIC_BRANDING_CLOUD_NAME,
  NEXT_PUBLIC_BRANDING_EMAIL_BUSINESS,
  NEXT_PUBLIC_BRANDING_EMAIL_SUPPORT,
  NEXT_PUBLIC_BRANDING_FONT_FAMILY,
  NEXT_PUBLIC_BRANDING_FONT_URL,
  NEXT_PUBLIC_BRANDING_LOGO_URL,
  NEXT_PUBLIC_BRANDING_NAME,
  NEXT_PUBLIC_BRANDING_ORG_NAME,
  NEXT_PUBLIC_BRANDING_SOCIAL_DISCORD,
  NEXT_PUBLIC_BRANDING_SOCIAL_GITHUB,
  NEXT_PUBLIC_BRANDING_SOCIAL_MEDIUM,
  NEXT_PUBLIC_BRANDING_SOCIAL_X,
  NEXT_PUBLIC_BRANDING_SOCIAL_YOUTUBE,
  NEXT_PUBLIC_BRANDING_URL_HELP,
  NEXT_PUBLIC_BRANDING_URL_PRIVACY,
  NEXT_PUBLIC_BRANDING_URL_TERMS,
} = process.env;

export const LOBE_CHAT_CLOUD = NEXT_PUBLIC_BRANDING_CLOUD_NAME ?? 'LobeHub Cloud';

export const BRANDING_NAME = NEXT_PUBLIC_BRANDING_NAME ?? 'LobeHub';
export const BRANDING_LOGO_URL = NEXT_PUBLIC_BRANDING_LOGO_URL ?? '';

export const BRANDING_FONT_FAMILY = NEXT_PUBLIC_BRANDING_FONT_FAMILY ?? undefined;
export const BRANDING_FONT_URL = NEXT_PUBLIC_BRANDING_FONT_URL ?? undefined;

export const ORG_NAME = NEXT_PUBLIC_BRANDING_ORG_NAME ?? 'LobeHub';

export const BRANDING_URL = {
  help: NEXT_PUBLIC_BRANDING_URL_HELP ?? undefined,
  privacy: NEXT_PUBLIC_BRANDING_URL_PRIVACY ?? undefined,
  terms: NEXT_PUBLIC_BRANDING_URL_TERMS ?? undefined,
};

export const SOCIAL_URL = {
  discord: NEXT_PUBLIC_BRANDING_SOCIAL_DISCORD ?? 'https://discord.gg/AYFPHvv2jT',
  github: NEXT_PUBLIC_BRANDING_SOCIAL_GITHUB ?? 'https://github.com/lobehub',
  medium: NEXT_PUBLIC_BRANDING_SOCIAL_MEDIUM ?? 'https://medium.com/@lobehub',
  x: NEXT_PUBLIC_BRANDING_SOCIAL_X ?? 'https://x.com/lobehub',
  youtube: NEXT_PUBLIC_BRANDING_SOCIAL_YOUTUBE ?? 'https://www.youtube.com/@lobehub',
};

export const BRANDING_EMAIL = {
  business: NEXT_PUBLIC_BRANDING_EMAIL_BUSINESS ?? 'hello@lobehub.com',
  support: NEXT_PUBLIC_BRANDING_EMAIL_SUPPORT ?? 'support@lobehub.com',
};
