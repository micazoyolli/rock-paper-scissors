# ✊ Piedra, Papel o Tijeras

Juego interactivo de piedra, papel o tijeras con animaciones, puntaje dinámico y lógica modular. Desarrollado con buenas prácticas modernas y tecnologías actuales como Vite, SCSS y JavaScript.

<img alt="Rock, Paper, Scissors" src="https://github.com/micazoyolli/rock-paper-scissors/blob/main/public/assets/screenshot.png" width="500" />

## 🌐 Demo

[Rock Paper Scissors Demo](https://micazoyolli.github.io/rock-paper-scissors/)

## 🚀 Tecnologías usadas

- HTML5 + SCSS (con estructura modular)
- JavaScript moderno (ES6+)
- Vite 8
- Node 24
- @micazoyolli/foundation para SEO/build y reduced motion

## 📦 Estructura del proyecto

```
rock-paper-scissors/
├── public/
│   ├── assets/
│   ├── icons/
│   ├── favicon.ico
│   ├── manifest.json
│   ├── meta.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── scripts/
│   │   ├── match.js
│   │   └── start.js
│   ├── styles/
│   │   ├── base/
│   │   │   └── _reset.scss
│   │   ├── components/
│   │   │   ├── _buttons.scss
│   │   │   ├── _hands.scss
│   │   │   └── _score.scss
│   │   ├── layout/
│   │   │   ├── _intro.scss
│   │   │   ├── _match.scss
│   │   │   └── _wrapper.scss
│   │   ├── utils/
│   │   │   ├── _animations.scss
│   │   │   ├── _media.scss
│   │   │   └── _variables.scss
│   │   └── main.scss
│   └── main.js
├── .editorconfig
├── .gitignore
├── .nvmrc
├── index.html
├── LICENSE
├── package.json
└── vite.config.js
```

## ▶️ Uso

```bash
yarn install
yarn dev
yarn lint
yarn build
```

Abre `http://localhost:5173/rock-paper-scissors/` para ver la aplicación en el navegador.

## Despliegue en GitHub Pages

Este proyecto se publica en GitHub Pages desde la rama `gh-pages`. El comando `yarn deploy` compila la aplicación, limpia archivos `.DS_Store` del build y publica `dist/` usando el CLI de Micazoyolli Foundation sin crear commits de despliegue en `main`.

La configuración `base` de Vite debe conservar la subruta del repositorio: `/rock-paper-scissors/`.

## 🧠 Funcionalidad

- Animaciones de manos al jugar
- Lógica modularizada (inicio, jugada, puntaje)
- Íconos visuales para ganador, perdedor y empate
- Totalmente responsive y accesible

---

## Construido con Micazoyolli Foundation

Este proyecto utiliza [Micazoyolli Foundation](https://github.com/micazoyolli/foundation) como infraestructura compartida. Las mejoras de tooling, estructura y despliegue deben realizarse en Foundation para beneficiar a todos los proyectos que la consumen.

## 👩‍💻 Autora

Una creación de [`<micazoyolli />✨`](https://nadia.dev)
