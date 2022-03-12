import { setupSentry } from 'nlib/utils/sentry/setupSentry';

export function setupDashSentry() {
  setupSentry({
    dsn: 'https://e6ba6b470e02431286b137434cf7ed12@sentry.io/1464891',
    allowUrls: [/dashboard\.ngrok\.com/],
    ignoreErrors: [
      'Failed to load Stripe.js', // Content-blocking scripts
      'There is no clipping info for given tab', // Evernote Web Clipper,
      'GM_getValue is not defined', // GreaseMonkey
      'redeclaration of const hideMyLocation', // Some sort of privacy script
    ],
  });
}
