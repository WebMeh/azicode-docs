---
id: premier-script
title: Créer et exécuter son premier script Node.js
sidebar_label: Premier script
---

# Créer votre premier script Node.js

Maintenant que Node.js est installé, voyons comment écrire notre tout premier programme.

---

## Étape 1 : Créer un fichier JavaScript

1. Ouvre ton éditeur de code (Visual Studio Code recommandé).
2. Crée un nouveau dossier, par exemple : `mon-premier-script`
3. Dans ce dossier, crée un fichier nommé : `app.js`

---

## Exemple de code

Dans le fichier `app.js`, écris ce code :

```js
console.log("Bonjour depuis Node.js !");
```
### Exécution
Exécuter le code avec la commande suivante
```|
node app.js
```
---

##  Exemple avec les fonctions

- Crée un fichier `exercice.js` dans ton dossier.

- Dans ce fichier, écris le code suivant :

```js
function direBonjour(nom) {
  console.log("Bonjour, " + nom + " !");
}

direBonjour("Karim");
direBonjour("Ahmed");
```
---

##  Exercice d'application
- Crée un fichier `presentation.js` dans ton dossier.
1. Crée une fonction presentation qui prend deux paramètres : `nom` et `ville`

2. Affiche un message comme :
```
Bonjour, je m'appelle Yassine et je viens de Azilal.

