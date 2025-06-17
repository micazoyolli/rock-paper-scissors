# ✊ Rock, Paper, Scissors

Juego interactivo de piedra, papel o tijeras con animaciones, puntaje y lógica de juego modular. Proyecto actualizado con Vite y buenas prácticas modernas.

<img alt="Rock, Paper, Scissors" src="https://github.com/micazoyolli/rock-paper-scissors/blob/master/public/assets/screenshot.png" width="500" />

## 🌐 Demo

[Rock Paper Scissors Demo](https://micazoyolli.github.io/rock-paper-scissors/)

## 🚀 Tecnologías usadas

- HTML5 + SCSS (con estructura modular)
- JavaScript moderno (ES6+)
- Vite

## 📦 Estructura del proyecto

```
rock-paper-scissors/
├── public/
│   ├── assets/
│   │   ├── favicon.ico
│   │   └── screenshot.png
│   ├── manifest.json
│   └── robots.txt
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
├── index.html
├── .gitignore
├── LICENSE
├── package.json
└── vite.config.js
```

## ▶️ Uso

```bash
yarn install
yarn dev
```

Abre `http://localhost:5173/` para ver la app en el navegador.

## 🧠 Funcionalidad

- Animaciones de manos al jugar
- Lógica modularizada (inicio, jugada, puntaje)
- Íconos visuales para ganador, perdedor y empate
- Totalmente responsive y accesible

---

## 👩‍💻 Autora

Una creación de [`<micazoyolli />✨`](https://nadia.dev)