---
id: usestate
title:  useState Hook
---
# Le hook useState
Le Hook `useState` permet de **créer et gérer un état local** dans un composant fonctionnel.
```js
const [etat, setEtat] = useState(valeurInitiale);
```
- **etat** : valeur actuelle.
- **setEtat** : fonction pour modifier cette valeur.
- **useState**(valeurInitiale) : initialise l’état.

## Exemple simple : Un compteur
```jsx
import React, { useState } from 'react';

    function Compteur () {
    const [nombre, setNombre] = useState(0);

    function ajouter() {
        setNombre(nombre+1)
    }

    return (
        <div>
        <p>Valeur actuelle : {nombre}</p>
        <button onClick={ajouter}>Incrémenter</button>
        </div>
    );
};

export default Compteur;

```