---
id: structure-
title: Structure du projet React
---
## Structure du projet React
Une fois le projet créé, voici les dossiers principaux :
```csharp
mon-projet-react/
├── node_modules/          # Modules installés (lib externes)
├── public/                # Fichiers statiques (index.html, images)
├── src/                   # Code source React
│   ├── App.js             # Composant principal
│   ├── index.js           # Point d'entrée
│   └── ...                # Autres composants, fichiers CSS
├── package.json           # Configuration et dépendances
└── README.md

```
##  Modifier le composant App.jsx

1. Ouvrir `src/App.jsx`
2. Remplacer le contenu par :
```jsx
function App() {
  return (
    <div>
      <h1>Bienvenue à Azicode62 MOOC</h1>
      <p>Apprendre React.js avec Azicode62 </p>
    </div>
  );
}

export default App;
```
## Insérer une image dans un projet React

### 1. Placer l’image dans le projet
Il y a deux façons principales d’ajouter une image dans React :
#### a.  Dans le dossier `public`
- Place ton image directement dans le dossier `public` (ex : `public/logo.png`).
- Tu peux y accéder directement par son chemin relatif à la racine.
#### b. Dans le dossier `src`
- Place l’image dans `src/assets` ou un autre dossier à l’intérieur de `src`.
- Tu devras importer l’image dans ton composant.

### 2. Exemple avec une image dans `public`
Si tu as mis une image `logo.png` dans le dossier `public`.
```jsx

function App() {
  return (
    <div>
       <img src="/logo.png" alt="Logo" width="200" />
    </div>
  );
}

```
### 3. Exemple avec une image dans `src/assets`

```jsx
import React from 'react';
import logo from './assets/logo.png';  // importer l'image

function App() {
  return (
    <div>
       <img src={logo} alt="Logo" width="200" />
    </div>
  );
}

```