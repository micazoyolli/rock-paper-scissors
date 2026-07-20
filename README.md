# ✊ Piedra, Papel o Tijeras

Juego interactivo de piedra, papel o tijeras con animaciones, puntaje dinámico y lógica modular.

<img alt="Rock, Paper, Scissors" src="https://github.com/micazoyolli/rock-paper-scissors/blob/main/public/assets/screenshot.png" width="500" />

## 🌐 Demo

[Rock Paper Scissors Demo](https://micazoyolli.github.io/rock-paper-scissors/)

## 🛠️ Tecnologías

- HTML5
- JavaScript
- SCSS
- Vite
- Node 24
- Micazoyolli Foundation para SEO/build y reduced motion

## 📦 Instalación

```bash
yarn install
```

## 🚀 Scripts

```bash
yarn dev
yarn lint
yarn build
yarn preview
yarn deploy
```

Abre `http://localhost:5173/rock-paper-scissors/` para jugar en local.

## 🗂️ Estructura del proyecto

```txt
public/
scripts/
src/
├── scripts/
├── styles/
└── main.js
```

## 🚢 Despliegue en GitHub Pages

Este proyecto se publica en GitHub Pages desde la rama `gh-pages`. El comando `yarn deploy` compila la aplicación, limpia archivos `.DS_Store` del build y publica `dist/` usando el CLI de Micazoyolli Foundation sin crear commits de despliegue en `main`.

La configuración `base` de Vite debe conservar la subruta del repositorio: `/rock-paper-scissors/`.

## 🧠 Funcionalidad

- Animaciones de manos al jugar.
- Lógica modular para inicio, jugada y puntaje.
- Estados visuales para ganador, perdedor y empate.
- Interfaz responsive y accesible.

## 🧩 Construido con Micazoyolli Foundation

Este proyecto utiliza [Micazoyolli Foundation](https://github.com/micazoyolli/foundation) como infraestructura compartida. Las mejoras de tooling, estructura y despliegue deben realizarse en Foundation para beneficiar a todos los proyectos que la consumen.

## 👩‍💻 Autora

Una creación de [`<micazoyolli />✨`](https://nadia.dev)
