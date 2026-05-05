# Unfollow Ninja 🥷

Automatically uncheck the "Follow company" checkbox in LinkedIn's Easy Apply flow.

## 🚀 Overview

**Unfollow Ninja** is a lightweight Chrome extension designed to save you time and keep your LinkedIn feed clean. When applying for jobs using "Easy Apply", LinkedIn often pre-selects a checkbox to follow the company. This extension automatically detects and unchecks that box so you can focus on your applications without accidentally cluttering your professional network.

## ✨ Features

- **Automated:** Works silently in the background.
- **Lightweight:** Zero performance impact on your browsing.
- **Robust:** Uses intelligent detection to handle variations in LinkedIn's UI.
- **Privacy-focused:** No data collection, no tracking.

## 🛠 Installation (Developer Mode)

Since this extension is in development, you can load it manually:

1.  **Clone or Download** this repository.
2.  Install dependencies:
    ```bash
    bun install
    ```
3.  Build the project:
    ```bash
    bun run build
    ```
4.  Open Google Chrome and navigate to `chrome://extensions/`.
5.  Enable **Developer mode** (toggle in the top right).
6.  Click **Load unpacked** and select the `dist` folder in this project directory.

## 🛠 Tech Stack

- **Language:** TypeScript
- **Bundler:** Vite with `@crxjs/vite-plugin`
- **Runtime:** Bun
- **Platform:** Chrome Extension Manifest V3

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
