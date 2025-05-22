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
## Exemple pratique

### Côté serveur 
```js
const formations = [
  { id: 1, titre: "Node.js ", duree: "3 mois" },
  { id: 2, titre: "Frontend avec Bootstrap", duree: "24 jours" }
];


app.use(express.static(path.join(__dirname, 'public')));

// Route pour toutes les formations
app.get('/formations', (req, res) => {
  res.json(formations);
});

// Route dynamique avec paramètre id
app.get('/formations/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const formation = formations.find(f => f.id === id);
  if (formation) {
    res.json(formation);
  } else {
    res.status(404).json({ message: "Formation non trouvée" });
  }
});
```

:::success Les routes utilisées
- `/formations` pour retourner toutes les formations.
- `/formations/:id` pour retourner une formation par son id.
:::

### Côté client –  [ Utiliser fetch()](/docs/dev-web/3-%20Javascript/4-%20Fetch%20API/fetch-api.md)
la page `formations.html` contient toutes les formations.
```js 
<div id="formations-container" class="row"></div>
<script>
    fetch('/formations')
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById('formations-container');
        data.forEach(formation => {
          const card = document.createElement('div');
          card.className = 'col-md-4 mb-4';
          card.innerHTML = `
            <div class="card h-100">
              <img src="img/${formation.image}" class="card-img-top" alt="${formation.title}">
              <div class="card-body">
                <h5 class="card-title">${formation.title}</h5>
                <p class="card-text">${formation.description}</p>
                <a href="formation-details.html?id=${formation.id}" class="btn btn-primary"> Details</a>
              </div>
            </div>
          `;
          container.appendChild(card);
        });
      });
  </script>
```

La page <code> formation-details.html </code> permet de voir les informations d'une formation donnée par l'`id`.
Si tu es sur une page avec une URL comme :
```
http://localhost:8888/formation-details.html?id=2
```
Tu peux récupérer id comme ceci :
```js
const params = new URLSearchParams(window.location.search);
const id = params.get('id'); 
```
Et ensuite :
```html
<div class="formation-container"></div>
<script>
    const id = new URLSearchParams(window.location.search).get('id');

    fetch(`/formations/${id}`)
      .then(res => res.json())
      .then(formation => {
        const container = document.getElementById('formation-container')
        const card = document.createElement('div');
          card.className = 'col-md-4 mb-4';
          card.innerHTML = `
            <div class="card h-100">
              <img src="img/${formation.image}" class="card-img-top" alt="${formation.title}">
              <div class="card-body">
                <h5 class="card-title">${formation.title}</h5>
                <p class="card-text">${formation.description}</p>
              </div>
            </div>
          `;
          container.appendChild(card);
      })
      .catch(() => {
        document.body.innerHTML = '<div class="container mt-5"><h2>Aucune formation avec cet ID</h2></div>';
      });
  </script>
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

