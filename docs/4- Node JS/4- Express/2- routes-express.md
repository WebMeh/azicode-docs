---
id: routes-express
title: Les Routes Express.js
---

# Les Routes dans Express.js

## Qu'est-ce qu'une route ?

En `Express.js`, **une route est une URL** qui déclenche une fonction lorsqu'un client (comme un navigateur) envoie une requête HTTP (GET, POST, etc.).  
Elle permet de **répondre avec des données, du HTML ou des fichiers** selon le chemin demandé.

---

## Structure de base

```js
app.METHOD(PATH, HANDLER);
```
- **Exemple avec la méthode `GET`**
```js
app.get('/home', (req, res) => {
    res.send('Welcome to home page ')
})
```
## Méthodes HTTP dans Express.js
<table>
  <thead>
    <tr>
      <th>Méthode</th>
      <th>Description</th>
      <th>Utilisation courante</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>GET</code></td>
      <td>Récupérer des données du serveur</td>
      <td>Afficher une page ou obtenir des informations</td>
    </tr>
    <tr>
      <td><code>POST</code></td>
      <td>Envoyer des données au serveur</td>
      <td>Créer une nouvelle ressource (ex: un utilisateur)</td>
    </tr>
    <tr>
      <td><code>PUT</code></td>
      <td>Remplacer une ressource existante</td>
      <td>Mettre à jour totalement une ressource</td>
    </tr>
    <tr>
      <td><code>PATCH</code></td>
      <td>Modifier partiellement une ressource</td>
      <td>Mettre à jour un champ spécifique</td>
    </tr>
    <tr>
      <td><code>DELETE</code></td>
      <td>Supprimer une ressource</td>
      <td>Supprimer un utilisateur, un produit, etc.</td>
    </tr>
    <tr>
      <td><code>ALL</code></td>
      <td>Intercepter toutes les méthodes HTTP pour une route</td>
      <td>Logger, autorisation, redirection</td>
    </tr>
  </tbody>
</table>

## Les paramètres de route
pour capturer une partie dynamique dans l'URL, Utilisez `:parametre`
```js
app.get('/utilisateur/:nom', (req, res) => {
    const nom = req.params.nom
  res.send(`Bonjour ${nom}`);
});
```
| Pour récupérer un paramètre dans l'URL avec Express.js, on utilise `req.params`.
- <strong> Exemple : Récupérer le paramètre `id` </strong>

```js
const express = require('express');
const app = express();
const port = 3000;

// Route avec paramètre :id
app.get('/formations/:id', (req, res) => {
  const formationId = req.params.id; // Récupération du paramètre
  res.send(`Vous avez demandé la formation avec ID : ${formationId}`);
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

```
## Autres méthodes HTTP
```js
app.post('/utilisateurs', (req, res) => {
  res.send('Nouvel utilisateur ajouté');
});

app.put('/utilisateurs/:id', (req, res) => {
  res.send(`Utilisateur ${req.params.id} mis à jour`);
});

app.delete('/utilisateurs/:id', (req, res) => {
  res.send(`Utilisateur ${req.params.id} supprimé`);
});

```
### Application
- Crée un petit serveur Node + Express avec les routes suivantes :
  - `/` : renvoie "Bienvenue à Azicode62".
  - `/formations` : renvoie un tableau JSON des formations.
  - `/formations/:id` : renvoie un message avec l’ID.
  - `/formateur/:nom` : renvoie un message personnalisé avec le nom du formateur.

## Testez vos routes avec Postman

:::tip Astuce Pour tester facilement vos routes HTTP (GET, POST, PUT, DELETE...), utilisez Postman :

- Téléchargez et installez `Postman` (<a target='_blank' href="https://www.postman.com/downloads/">Lien de téléchargement</a>)
- Lancez votre serveur Node.js

- Ouvrez Postman

- Entrez l’URL de votre API (ex: http://localhost:3000/formations)

- Choisissez la méthode (GET, POST, etc.)

- Cliquez sur Send pour voir la réponse
:::

