---
id: div-span
title: div & span 
---
# DIV & SPAN


# Les balises `<div>` et `<span>` en HTML

Les balises `<div>` et `<span>` sont des **conteneurs génériques** très utilisés en HTML. Elles ne modifient pas le contenu visuellement par défaut, mais servent à **structurer et organiser** le contenu pour le **styliser avec CSS** ou le **manipuler avec JavaScript**.

---

##  `<div>` : conteneur de type bloc

- La balise `<div>` est un **élément de type bloc**.
- Elle occupe **toute la largeur** disponible.
- Elle est souvent utilisée pour **regrouper plusieurs éléments HTML** ensemble.

### Exemple :

```html
<div>
  <h2>Ecole</h2>
  <p>Description de l'école</p>
</div>
```
:::success Résultat
Le titre et le paragraphe sont regroupés dans un même bloc.
:::

## `<span>` : conteneur de type en ligne
- La balise `<span> `est un élément en ligne (inline).
- Elle n'interrompt pas le flux du texte.
- Utilisée pour appliquer un style à une portion de texte sans créer de nouveau bloc.

### Exemple :

```html
<p>L'école de codage <span style="color: red;">Azicode62</span> est la première école qui possède un MOOC en ligne.</p>

```

:::success Résultat
Seul le mot entre `<span>` est stylisé, sans casser la phrase
:::

<hr />
<p>L'école de codage <span class="text-red">Azicode62</span> 
est la première école qui possède un MOOC en ligne.</p>