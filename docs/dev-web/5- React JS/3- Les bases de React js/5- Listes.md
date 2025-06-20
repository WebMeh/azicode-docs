---
id: list-react-map
title: Les listes
---
# Les listes et les clés en React

En React, il est courant de vouloir afficher une **liste de données** (ex: utilisateurs, messages, tâches...). Pour cela, on utilise généralement la méthode `.map()` pour **générer dynamiquement** une liste de composants.

---

##  Afficher une liste avec `.map()`

```jsx
const villes = ["Azilal", "Beni Mellal", "Marrakech"];

function ListeVilles() {
  return (
    <ul>
      {villes.map((ville, index) => (
        <li key={index}>
            {ville}
        </li>
      ))}
    </ul>
  );
}
```
:::warning Remarque
La `key` est obligatoire pour chaque élément généré par `.map()`.
:::

## Exemple complet
```jsx
const personnes = [
  { id: 1, nom: "Ali" },
  { id: 2, nom: "Sara" },
  { id: 3, nom: "Youssef" },
];

function ListePersonnes() {
  return (
    <div>
      <h2>Liste des personnes</h2>
      <ul>
        {personnes.map((personne) => (
          <li key={personne.id}>{personne.nom}</li>
        ))}
      </ul>
    </div>
  );
}

```