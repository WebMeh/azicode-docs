---
id: css-introduction
title: Introduction à CSS
sidebar_label: Introduction
---

#  Introduction à CSS

Le **CSS** (Cascading Style Sheets, ou feuilles de style en cascade) est un langage utilisé pour **styliser** les pages web HTML.

Il permet de **séparer le contenu (HTML)** de sa **présentation (couleurs, polices, marges, alignement, etc.)**.

---


##  Pourquoi utiliser CSS ?

- Sans CSS :

```html
<p>Bonjour le monde</p>
```
<p>Bonjour le monde</p>

- Avec CSS :

```html
<p style="color: blue; font-size: 20px;">Bonjour le monde</p>
```
<p style={{color: "green", fontSize: 50}}>Bonjour le monde</p>

## Trois façons d’intégrer du CSS
### CSS externe (recommandé)
Dans le fichier HTML :

```html
<link rel="stylesheet" href="styles.css">
```
Et dans styles.css :

```css 
body {
  background-color:rgb(27, 205, 130);
}

```

### CSS interne
Dans un bloc `<style>` dans la balise `<head>`:

```html
<head>
  <style>
    h1 {
      color: darkblue;
    }
  </style>
</head>
```

### CSS en ligne 
Directement dans la balise HTML :
```html
<h1 style="color: red;">Titre</h1>
```


