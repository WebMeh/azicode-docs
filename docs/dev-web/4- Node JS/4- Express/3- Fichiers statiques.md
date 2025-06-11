---
id: servir-fichiers-statiques
title: Servir des fichiers statiques avec Express
sidebar_label: Fichiers statiques 
---

#  Servir des fichiers statiques dans Express

Quand on développe un site web, on veut souvent **envoyer des fichiers statiques** comme des images, des fichiers HTML, CSS ou JavaScript au navigateur du client.

## Dossier `public`

On place tous les fichiers accessibles directement (html, css, js, images) dans un dossier, souvent nommé `public`.

##  Le module `path`

Le module `path` permet de créer des chemins **compatibles entre les systèmes d’exploitation** (Windows, Linux, etc.).

```js
const path = require('path');
```

## Servir les fichiers statiques avec express.static
Configurer Express pour qu’il puisse envoyer automatiquement tous les fichiers présents dans le dossier public :
```js 
const express = require('express');
const path = require('path');
const app = express();

// Servir le dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Serveur lancé sur http://localhost:' + PORT);
});

```

Avec cette ligne :
```js
app.use(express.static(path.join(__dirname, 'public')));
```
Express va :
- envoyer index.html quand on visite `/`
- permettre d'accéder à img/photo.png via /img/photo.png
- servir les fichiers JS, CSS, images, etc.

## Exemple pratique 
```js
const express = require('express');
const path = require('path');

const app = express();

// Servir  les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route pour "/about"
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});

```