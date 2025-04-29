---
id: package-json
title: Le fichier package.json
---

# Le fichier `package.json`

C’est le cœur de tout projet Node.js. Il contient les métadonnées du projet et la liste des dépendances.

---

## Exemple de fichier `package.json`

```json
{
  "name": "mon-projet",
  "version": "1.0.0",
  "description": "Un projet Node.js",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}

```
- Champs importants
  <table>
    <thead>
    <tr style={{ textAlign: "center" }} >
    <th>
    Champs
    </th>
    <th>Rôle</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>name</td>
    <td>Nom du projet</td>
    </tr>
    <tr>
    <td>version</td>
    <td>Version actuelle</td>
    </tr>
    <tr>
    <td>scripts</td>
    <td>Commandes personnalisées</td>
    </tr>
    <tr>
    <td>dependencies</td>
    <td>Packages nécessaires pour exécuter l'app</td>
    </tr>
     <tr>
    <td>devDependencies</td>
    <td>Packages nécessaires uniquement en dev</td>
    </tr>
    </tbody>
  </table>

##  Lancer un script défini
Tu peux lancer un script défini avec :
```bash
npm run start
```
ou simplement :
```bash
npm start 
```