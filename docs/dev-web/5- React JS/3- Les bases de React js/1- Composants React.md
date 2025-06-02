---
id: component
title: Composants React
---
# Composants React

## 1. Composant simple 

Un composant React est une fonction JavaScript qui retourne du JSX, c’est-à-dire un code ressemblant à du HTML mais qui sera transformé en éléments React.

### Exemple de composant simple

```jsx
// Fichier Bonjour.js
function Bonjour() {
    return <h1>Bonjour, bienvenue sur React !</h1>;
}

export default Bonjour;
```
## 2. Intégrer un composant simple dans App.js
Pour utiliser ce composant dans un autre fichier (comme App.js), il faut :
1. Importer le composant.
2. L’utiliser comme une balise JSX.
```jsx
// Fichier App.js
import React from 'react';
import Bonjour from './Bonjour';

function App() {
  return (
    <div>
      <Bonjour />
      <p>Voici notre première application React.</p>
    </div>
  );
}

export default App;

```
