---
id: fs-module
title: Le module `fs`
---

# Le module `fs`

Permet de lire, écrire et manipuler des fichiers :

```js
const fs = require('fs');

fs.readFile('fichier.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
