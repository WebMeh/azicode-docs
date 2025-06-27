---
id: use-effect
title: useEffect 
---
# useEffect hook
En React, un side effect est une action qui interagit avec le monde extérieur au composant, par exemple :
- Une requête API (GET, POST…).
- Une manipulation directe du DOM
  
:::success Utilisation
On utilise useEffect() pour contrôler quand ces effets sont exécutés.
:::

## Syntaxe de base de useEffect

```jsx
useEffect(() => {
  // Code à exécuter 
}, []);

```
- Le 1er argument est une fonction à exécuter (effet).
- Le 2e argument est un tableau de dépendances. 

## Exemple 1 : exécuter une seule fois au démarrage
```jsx
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    console.log('Composant monté !');
  }, []);


  return <h1>Hello</h1>;
}
```

##  Exemple 2 : effet dépendant d’une variable
```jsx
import { useState, useEffect } from 'react';

function Compteur() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Le compteur est maintenant à : ${count}`);
  }, [count]);

  function handleCount () {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={handleCount}>Incrémenter</button>
    </div>
  );
}
```
:::info Différence
L’effet s’exécute à chaque fois que count change.
:::

## Exemple 3 : sans tableau de dépendance
```jsx
useEffect(() => {
  console.log('Ce code s’exécute à chaque mouvement !');
});
```

:::warning Attention
Pas recommandé dans la majorité des cas.
:::
