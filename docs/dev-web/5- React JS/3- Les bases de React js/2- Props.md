---
id: props
title: Props React
---
# Composants avec props

Les **props** (abréviation de **properties**) permettent de transmettre des données d’un composant parent à un composant enfant. C’est un mécanisme fondamental pour rendre les composants dynamiques et réutilisables.

---

## Définir un composant avec props

Un composant fonctionnel reçoit les props comme argument de fonction.

```jsx
function Message(props) {
  return <p>Bonjour, {props.nom} !</p>;
}

export default Message;
```

## Utiliser un composant avec props
Dans `App.js`, on importe le composant et on lui passe une prop `nom`.
```jsx
import React from 'react';
import Message from './components/Message';

function App() {
  return (
    <div>
      <h1>Exemple avec les props</h1>
      <Message nom="Rachid" />
      <Message nom="Amina" />
      <Message nom="Youssef" />
    </div>
  );
}

export default App;

```

## Props avec plusieurs valeurs
```jsx
function Utilisateur(props) {
  return (
    <div>
      <h2>{props.nom}</h2>
      <p>Âge : {props.age}</p>
      <p>Email : {props.email}</p>
    </div>
  );
}

export default Utilisateur;

```

Dans `App.js`, on importe le composant et on lui passe une prop `nom`, `email` et `age`.
```jsx
import Utilisateur from './components/Utilisateur';

function App() {
  return (
    <div>
      <Utilisateur nom="Anas" age={25} email="anas@gmail.com" />
      <Utilisateur nom="Said" age={29} email="said@gmail.com" />
    </div>
  );
}

```

##  Activité pratique : Utiliser les props dans React

Pour réaliser cette activité pratique complète, [cliquez ici pour accéder au document ](https://docs.google.com/document/d/1lT_QfbEZGcF094inYMIMT0c7up7T_hl47pIcDIFHnHg/edit?usp=sharing).


