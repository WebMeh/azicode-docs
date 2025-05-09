---
id: module-path
title: Le module Path
sidebar_label: Module Path
---

# Le module Path

Le module `path` de Node.js fournit des utilitaires pour travailler avec les chemins de fichiers et de dossiers. Il est **inclus nativement** dans Node.js — pas besoin de l’installer avec npm.

---

## Importer le module Path

```js
const path = require('path');
```
<table>
  <thead>
    <tr>
      <th>Fonction</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>path.basename(p)</code></td>
      <td>Retourne le <strong>nom du fichier</strong> à partir d’un chemin donné.</td>
    </tr>
    <tr>
      <td><code>path.dirname(p)</code></td>
      <td>Retourne le <strong>dossier parent</strong> d’un chemin donné.</td>
    </tr>
    <tr>
      <td><code>path.extname(p)</code></td>
      <td>Retourne <strong>l’extension</strong> du fichier.</td>
    </tr>
    <tr>
      <td><code>path.join(...segments)</code></td>
      <td>Assemble plusieurs segments en un <strong>chemin unique</strong>.</td>
    </tr>
    <tr>
      <td><code>path.resolve(...segments)</code></td>
      <td>Résout un <strong>chemin absolu</strong> à partir de segments.</td>
    </tr>
    <tr>
      <td><code>path.parse(p)</code></td>
      <td>Renvoie un <strong>objet</strong> contenant les différentes parties d’un chemin.</td>
    </tr>
  </tbody>
</table>
