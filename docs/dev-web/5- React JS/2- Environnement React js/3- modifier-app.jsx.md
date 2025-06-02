---
id: structure-
title: Structure du projet React
---
# Structure du projet React
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
#  Modifier le composant App.jsx

## Étapes :
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
