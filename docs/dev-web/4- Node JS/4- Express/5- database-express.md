---
id: databse-express
title: MySQL & EXpress
---

#  MySQL & Express

## Introduction à MySQL
MySQL est un **système de gestion de base de données relationnelle (SGBDR)**.  
Il permet de stocker, organiser, interroger et manipuler des données à l’aide du langage **SQL (Structured Query Language)**.
Il est :
- Gratuit et open source.
- Très utilisé avec Node.js, PHP, Java, Python…
- Rapide, robuste et fiable.

## Installation de MySQL avec XAMPP
Téléchargez XAMPP ici :  
👉 [https://www.apachefriends.org/index.html](https://www.apachefriends.org/index.html)

:::info Que contient XAMPP ?
XAMPP est un environnement de développement local contenant :
- Apache (serveur web)
- MySQL (SGBD)
- phpMyAdmin (interface web pour gérer MySQL)
:::

**Étapes d’installation:**
1. Télécharger et installer XAMPP depuis le lien ci-dessus.
2. Lancer le **XAMPP Control Panel**.
3. Démarrer les services :
   - `Apache` (serveur web)
   - `MySQL` (base de données)
4. Accéder à **phpMyAdmin** via votre navigateur :
   ```text
   http://localhost/phpmyadmin
   ```
## Créer une base de données
Dans **phpMyAdmin**, cliquer sur **"Nouvelle base de données"**, entrer le nom :
     ```text
     azicode_db
     ```
ou exécuter la commande SQL suivante:
    ```sql
        CREATE DATABASE azicode_db;
    ```
##  Créer une table 
Dans l’onglet **SQL** :
    ```sql
    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        age INT
    );
    ```
## Structure du projet Express.js
```pgsql
azicode-site/
│
├── db.js            → Fichier de connexion à MySQL
├── server.js         → Fichier principal de l’application Express
├── package.json     → Fichier de configuration du projet Node  
└── node_modules/
```

## Installation des dépendances

```bash
npm init -y
npm install express mysql2 body-parser cors nodemon
```
## Connexion à la base de données

Le fichier de connexion à MySQL **db.js** :
```js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',         
  database: 'azicode_db',
});

module.exports = pool;
```
## Configuration du serveur Express
Le fichier **server.js** :

```js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

```

##  Insérer un utilisateur (POST)
```js
app.post('/users', (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({ message: 'Champs manquants' });
  }

  const sql = 'INSERT INTO users (name, email, age) VALUES (?, ?, ?)';
  db.query(sql, [name, email, age], (err, result) => {
    if (err) return res.status(500).json({ message: 'Erreur serveur' });

    res.status(201).json({
      message: 'Utilisateur ajouté avec succès',
      id: result.insertId,
      name,
      email,
      age
    });
  });
});
```
## Lire tous les utilisateurs (GET)
```js
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ message: 'Erreur serveur' });
    res.json(results);
  });
});
```

## Mettre à jour un utilisateur (PUT)
```js
app.put('/users/:id', (req, res) => {
  const { name, email, age } = req.body;
  const { id } = req.params;
  db.query('UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?', [name, email, age, id], (err) => {
    if (err) throw err;
    res.json({ id, name, email, age });
  });
});
```

## Supprimer un utilisateur (DELETE)
```js
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'Utilisateur supprimé' });
  });
});
```
