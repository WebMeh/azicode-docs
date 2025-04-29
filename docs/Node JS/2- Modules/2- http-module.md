---
id: http-module
title: Le module HTTP
sidebar_label: Module HTTP
---

# 🌐 Le module HTTP

Le module `http` est un module natif de Node.js qui permet de créer des serveurs web sans avoir besoin d’installer de dépendance externe.
<br />Il permet :

- d’écouter les requêtes <strong>HTTP</strong> (<strong style={{color: 'blue'}}>GET</strong>, <strong style={{color: 'green'}}>POST</strong>, <strong style={{color: 'red'}}>DELETE</strong>...),

- d’envoyer des réponses au client (HTML, JSON, texte...).
Pas besoin d'installer ce module : il fait partie intégrante de Node.js.

## Importer le module `http`

```js
const http = require('http');
```
## Créer un serveur HTTP
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bienvenue sur le serveur Node.js');
});

server.listen(8888, () => {
  console.log('Serveur en écoute sur le port 8888');
});

```
<table>
    <tr>
        <td>`require('http')`</td>
        <td>Importer le module `http`</td>
    </tr>
    <tr>
        <td>`http.createServer()`</td>
        <td>Crée un serveur</td>
    </tr>
    <tr>
        <td>`req`</td>
        <td>Représente la requête entrante (client)</td>
    </tr>
    <tr>
        <td>`res.writeHead()`</td>
        <td>Définit le code HTTP et les en-têtes</td>
    </tr>
    <tr>
        <td>`res.end()`</td>
        <td>Termine la réponse</td>
    </tr>
    <tr>
        <td>`server.listen()`</td>
        <td>Lance le serveur sur un port (ici 8888)</td>
    </tr>
</table>

## Types de réponses
<div style={{texAlign: 'center'}}>
    <table>
    <tr>
        <td>**Texte brut**</td>
        <td> `'Content-Type': 'text/plain'`</td>
    </tr>
    <tr>
        <td>**HTML**</td>
        <td>`'Content-Type': 'text/html'`</td>
    </tr>
    <tr>
        <td>**JSON** </td>
        <td>`'Content-Type': 'application/json'`</td>
    </tr>
</table>
</div>

### Exemple avec HTML
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Azicode 62</h1>');
});

server.listen(8888, () => {
  console.log('Serveur en écoute sur le port 8888');
});

```

### Exemple avec JSON
```js
const http = require('http');
const users = [
    {
      "firstName": "Yasmine",
      "lastName": "El ",
      "email": "yasmine.el@example.com"
    },
    {
      "firstName": "Omar",
      "lastName": "Ben",
      "email": "omar.ben@example.com"
    },
    {
      "firstName": "Imane",
      "lastName": "Am",
      "email": "imane.am@example.com"
      
    }
    
]
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(users));
});

server.listen(8888, () => {
  console.log('Serveur en écoute sur le port 8888');
});

```
- <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify'>JSON.stringify() ?</a>

## Ajouter des routes
Une route correspond à une **URL** spécifique appelée par un client (comme un navigateur). Elle permet d’exécuter un traitement particulier selon l’**URL** visitée.
- **Exemple** 
  - la route **`/`** peut afficher la page d’accueil.
  - la route **`/contact`** peut afficher une page de contact.
  - la route **`/login`** peut afficher le formulaire de connexion.

```js
const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<h1>Bienvenue sur la page d'accueil !</h1>");
  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Voici la page de contact.</h1>');
  } else if (url === '/login') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Se connecter à  Azicode62.</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page non trouvée 404</h1>');
  }
});

server.listen(8888, () => {
  console.log('Serveur démarré sur http://localhost:8888');
});
```

### Exercice d'application
- Créer un serveur **Node.js** qui propose 3 pages simples :
  - **/** : Page d’accueil
  - **/about** : Affiche un message à propos.
  - **/formations** : Afficher l'ensemble des formations de l'école (**JSON**)