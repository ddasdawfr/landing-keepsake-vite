# Keepsake — Digital & Branding Agency

Адаптивний лендінг креативної агенції **Keepsake**, реалізований за принципом **Mobile-First** із використанням сучасного стеку автоматизації фронтенд-розробки.

- **Публічне посилання (GitHub Pages):** https://ddasdawfr.github.io/landing-keepsake-vite/

## Стек технологій

- **Збірка:** Vite + Vituum (`@vituum/vite-plugin-pug`)
- **Шаблонізація:** Pug (успадкування макетів, міксини, дані та цикли, SVG-спрайт)
- **Стилізація:** SCSS (модульна архітектура `@use`/`@forward`, дизайн-токени, власні функції та міксини, методологія БЕМ)
- **Постобробка CSS:** PostCSS + Autoprefixer + Browserslist + esbuild minification
- **Оптимізація графіки:** Sharp (генерація адаптивних зображень у форматах AVIF, WebP та JPEG)
- **Контроль якості коду:** Prettier (`@prettier/plugin-pug`), Stylelint (`stylelint-config-standard-scss`), Husky, lint-staged
- **CI/CD:** GitHub Actions + GitHub Pages

## Структура проєкту

- `.github/workflows/` — CI/CD сценарій автодеплою на GitHub Pages
- `.husky/` — Git-хуки (`pre-commit` перевірка через `lint-staged`)
- `scripts/` — скрипт автоматичної оптимізації зображень (`sharp`)
- `src/assets/` — локальні шрифти (`.woff2`) та оптимізовані зображення
- `src/components/` — Pug-компоненти шапки, футера та секцій сторінки
- `src/data/` — масиви даних для генерації контенту циклами
- `src/includes/` — вбудований SVG-спрайт
- `src/layouts/` — базовий HTML-каркас сторінки
- `src/mixins/` — багаторазові Pug-міксини (`+btn`, `+icon`, `+picture`, `+work-card`)
- `src/pages/` — головна сторінка проєкту
- `src/styles/` — модульні SCSS-стилі (`abstracts`, `base`, `layout`, `components`)
- `.browserslistrc` — цільові версії браузерів для Autoprefixer
- `.prettierrc` — конфігурація форматування коду
- `.stylelintrc.json` — правила лінтера SCSS та перевірки БЕМ
- `postcss.config.js` — підключення плагінів PostCSS
- `vite.config.js` — конфігурація збірки Vite

## Команди для запуску

| Команда           | Опис                                                                      |
| :---------------- | :------------------------------------------------------------------------ |
| `npm install`     | Встановлення всіх залежностей проєкту                                     |
| `npm run dev`     | Запуск локального сервера розробки з миттєвим оновленням (HMR)            |
| `npm run build`   | Продакшн-збірка проєкту у папку `dist/` із мініфікацією                   |
| `npm run preview` | Локальний попередній перегляд зібраної продакшн-версії                    |
| `npm run images`  | Автоматична генерація адаптивних зображень AVIF/WebP/JPG (`400w`, `800w`) |
| `npm run format`  | Автоматичне форматування файлів через Prettier                            |
| `npm run lint`    | Перевірка стилів та форматування за допомогою Stylelint і Prettier        |

## Оптимізація та результати

- **Зображення:** Усі 14 растрових зображень конвертовані у сучасні формати **AVIF** та **WebP** у двох розмірах (`400w` і `800w`) з резервним JPEG та виводяться через тег `<picture>` із `loading="lazy"` і фіксованими `width`/`height` для запобігання зсуву макета (CLS). Усі іконки переведені у векторний **SVG-спрайт**.
- **Шрифти:** Локальні шрифти `Oswald`, `Open Sans` та `Dancing Script` підключені у форматі `.woff2` з `font-display: swap` та `preload` основного шрифту.
- **Продуктивність (Lighthouse):**
  - Performance: **98–100**
  - Accessibility: **95–100**
  - Best Practices: **95–100**
  - SEO: **95–100**
