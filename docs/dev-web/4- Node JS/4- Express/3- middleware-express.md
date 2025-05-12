---
id: middlewares-express
title: Middlewares 
---
#  Middlewares dans Express.js

Les **middlewares** sont des fonctions qui ont accès à l’objet `req` (requête), `res` (réponse), et à la fonction `next()` dans le cycle de requête-réponse d’Express.

---

##  Rôle des middlewares

- Exécuter du code avant de répondre à une requête
- Modifier la requête ou la réponse
- Terminer le cycle de requête
- Appeler `next()` pour passer au middleware suivant

---

##  Syntaxe de base

```js
app.use((req, res, next) => {
  console.log(`Requête reçue à ${req.url}`);
  next();
});

```

##  Middlewares essentiels dans Express.js

| Middleware              | Syntaxe                          | Rôle principal                                                                 |
|-------------------------|----------------------------------|--------------------------------------------------------------------------------|
| **Logger personnalisé** | `app.use((req, res, next) => {})` | Enregistre des informations sur chaque requête (méthode, URL, date, etc.)     |
| **express.json()**      | `app.use(express.json())`        | Permet de traiter les requêtes avec un body en JSON (POST/PUT)                |
| **express.urlencoded()**| `app.use(express.urlencoded({ extended: true }))` | Permet de traiter les données de formulaires (`x-www-form-urlencoded`) |
| **express.static()**    | `app.use(express.static('public'))` | Sert les fichiers statiques (HTML, CSS, JS, images…) depuis un dossier       |
| **Middleware de vérification** | `app.use(middleware)` ou `app.get('/route', middleware)` | Contrôle l’accès à certaines routes (authentification, tokens…) |
| **Middleware d’erreur** | `app.use((err, req, res, next) => {})` | Gère les erreurs globales du serveur et envoie un message clair               |

---

##  Exemple combiné

```js
const express = require("express");
const app = express();

// Logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Pour body JSON
app.use(express.json());

// Pour formulaires
app.use(express.urlencoded({ extended: true }));

// Fichiers statiques
app.use(express.static("public"));

// Route protégée
function checkAuth(req, res, next) {
  if (req.query.token === "admin") {
    next();
  } else {
    res.status(403).send("Accès refusé");
  }
}

app.get("/admin", checkAuth, (req, res) => {
  res.send("Espace admin");
});

// Middleware d'erreur
app.use((err, req, res, next) => {
  console.error("Erreur :", err);
  res.status(500).send("Erreur interne");
});

