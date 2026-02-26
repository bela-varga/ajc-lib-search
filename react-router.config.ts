import type { Config } from '@react-router/dev/config';

export default {
  ssr: false,
  basename: '/ajc-lib-search/',
  async prerender() {
    return ['/', '/about', '/contact', '/terms', '/privacy'];
  },
} satisfies Config;
