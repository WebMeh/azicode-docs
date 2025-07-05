---
id: bootstrap
title: Les bases de Bootstrap
---
# Bootstrap
## Introduction à Bootstrap
**Bootstrap** est une bibliothèque front-end gratuite et open-source conçue pour faciliter le développement web responsive. Elle fournit un ensemble de classes CSS prêtes à l’emploi, des composants interactifs JavaScript et une grille flexible.
:::info SITE OFFICIEL
➡️ (https://getbootstrap.com)
:::

##  Intégrer Bootstrap dans un projet
Ajoute ces lignes dans ton fichier HTML entre les balises `<head>` :
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

## Couleurs de base
Bootstrap propose un système de couleurs standardisé pour harmoniser le design de l’interface.
| Classe      | Couleur correspondante        |
| ----------- | ----------------------------- |
| `primary`   | Bleu                          |
| `secondary` | Gris clair                    |
| `success`   | Vert                          |
| `danger`    | Rouge                         |
| `warning`   | Jaune/orangé                  |
| `info`      | Bleu clair                    |
| `light`     | Gris très clair (quasi blanc) |
| `dark`      | Gris foncé                    |
| `white`     | Blanc                         |
| `black`     | Noir                          |

###  Exemples d'utilisation
```html
<!-- Couleurs de texte -->
<p class="text-primary">Texte bleu</p>
<p class="text-danger">Texte rouge</p>
<p class="text-success">Texte vert</p>

<!-- Couleurs de fond -->
<div class="bg-info text-white p-3">Fond bleu clair, texte blanc</div>
<div class="bg-dark text-white p-3">Fond gris foncé</div>
```

## Classes de texte
### Alignement
```html
<p class="text-start">Aligné à gauche</p>
<p class="text-center">Centré</p>
<p class="text-end">Aligné à droite</p>
```

### Style de texte
| Classe                      | Effet               |
| --------------------------- | ------------------- |
| `fw-bold`                   | Gras                |
| `fw-semibold`               | Semi-gras           |
| `fw-light`                  | Léger               |
| `fst-italic`                | Italique            |
| `text-decoration-underline` | Souligné            |
| `text-decoration-none`      | Pas de soulignement |

### Taille du texte
| Classe          | Taille approx.     |
| --------------- | ------------------ |
| `fs-1` à `fs-6` | Très grand à petit |

```html
<p class="fs-1">Titre très grand</p>
<p class="fs-6">Petit texte</p>

```

## Atelier 1
![Texte alternatif](/img/bootstrap-text.png)

## Le système de grille
Bootstrap utilise un système en 12 colonnes pour créer des layouts flexibles et responsives.
**Exemple**
```html 
<div class="container">
  <div class="row">
    <div class="col-md-6 bg-primary text-white">Colonne 1</div>
    <div class="col-md-6 bg-secondary text-white">Colonne 2</div>
  </div>
</div>
```
- **col-md-6** : prend 6 colonnes sur 12 à partir des écrans de taille moyenne.
- **container** : conteneur avec marge automatique.
- **row** : ligne.

## le système Flexbox
Elle permet de gérer facilement l’alignement, la distribution et l’orientation des éléments enfants.
**Exemple**
```html
<div class="d-flex bg-light p-3">
  <div class="p-2 bg-primary text-white">Azilal</div>
  <div class="p-2 bg-success text-white">Béni Mellal</div>
  <div class="p-2 bg-danger text-white">Marrakech</div>
</div>
```
**Orientation des éléments:**
| Classe                | Effet                              |
| --------------------- | ---------------------------------- |
| `flex-row`            | Alignement horizontal (par défaut) |
| `flex-row-reverse`    | Alignement horizontal inversé      |
| `flex-column`         | Alignement vertical                |
| `flex-column-reverse` | Alignement vertical inversé        |

**Justification:**
| Classe                    | Effet                                   |
| ------------------------- | --------------------------------------- |
| `justify-content-start`   | Alignés à gauche (défaut)               |
| `justify-content-end`     | Alignés à droite                        |
| `justify-content-center`  | Centrés horizontalement                 |
| `justify-content-between` | Espace égal entre les éléments          |

**Alignement vertical:** <br />
Contrôle la distribution horizontale des éléments.
| Classe                 | Effet                                 |
| ---------------------- | ------------------------------------- |
| `align-items-start`    | En haut                               |
| `align-items-center`   | Au centre verticalement               |
| `align-items-end`      | En bas                                |
