---
id: structures-general
title: La structure générale
---

# Structure générale d’une page HTML sémantique

Comprendre la structure d’une page HTML est essentiel pour écrire du code propre, accessible, et facile à maintenir. HTML5 introduit des **balises sémantiques** qui ont une signification claire sur le contenu qu’elles enveloppent.

---

##  Les balises principales

| Balise       | Rôle                                                                 |
|--------------|----------------------------------------------------------------------|
| `<header>`   | En-tête de la page ou d’une section, contient généralement un logo, titre, navigation |
| `<nav>`      | Menu de navigation principal                                         |
| `<main>`     | Contenu principal unique à la page                                  |
| `<section>`  | Partie ou regroupement logique du contenu                           |
| `<article>`  | Contenu autonome (ex : un article de blog, une carte de formation…) |
| `<aside>`    | Contenu secondaire (ex : publicité, liens connexes, encart)         |
| `<footer>`   | Pied de page (infos contact, copyright, liens bas…)                 |

---


##  Exemple de structure HTML complète

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Azicode 62</title>
  </head>
  <body>
    <header>
      <h1>Azicode62.ma</h1>
      <nav>
        <ul>
          <li><a href="index.html">Accueil</a></li>
          <li><a href="formations.html">Formations</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section>
        <h2>Nos Formations</h2>
        <article>
          <h3>Développement Web</h3>
          <p>Apprenez à créer des sites modernes avec HTML, CSS et JavaScript.</p>
        </article>
        <article>
          <h3>Développement Mobile</h3>
          <p>Créez des applications mobiles avec React Native.</p>
        </article>
      </section>
      <aside>
        <h4>Infos utiles</h4>
        <p>Formations certifiantes disponibles toute l’année.</p>
      </aside>
    </main>

    <footer>
      <p>&copy; 2025 - École Numérique</p>
    </footer>
  </body>
</html>
