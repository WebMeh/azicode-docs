---
id: fetch-api
title: Utiliser Fetch API en JavaScript
sidebar_label: Fetch API
---

# Fetch API

La **Fetch API** permet de faire des requêtes HTTP asynchrones directement depuis JavaScript. Elle est souvent utilisée pour interagir avec des APIs.

---

## Syntaxe de base

```js
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Traiter les données
  })
  .catch(error => {
    console.error('Erreur :', error);
  });
  ```
## Exemple
```js
fetch('http://localhost:8888/formations')
  .then(res => res.json())
  .then(formations => {
    console.log(formations);
  });
```


## Exemple pratique – Afficher des cartes Bootstrap
```js
fetch('/formations')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('cards');
    data.forEach(formation => {
      container.innerHTML += `
        <div class="col-md-4">
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">${formation.title}</h5>
              <p class="card-text">Durée : ${formation.duree} mois</p>
              <p class="lead"> Formateur: Mr. ${formation.formateur.name}  </p>
            </div>
          </div>
        </div>
      `;
    });
  });

```

## Envoyer des données avec POST

La méthode `POST` permet d’envoyer des données vers le serveur, par exemple lors de la soumission d’un formulaire.

Voici un exemple pour envoyer une nouvelle formation à une route `/formations` :

```js
const nouvelleFormation = {
  title: 'JavaScript avancé',
  duree: '4 jours'
};

fetch('/formations', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(nouvelleFormation)
})
  .then(res => res.json())
  .then(data => {
    console.log('Formation ajoutée :', data);
  })
  .catch(error => {
    console.error('Erreur :', error);
  });
```
<table>
  <thead>
    <tr>
      <th>Propriété</th>
      <th>Description</th>
    </tr>
  </thead>
   <tbody>
    <tr>
      <td><code>method</code></td>
      <td>Indique le type de requête HTTP à effectuer (GET, POST, PUT, DELETE...)</td>
    </tr>
    <tr>
      <td><code>headers</code></td>
      <td>Permet de préciser des informations supplémentaires comme le type de contenu avec.</td>
    </tr>
    <tr>
      <td><code>body</code></td>
      <td>Contient les données à envoyer, converties en JSON avec <code>JSON.stringify()</code></td>
    </tr>
    </tbody>
</table>
