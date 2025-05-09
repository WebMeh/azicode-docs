---
id: liens-et-images
title: Liens et images
---

# Liens et images en HTML

## Les liens html

Les liens (ou **hyperliens**) permettent de naviguer d'une page web à une autre, ou d'ouvrir un site externe. Ils sont essentiels pour créer une navigation entre les pages d’un site.

Pour créer un lien, on utilise la balise `<a>`, appelée **balise d’ancrage**.

```html
<a href="https://www.google.com">Aller sur Google</a>
```
:::info Attributs importants 

- `href` : Lien vers la ressource.
- `target="_blank"` : Ouvre le lien dans un nouvel onglet (optionnel).
:::
```html
<a href="https://www.example.com">Visiter le site</a>

<a href="https://www.example.com" target="_blank">Ouvrir dans un nouvel onglet</a>
```
## Les images en html
Pour afficher une image sur la page, on utilise la balise auto-fermante `<img>`.
:::info Attributs importants 
- `src` : chemin vers l’image.
- `alt` : s’affiche si l’image ne se charge pas, utile aussi pour l’accessibilité. 
:::
```html
<img src="logo.png" alt="Exemple d'image HTML">
```
:::warning Attention
L’attribut `alt` est obligatoire : il permet aux lecteurs d’écran de décrire l’image aux personnes malvoyantes.
:::