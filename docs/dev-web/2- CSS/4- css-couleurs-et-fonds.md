---
id: css-couleurs-et-fonds
title: Couleurs et fonds
sidebar_label: Couleurs & Fonds
---

#  Couleurs et fonds en CSS

Les couleurs et les arrière-plans permettent de rendre les pages plus attrayantes visuellement.

---

##  Couleurs en CSS

### 1. Noms de couleurs

```css
h1 {
    color: red;
}
```
Couleurs : `red`, `blue`, `green`, `black`, `white`, `orange`, etc.

### 2. Codes hexadécimaux

```css
body {
  color: #333333;
  background-color: #f0f0f0;
}
```
- `#000000` → noir

- `#FFFFFF`→ blanc

### 3.  RGB et RGBA
```css
p {
  color: rgb(255, 0, 0);        /* Rouge */
  background-color: rgba(0, 0, 0, 0.5); /* Noir transparent */
}
```
## Fonds en css

- Couleur de fond 
```css
background-color: lightblue;
```

- Dégradé linéaire
```css
background: linear-gradient(to right, red, yellow);
```

- Image en fond 
```css
background-image: url("image.jpg");
background-repeat: no-repeat;
background-size: cover;
```

