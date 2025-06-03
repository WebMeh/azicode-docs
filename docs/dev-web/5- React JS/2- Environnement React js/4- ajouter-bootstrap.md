---
id: ajouter-botstrap
title: Ajouter Bootstrap 
---

# Ajouter Bootstrap au projet React

##  Avec le lien CDN
1. Ouvrir `index.html`
2. Ajouter le lien CDN Bootstrap dans `<head>` :
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

### Exemple d'utilisation dans App.jsx :
```jsx
<div className="container text-center mt-5">
  <h1 className="text-primary">Bienvenue</h1>
</div>
```
:::warning   Remarque importante
Utiliser `className` au lieu de `class` en React.
:::


##  Avec NPM
1. Ouvrir le terminal
2. Installer bootstrap
```bash
npm install bootstrap 
```
3. Importer Bootstrap dans le projet
Importer `bootstrap` dans le fichier src/index.js ou src/main.jsx 
```bash
import 'bootstrap/dist/css/bootstrap.min.css';
```
