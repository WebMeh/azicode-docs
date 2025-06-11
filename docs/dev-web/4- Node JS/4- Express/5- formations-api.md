---
title: API des Formations (Express.js)
description: Documentation complète de l'API CRUD pour gérer des formations avec Express.js (sans base de données).
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

#  API des Formations (Express.js)

Cette API permet de gérer une liste de **formations** en mémoire (tableau JavaScript) avec les opérations **CRUD** :

- ✅ Créer une formation
- 📖 Lire les formations (toutes ou une seule)
- ✏️ Modifier une formation
- ❌ Supprimer une formation

---

##  Structure d'une formation

Chaque formation possède les champs suivants :

```json
{
  "id": 1,
  "titre": "Développement Web",
  "description": "Une immersion complète dans le développement web HTML, CSS, Javascript.",
  "image": "web.jpg",
  "duree": "3 mois"
}
```
## Lancer le serveur Express
``` bash
npm run start 
```
Le serveur écoute sur : http://localhost:9000

## Endpoints de l'API
###  GET `/formations`
- Code API:
``` js

/**
 * Obtenir toutes les formations
 * Méthode : GET
 * URL : /formations
 */
app.get('/formations', (req, res) => {
  res.json(formations);
});
``` 

:::info Résutat
Retourne la liste complète des formations.
:::
- Réponse
``` json
[
   {
        "id": 1,
        "titre": "Node.js ",
        "duree": "3 mois",
        "image": "node.png",
        "description": "Apprenez les bases de Node.js, la plateforme JavaScript côté serveur. Ce cours couvre la création de serveurs, l'utilisation d'Express et la gestion de fichiers."
    },
    {
        "id": 2,
        "titre": "Frontend avec Bootstrap",
        "duree": "1 mois",
        "image": "bootstrap.png",
        "description": "Découvrez comment utiliser le framework CSS Bootstrap pour créer des interfaces web responsives rapidement et efficacement."
    }
]

```

 
###  GET `/formations/:id`
- Code API :
``` js
/**
 * Obtenir une seule formation par son ID
 * Méthode : GET
 * URL : /formations/:id
 */
app.get('/formations/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const formation = formations.find(f => f.id === id);

  // Si la formation n'existe pas
  if (!formation) {
    return res.status(404).json({ error: 'Formation non trouvée.' });
  }

  res.json(formation);
});
```

:::info Résutat
Retourne une formation selon son ID.
:::
- Eemple `/formations/1`
- Réponse
``` json
 {
        "id": 1,
        "titre": "Node.js ",
        "duree": "3 mois",
        "image": "node.png",
        "description": "Apprenez les bases de Node.js, la plateforme JavaScript côté serveur. Ce cours couvre la création de serveurs, l'utilisation d'Express et la gestion de fichiers."
    }
```
###  POST `/formations/:id`
- Code API:
``` js

/**
 * Ajouter une nouvelle formation
 * Méthode : POST
 * URL : /formations
 */
app.post('/formations', (req, res) => {
  const { titre, description, image, duree } = req.body;

  // Vérification que tous les champs sont présents
  if (!titre || !description || !image || !duree) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires.' });
  }

  // Création de la formation
  const formation = {
    id: formations.length+1   ,
    titre,
    description,
    image,
    duree
  };

  // Ajout dans le tableau
  formations.push(formation);

  // Réponse avec la formation créée
  res.status(201).json(formation);
});
``` 
:::info Résutat
Ajoute une nouvelle formation.
:::

- Corps (body) de la requête
``` json
 {
  "titre": "React JS",
  "description": "Créer des interfaces web",
  "image": "react.png",
  "duree": "2 mois"
}
```
- Réponse:
``` json
{
  "id": 3,
  "titre": "React JS",
  "description": "Créer des interfaces web",
  "image": "react.png",
  "duree": "2 mois"
}

```

###  PUT `/formations/:id`
- Code API:
``` js

/**
 * Modifier une formation existante
 * Méthode : PUT
 * URL : /formations/:id
 */
app.put('/formations/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const formation = formations.find(f => f.id === id);

  // Vérification de l'existence
  if (!formation) {
    return res.status(404).json({ error: 'Formation non trouvée.' });
  }

  // Mise à jour des champs si fournis
  const { titre, description, image, duree } = req.body;
  if (titre) formation.titre = titre;
  if (description) formation.description = description;
  if (image) formation.image = image;
  if (duree) formation.duree = duree;

  res.json(formation);
});

``` 
:::info Résutat
Met à jour (modifier) les données d'une formation existante..
:::
- Exemple.  `/formations/3`
- Corps (body) de la requête
```json
    {
  "titre": "React avancé"
}
```
:::success Remarque
Ici on veut modifier juste le titre !
:::


###  DELETE `/formations/:id`
- Code API:
``` js
/**
 * Supprimer une formation par ID
 * Méthode : DELETE
 * URL : /formations/:id
 */
app.delete('/formations/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = formations.findIndex(f => f.id === id);

  // Vérification de l'existence
  if (index === -1) {
    return res.status(404).json({ error: 'Formation non trouvée.' });
  }

  // Suppression avec splice
  const [deleted] = formations.splice(index, 1);
  res.json({ message: 'Formation supprimée.', formation: deleted });
});
``` 
:::warning Résultat
Supprime une formation par son ID.
:::
- Pour en savoir plus sur la méthode `splice()`, consultez la [documentation officielle MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

- Exemple:   `/formations/3`
- Réponse:
```json
 {
  "message": "Formation supprimée.",
  "formation": {
    "id": 3,
    "titre": "React JS",
  "description": "Créer des interfaces web",
  "image": "react.png",
  "duree": "2 mois"
    
  }
}

```

