---
id: fs-module
title: Manipulation de fichiers avec le module fs
sidebar_label: Module fs
---

# 📁 Le module `fs` (File System)

Node.js permet d’interagir facilement avec le **système de fichiers** grâce à un module interne appelé `fs`.

Il est utilisé pour :

- Lire un fichier
- Écrire dans un fichier
- Créer des fichiers ou des dossiers
- Supprimer des fichiers
- Modifier leur contenu

---

## Importer le module `fs`

```js
const fs = require('fs');
```
## Lire un fichier
```js
fs.readFile('fichier.txt', 'utf8', function(err, data) {
  if (err) {
    console.error('Erreur de lecture du fichier :', err);
    return;
  }
  console.log('Contenu du fichier :', data);
});
```

## Ecrire dans un fichier
```js
fs.writeFile('fichier.txt', 'Bonjour Azicode 62 !', function(err) {
  if (err) {
    console.error('Erreur lors de l\'écriture :', err);
    return;
  }
  console.log('Fichier écrit avec succès !');
});

```

## Ajouter du texte à un fichier existant
```js
fs.appendFile('fichier.txt', '\nFormation Fulstack JS', function (err) {
  if (!err) console.log('Texte ajouté !');
  
});

```

## Créer un dossier
```js
fs.mkdir('monDossier', function(err) {
  if (err) {
    console.error('Erreur de création :', err);
    return;
  }
  console.log('Dossier créé !');
});

```

### Exercice d'application
- Utiliser `fs` pour écrire, lire et modifier un fichier.
-  Crée trois dossiers <strong> `cours` </strong>, <strong>`exercices`</strong> et <strong> `projets` </strong>.
- Crée un fichier <strong> `seance1.txt` </strong> dans le dossier <strong>`cours`</strong> contenant la phrase :
<strong style={{color: 'blue'}}>Aujourd'hui, j'apprends le module fs avec Azicode 62.</strong>

- Ajoute une nouvelle ligne dans le fichier <strong> `seance1.txt` </strong>  avec la date du jour.
- Crée un fichier <strong> `tp1.txt` </strong> dans le dossier <strong>`exercices`</strong> contenant la phrase :
<strong style={{color: 'blue'}}>Travaux pratiques.</strong>

- Lis le fichier <strong> `tp1.txt` </strong> et affiche son contenu dans la console.
- Lis le fichier <strong> `seance1.txt` </strong> et affiche son contenu dans la console.
