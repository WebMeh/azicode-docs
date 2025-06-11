---
id: list-html
title: Les listes HTML 
---
# Les listes HTML

# Les listes en HTML

HTML propose trois types principaux de listes : les listes non ordonnées, les listes ordonnées, et les listes de définitions.

---

## Liste non ordonnée `<ul>`

Utilisée pour représenter une liste d’éléments sans ordre particulier.

```html
<ul>
  <li>Agadir</li>
  <li>Marrakech</li>
  <li>Ouarzazat</li>
</ul>
```
#### ✅ Résultat visuel
<div class="demo-box"> <ul>
  <li>Agadir</li>
  <li>Marrakech</li>
  <li>Ouarzazat</li>
</ul>
</div>

## Liste ordonnée `<ol>`

Utilisée lorsque l’ordre des éléments est important.
```html
<ol>
  <li>Argentine</li>
  <li>Espagne</li>
  <li>France</li>
</ol>
```
#### ✅ Résultat visuel
<div class="demo-box"> <ol>
  <li>Argentine</li>
  <li>Espagne</li>
  <li>France</li>
</ol>
</div>

## Liste de définitions `<dl>`
Utilisée pour des termes et leurs définitions.
```html
<dl>
  <dt>HTML</dt>
  <dd>Langage de balisage pour structurer le contenu web</dd>

  <dt>CSS</dt>
  <dd>Langage de style pour présenter le contenu HTML</dd>
</dl>
```
#### ✅ Résultat visuel
<div class="demo-box"> 
<dl>
  <dt>HTML</dt>
  <dd>Langage de balisage pour structurer le contenu web</dd>

  <dt>CSS</dt>
  <dd>Langage de style pour présenter le contenu HTML</dd>
</dl>
</div>