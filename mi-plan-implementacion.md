# Plan de Implementación – Luminous To Do List

## 1. Idea y Objetivo  
**Idea**: Una app web moderna para gestionar tareas clasificadas por categorías (Meeting, Bills, Work, etc.) con modo claro/oscuro, animaciones suaves, búsqueda y drag-and-drop.  
**Objetivo MVP**: Permitir crear, completar/undo, eliminar y reordenar tareas; todo persiste en LocalStorage.

---

## 2. Audiencia  
- Freelancers y profesionales tech-savvy (20–45 años) interesados en productividad.  
- Usuarios que aprecian interfaces limpias y funcionales.

---

## 3. Stack Tecnológico  
- **HTML5** semántico  
- **CSS3** (variables, Flexbox, keyframes)  
- **JavaScript** (ES6+)  
- **LocalStorage**  
- **GitHub Pages** para despliegue

---

## 4. Funcionalidades MVP  
1. Selección de categoría antes de crear tarea  
2. CRUD: añadir, completar/undo, eliminar tareas  
3. Animaciones de entrada/salida  
4. Toggle modo claro/oscuro  
5. Contador de tareas pendientes + “Limpiar completadas”  
6. Búsqueda en vivo  
7. Drag & Drop para reordenar

---

## 5. Estructura y Flujo de Trabajo  

| Paso | Qué hacer                                               | Archivo/Carpeta          |
|------|----------------------------------------------------------|--------------------------|
| 1    | Inicializar proyecto y Git                               | `todo-app/`              |
| 2    | Crear `index.html`, `styles.css`, `app.js`               | raíz                     |
| 3    | Maquetar HTML semántico                                  | `index.html`             |
| 4    | Definir variables CSS (colores, espaciados, radios)      | `styles.css`             |
| 5    | Estilos de layout, categorías y formulario               | `styles.css`             |
| 6    | Animaciones con `@keyframes` y transiciones              | `styles.css`             |
| 7    | JS: selección de categoría y delegado de eventos         | `app.js`                 |
| 8    | Lógica CRUD + LocalStorage                               | `app.js`                 |
| 9    | Búsqueda en vivo y actualización de contador             | `app.js`                 |
| 10   | Drag & Drop para reordenar                               | `app.js`                 |
| 11   | Implementar modo oscuro/light con `data-theme`           | `styles.css` + `app.js`  |
| 12   | Pruebas manuales en desktop y mobile                     | N/A                      |
| 13   | Crear `README.md` con instrucciones y Plan de Implementación | `README.md`          |
| 14   | Commit final y push a GitHub                             | Terminal                 |
| 15   | Configurar GitHub Pages → Settings → Pages               | GitHub UI                |

---

## 6. Cronograma Sugerido  

| Día | Tarea                                                       |
|-----|-------------------------------------------------------------|
| 1   | Setup + HTML semántico + Variables CSS                      |
| 2   | Estilos de layout, categorías y formulario                  |
| 3   | Animaciones y toggle claro/oscuro                           |
| 4   | JavaScript básico: selección de categoría + CRUD            |
| 5   | LocalStorage + contador + limpiar completadas               |
| 6   | Búsqueda en vivo + drag & drop                             |
| 7   | Pruebas, README y despliegue en GitHub Pages                |

---

## 7. Futuras Integraciones con IA  
- Sugerir categorías automáticas según descripción de tarea (OpenAI API).  
- Priorizar tareas con IA según fechas límite.  
- Resúmenes diarios de tareas pendientes vía notificaciones.

---
🚀 **Entregable**  
Sube este archivo como `mi-plan-implementacion.md` a tu repositorio y comparte la URL:

https://github.com/alejandrabarcena/luminous-To-Do-List/blob/main/mi-plan-implementacion.md  
