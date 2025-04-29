---
id: installer-packages
title: Installer des packages Node.js
---
# Installer des packages Node.js

Une fois ton projet initialisé, tu peux ajouter des packages externes avec NPM.

---
## Installation de base

```bash
npm install nom-du-package
```

- **Exemple**
```bash
npm install express
```
<i>Cela crée un dossier **node_modules** et ajoute l'entrée dans `package.json`.</i>

## Installer en tant que dépendance de développement
```bash
npm install nodemon --save-dev
```
<i>Ces packages sont utilisés uniquement pendant le développement.</i>

## Supprimer un package
```bash 
npm uninstall nom-du-package
```
## Vérifier les packages installés
```bash
npm list
```


