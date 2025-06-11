---
id: tables
title: Les tables HTML
---
# Tables HTML

Les tableaux HTML permettent d’organiser et de présenter les données sous forme de lignes et colonnes. Ils sont souvent utilisés pour afficher des données, des paramètres d’API, des listes d’options, etc.

## Exemple simple de tableau

```html
<table border="1">
  <thead>
    <tr>
      <th>Nom</th>
      <th>Âge</th>
      <th>Ville</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ali</td>
      <td>25</td>
      <td>Rabat</td>
    </tr>
    <tr>
      <td>Sara</td>
      <td>22</td>
      <td>Casablanca</td>
    </tr>
    <tr>
      <td>Khalid</td>
      <td>31</td>
      <td>Azilal</td>
    </tr>
  </tbody>
</table>
```
##  Éléments HTML pour les tableaux

Voici un tableau qui récapitule les principaux éléments utilisés pour créer des tableaux HTML structurés et accessibles.

| Élément       | Rôle / Utilité                                                                 |
|---------------|---------------------------------------------------------------------------------|
| `<table>`     | Conteneur principal du tableau                                                  |
| `<thead>`     | En-tête du tableau (groupe de lignes d'en-tête)                                |
| `<tbody>`     | Corps principal du tableau (contenu des données)                               |
| `<tr>`        | Ligne du tableau (utilisé dans `<thead>`, `<tbody>`, et `<tfoot>`)             |
| `<th>`        | Cellule d’en-tête (gras, centré par défaut)                                    |
| `<td>`        | Cellule de données standard                                                     |
| `scope`       | Attribut utilisé dans `<th>` pour préciser la portée (row, col, etc.)          |
| `colspan`     | Attribut de fusion de colonnes (ex. `colspan="2"`)                             |
| `rowspan`     | Attribut de fusion de lignes (ex. `rowspan="3"`)                               |


:::info Astuce
Utilise toujours `<thead>` et `<tbody>` pour une meilleure sémantique et accessibilité.
:::

## Cas particuliers des tableaux HTML
### Fusion de colonnes (colspan)
```html
<table>
  <tr>
    <th colspan="2">Informations</th>
  </tr>
  <tr>
    <td>Nom</td>
    <td>Aya</td>
  </tr>
  <tr>
    <td>Âge</td>
    <td>21</td>
  </tr>
</table>
```
#### ✅ Résultat visuel
<table>
  <tr>
    <th colspan="2">Informations</th>
  </tr>
  <tr>
    <td>Nom</td>
    <td>Aya</td>
  </tr>
  <tr>
    <td>Âge</td>
    <td>21</td>
  </tr>
</table>

### Fusion de lignes (rowspan)
```html
<table>
  <tr>
    <th>Nom</th>
    <td rowspan="2">Aya</td>
  </tr>
  <tr>
    <th>Âge</th>
  </tr>
</table>
```
#### ✅ Résultat visuel
<table>
  <tr>
    <th>Nom</th>
    <td rowspan="2">Aya</td>
  </tr>
  <tr>
    <th>Âge</th>
  </tr>
</table>