---
id: intro-html
title: Introduction à HTML
---

# Qu'est-ce que HTML5 ?

HTML (HyperText Markup Language) est le langage de base utilisé pour créer des pages web. Il permet de structurer le contenu d’un site (titres, paragraphes, images, liens...).

## Pourquoi apprendre HTML ?

- Indispensable pour créer un site web.
- Comprendre comment le contenu d’une page est organisé.
- Base pour apprendre CSS et JavaScript ensuite.

## Editeur de code
Pour créer des fichiers HTML, il te faut un **éditeur de code**. Voici quelques éditeurs gratuits et adaptés aux débutants :

:::tip
✅ Recommandé : **[Visual Studio Code](https://code.visualstudio.com/)** (multiplateforme, extensions, auto-complétion).
:::

Autres alternatives :
- [Sublime Text](https://www.sublimetext.com/)
- [Notepad++](https://notepad-plus-plus.org/) (Windows uniquement)
- [Brackets](http://brackets.io/)

## Éléments
Le code HTML est constitué d'une série d'éléments délimités par des balises, écrites entre chevrons (< et >).
![Exemple de balise img](/img/html-images/balise.png)

:::info
La balise de fermeture est la même que la balise d'ouverture, précédée d'une barre oblique `/`.
:::



## Structure d'un fichier HTML de base

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ma première page</title>
  </head>
  <body>
    <h1>Bonjour le monde !</h1>
    <p>Ceci est mon premier site web.</p>
  </body>
</html>
