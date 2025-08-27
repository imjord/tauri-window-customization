# Tauri Window Customization Example 🪟

This project demonstrates how to use **Tauri v2 window APIs with new capability permissions** to create a custom draggable navigation bar with minimize, maximize, and close buttons in a React app.

---

## ✨ Features
- Custom **navigation bar** built in React.
- **Draggable region** using `data-tauri-drag-region`.
- Custom window controls: **minimize**, **toggle maximize**, and **close**.
- Uses **Tauri v2 capability permissions** for secure window control.

---

## ⚡ How it Works
1. The React component `Navbar` imports `getCurrentWindow` from `@tauri-apps/api/window`.
2. It defines buttons that call:
   - `appWindow.minimize()`  
   - `appWindow.toggleMaximize()`  
   - `appWindow.close()`
3. The draggable region is defined with the `data-tauri-drag-region` attribute, so the window can be moved by dragging the navbar.
4. Capabilities folder JSON enables only the needed window permissions (`minimize`, `toggle-maximize`, `close`, `start-dragging`).

---

## 🔧 Setup
1. Clone repo and install dependencies:  
   npm install  
2. Run the app in dev mode:  
   npm run tauri dev  

---

## 🎨 Customize
- Edit `Navbar.css` to style the navigation bar (colors, spacing, hover effects).
- Replace the text buttons (`-`, `[]`, `x`) with icons or custom components.
- Adjust the draggable region by applying `data-tauri-drag-region` to different elements.

---

## 📜 License
MIT
