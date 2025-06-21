---
id: css-responsive
title: Responsive design
---

#  Responsive Design



## Qu’est-ce que le Responsive Design ?

Le **responsive design** permet de créer un **site qui s'adapte à la taille de l'écran** du visiteur sans avoir à créer plusieurs versions du site.  
On utilise principalement :
- Le **viewport** (balise HTML)
- Les **unités relatives** (`%`, `em`, `rem`, `vw`, `vh`)
- Les **media queries CSS**

---

## Balise Viewport (HTML)

Dans le fichier HTML, ajoutez cette balise **dans la balise `<head>`** :

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Elle permet au navigateur de savoir qu’il doit adapter la largeur du site à l’appareil utilisé.

## Utilisation des unités relatives
###  `%` (pourcentage)
```css
.container {
  width: 100%; /* prend toute la largeur disponible */
}
```
###  `vw` ` vh`  (pourcentage)
- `vw = 1%` de la largeur de l’écran
- `vh = 1%` de la hauteur de l’écran

```css
.hero {
  height: 100vh; /* prend toute la hauteur visible */
}
```

##  Media Queries
Les media queries permettent de modifier le style en fonction de la taille de l’écran.

```css
@media (max-width: 768px) {
  .menu {
    display: none;
  }
}
```
Si l’écran fait 768px ou moins, le menu est caché.

## Exemple complet : carte responsive

```html
<div class="card">
  <img src="image.jpg" alt="exemple">
  <div class="content">
    <h2>Titre</h2>
    <p>Contenu de la carte responsive</p>
  </div>
</div>

```
<hr />

```css
.card {
  display: flex;
  width: 80%;
  margin: auto;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
}

.card img {
  width: 50%;
}

.content {
  padding: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .card {
    flex-direction: column;
  }

  .card img {
    width: 100%;
  }
}

```
