---
id: events
title:  Les événements React
---

# Les événements React
React utilise un système d’événements  qui fonctionne de manière similaire aux événements natifs du DOM, mais avec des différences internes pour assurer la compatibilité cross-navigateurs.
## 1. `Mouse Events`
###  a. `onClick`
Déclenché lorsqu’un élément est cliqué.
```jsx
<button onClick={afficherMessage}>Clique-moi</button>
```
la fonction `afficherMessage` :
```js
function afficherMessage() {
    alert("Bonjour !")
}
```
### b. `onMouseEnter`
Souris sur le bloc
### c. `onMouseLeave`
Souris sortie du bloc
```jsx
function handleMouseEnter (e) {
    console.log("Souris sur le bloc")
}

function handleMouseLeave (e) {
    console.log("Souris sortie du bloc")
}

<div
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  Bonjour, Passez la souris !
</div>
```

##  2. `Clipboard Events`
### a. `onCopy`
Déclenché quand l'utilisateur copie du texte (Ctrl + C)
```jsx
<textarea
    rows="3"
    cols="40"
  value="Copiez-moi !"
  onCopy={displayCopiedMessage}
>
</textarea>
```
:::info Information
utiliser `window.getSelection.toString()` pour afficher le message copié.
:::

### b. `onCut`
Déclenché quand l'utilisateur coupe du texte (Ctrl + X)

### c. `onPaste` 
Déclenché quand l'utilisateur colle du contenu dans le champ (Ctrl + V)


## 3. `Form Events`
###  a. `onSubmit`
C'est un événement du formulaire (`<form>`).

```jsx
const handleSubmit = (e) => {
    e.preventDefault(); 
    alert('Formulaire soumis ');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>  Nom : </label>
        <input
          type="text"
        />
      <button type="submit">Envoyer</button>
    </form>
  );
```
###  b. `onReset`
- Gère l'action de réinitialisation du formulaire. 
- Se déclenche quand un bouton `type="reset"` est cliqué.
- Par défaut, il vide tous les champs du formulaire.
 
### c. `onChange`
Utilisé pour les champs de formulaire comme `input`, `textarea`, `select` ...
```jsx
function handleChange (e) {
    console.log(e.target.value)
}

<input type="text" onChange={handleChange} />
```

