/**
 * i18n Multilingual Middleware
 * Handles locale detection, translation helper injection, and header management.
 */

const SUPPORTED_LOCALES = ['en', 'es', 'fr', 'de', 'ja'];
const DEFAULT_LOCALE = 'en';

const TRANSLATIONS = {
  en: {
    welcome: 'Welcome to our platform',
    auth_required: 'Authentication required',
    forbidden: 'Access denied',
    not_found: 'Resource not found',
    server_error: 'Internal server error',
    invalid_input: 'Invalid input parameters',
    rate_limited: 'Too many requests, please try again later',
  },
  es: {
    welcome: 'Bienvenido a nuestra plataforma',
    auth_required: 'Autenticación requerida',
    forbidden: 'Acceso denegado',
    not_found: 'Recurso no encontrado',
    server_error: 'Error interno del servidor',
    invalid_input: 'Parámetros de entrada no válidos',
    rate_limited: 'Demasiadas solicitudes, inténtelo de nuevo más tarde',
  },
  fr: {
    welcome: 'Bienvenue sur notre plateforme',
    auth_required: 'Authentification requise',
    forbidden: 'Accès refusé',
    not_found: 'Ressource non trouvée',
    server_error: 'Erreur interne du serveur',
    invalid_input: "Paramètres d'entrée invalides",
    rate_limited: 'Trop de requêtes, veuillez réessayer plus tard',
  },
  de: {
    welcome: 'Willkommen auf unserer Plattform',
    auth_required: 'Authentifizierung erforderlich',
    forbidden: 'Zugriff verweigert',
    not_found: 'Ressource nicht gefunden',
    server_error: 'Interner Serverfehler',
    invalid_input: 'Ungültige Eingabeparameter',
    rate_limited: 'Zu viele Anfragen, bitte versuchen Sie es später noch einmal',
  },
  ja: {
    welcome: 'プラットフォームへようこそ',
    auth_required: '認証が必要です',
    forbidden: 'アクセスが拒否されました',
    not_found: 'リソースが見つかりません',
    server_error: '内部サーバーエラー',
    invalid_input: '無効な入力パラメータです',
    rate_limited: 'リクエストが多すぎます。後ほど再試行してください',
  },
};

function detectLocale(req) {
  const queryLang = req.query && req.query.lang;
  if (queryLang && SUPPORTED_LOCALES.includes(queryLang.toLowerCase())) {
    return queryLang.toLowerCase();
  }
  const headerLang = req.headers['accept-language'];
  if (headerLang) {
    const preferred = headerLang.split(',')[0].trim().split('-')[0].toLowerCase();
    if (SUPPORTED_LOCALES.includes(preferred)) {
      return preferred;
    }
  }
  return DEFAULT_LOCALE;
}

module.exports = function i18nMiddleware(req, res, next) {
  const locale = detectLocale(req);
  req.locale = locale;
  req.supportedLocales = SUPPORTED_LOCALES;
  req.t = function t(key, fallback = '') {
    const langSet = TRANSLATIONS[locale] || TRANSLATIONS[DEFAULT_LOCALE];
    return langSet[key] || TRANSLATIONS[DEFAULT_LOCALE][key] || fallback || key;
  };
  req.translations = TRANSLATIONS[locale] || TRANSLATIONS[DEFAULT_LOCALE];
  res.setHeader('Content-Language', locale);
  next();
};
