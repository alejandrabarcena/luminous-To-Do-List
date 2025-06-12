# Luminous To Do List

**Descripción**  
Aplicación web responsive para gestionar tareas por categorías (Meeting, Bills, Work, etc.), con modo claro/oscuro, animaciones suaves, búsqueda en vivo, drag-and-drop y persistencia en LocalStorage. Desarrollada con HTML5 semántico, CSS3 (variables, Flexbox, keyframes) y JavaScript puro. Publicada en GitHub Pages.

---

## 📋 Plan de Implementación

1. **Idea y Objetivo**  
   - App moderna para gestionar tareas por categorías con UI pulida.  
   - MVP: CRUD completo de tareas + reordenar + persistencia.

2. **Audiencia**  
   - Freelancers y profesionales tech-savvy (20–45 años) amantes de la productividad.

3. **Stack Tecnológico**  
   - **HTML5** semántico  
   - **CSS3** (variables, Flexbox, keyframes)  
   - **JavaScript** (ES6+)  
   - **LocalStorage**  
   - **GitHub Pages** para despliegue

4. **Funcionalidades MVP**  
   - Selección de categoría antes de crear tarea  
   - Crear, completar/undo, eliminar tareas  
   - Animaciones de entrada/salida  
   - Modo claro/oscuro toggle  
   - Contador de pendientes + “Limpiar completadas”  
   - Búsqueda en vivo  
   - Drag-and-drop para reordenar

5. **Estructura Front-End**  
   - Semántica: `<header>`, `<section>`, `<main>`, `<footer>`  
   - CSS modular con variables de tema, espaciados y bordes  
   - JS delegando eventos y usando plantillas de `innerHTML`

6. **Despliegue y Futuro IA**  
   - Despliegue en GitHub Pages desde rama `main`, carpeta raíz.  
   - Futuras integraciones IA: sugerir categorías y prioridades vía OpenAI API.

---

## 🚀 Cómo Ejecutar Localmente

1. Clona el repositorio  
   ```bash
   git clone https://github.com/alejandrabarcena/luminous-to-do-list.git
   cd luminous-to-do-list
