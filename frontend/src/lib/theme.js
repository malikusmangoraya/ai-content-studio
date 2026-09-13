```javascript
/**
 * theme.js — dark-canvas default (TRD #3 canvas archetypes).
 * Applies `.dark` on <html> by default, honoring a saved preference, then the
 * operating-system scheme. Runs on import.
 */

(function applyTheme() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  try {
    const root = document.documentElement;
    const saved = localStorage.getItem('theme');

    // Determine the preferred theme:
    // 1. From localStorage ('theme' item)
    // 2. From user's operating system preference (prefers-color-scheme)
    const pref = saved
      ? saved === 'dark'
      : Boolean(
          window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches,
        );

    // Apply the 'dark' class based on the determined preference.
    // The original `pref === true || saved === 'dark'` is redundant,
    // as `pref` already correctly reflects the desired boolean state.
    root.classList.toggle('dark', pref);

    // If no theme preference is explicitly saved by the user,
    // ensure 'dark' is applied as the default. This overrides the
    // OS preference if it's 'light' and no explicit 'light' preference was saved.
    if (!saved) {
      root.classList.add('dark'); // dark default per design tokens
    }
  } catch (_error) {
    // Gracefully handle browser storage or DOM context errors.
    // The 'error' parameter is added for linting compatibility, even if not explicitly used.
  }
})();

export default function theme() {
  if (typeof document === 'undefined') {
    // In a non-browser environment, assume dark mode by default
    // consistent with the "dark by default" theme principle.
    return true;
  }
  return document.documentElement.classList.contains('dark');
}
```