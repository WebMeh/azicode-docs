---
id: liens-et-images
title: Liens et media
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

## Les vidéos en html
```html
<video width="640" height="360" controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Votre navigateur ne support pas cette vidéo.
</video>
```

## Audio en html
```html
<audio controls>
    <source src="music.mp3" type="audio/mpeg">
    <source src="music.ogg" type="audio/ogg">
    Votre navigateur ne support pas cet element.
</audio>
```