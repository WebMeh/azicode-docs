---
id: introduction-express
title: Introduction à Express.js
sidebar_label: Introduction à Express.js
---

# Express.js

**Express.js** est un framework web léger et rapide pour Node.js. Il facilite la création de **serveurs web** et d'**API REST**.

---

## Pourquoi utiliser Express ?

Node.js permet déjà de créer un serveur HTTP, mais cela demande d'écrire beaucoup de code pour gérer les routes, les requêtes, les réponses, etc.

Express simplifie tout cela.

---

## Installation

Avant d’utiliser Express, assure-toi d’avoir Node.js installé.

**1. Crée un dossier pour ton projet :**
```bash
mkdir mon-serveur
cd mon-serveur
npm init -y
```
**2. Installe Express :**
```bash
npm install express
```

## Premier serveur Express
Crée un fichier `index.js` :
```js
const express = require('express');
const app = express();

// Définir une route GET
app.get('/', (req, res) => {
  res.send('Bienvenue sur notre serveur Express !');
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});

```
<table>
    <thead>
    <tr style={{ textAlign: "center" }} >
    <th>
    Terme
    </th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>`express()`</td>
    <td>Initialise une app Express.</td>
    </tr>
    <tr>
    <td>`app.get()`</td>
    <td>Crée une route GET.</td>
    </tr>
    <tr>
    <td>`res.send()`</td>
    <td>Envoie une réponse au client.</td>
    </tr>
     <tr>
    <td>`app.listen()`</td>
    <td>Démarre le serveur sur un port donné.</td>
    </tr>
    </tbody>
</table>

### Application
Crée une application Express qui :
<ol>
<li>A une page d’accueil `/` qui sert le fichier `index.html` situé dans le dossier `public`</li>
<li>A une route `/about` qui affiche une description  de l'école.</li>
<li>A une route `/formations` qui renvoie l'ensemble des formations (`json`). </li>
</ol>
- **Réponse `json`:**
```js
res.json(formations);
```
<i>Automatiquement converti en `JSON` et en-tête **Content-Type** ajouté.</i>