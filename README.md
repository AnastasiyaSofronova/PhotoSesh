# Фотопортфолио — Sony ZV-E10 II

Минималистичный сайт-портфолио с сильным акцентом на фотографии.  
Полностью статический — можно бесплатно разместить на GitHub Pages, Netlify, Vercel, Cloudflare Pages и т.д.

## Что внутри

- Полноэкранный hero с большой фотографией
- Галерея с фильтрами (Портрет / Природа / Улица / Другое)
- Лайтбокс (полноэкранный просмотр + стрелки + клавиатура)
- Блок контактов + Instagram
- Форма обратной связи (готово под Formspree)
- Адаптив под телефон
- Тёмная тема, чтобы фото «звучали» лучше

## Как заменить фотографии на свои

1. Положи свои фото в папку `images/`
2. В `index.html` замени ссылки:

**Hero (главное фото):**
```html
<img src="images/hero.jpg" alt="..." class="hero-image">
```

**Галерея** — для каждого `.gallery-item`:
```html
<img src="images/photo-01.jpg" alt="Название" loading="lazy">
```

Рекомендуемые размеры:
- Hero: 1920×1080 или больше
- Галерея: 1200–1600px по длинной стороне (достаточно)

Можно оставить `picsum.photos` временно — они работают.

## Как настроить контакты

В секции `#contact` замени:

- Ссылку Instagram
- Email

## Как включить рабочую форму

1. Зайди на [formspree.io](https://formspree.io) и создай бесплатный аккаунт
2. Создай новую форму → получишь endpoint вида `https://formspree.io/f/xxxxxx`
3. В `index.html` у формы добавь:

```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/xxxxxx" method="POST">
```

И убери `e.preventDefault()` + alert из `js/main.js` (или оставь только success-сообщение).

## Как выложить сайт

### GitHub Pages (самый простой способ)

1. Создай новый репозиторий на GitHub
2. Залей все файлы из этой папки
3. Settings → Pages → Source: Deploy from a branch → `main` / root
4. Через минуту сайт будет доступен по адресу `https://username.github.io/repo-name`

### Netlify (drag & drop)

1. Зайди на [netlify.com](https://netlify.com)
2. Перетащи всю папку `portfolio` в окно Deploy
3. Готово — получишь ссылку

### Vercel

То же самое — drag & drop или через Git.

## Структура

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/          ← сюда свои фото
└── README.md
```

## Кастомизация

- Имя в шапке и футере — поменяй «Василий Юшков»
- Цвета — в начале `css/style.css` переменные `:root`
- Добавляй/удаляй фото в галерее, просто копируя блок `.gallery-item`
- Категории фильтров — атрибут `data-category`

---

Снято на Sony ZV-E10 II ✨
