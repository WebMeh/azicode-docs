---
id: multer-config
title: Configuration de Multer 
sidebar_label: Upload images avec Multer
---

##  Objectif

Configurer Multer dans un projet Node.js pour permettre l'upload sécurisé d'images via un formulaire HTML ou une API REST.

---

##  Installation

```bash
npm install multer
```

## Structure recommandée
```bash
project/
├── uploads/              # Dossier pour stocker les images uploadées
├── data/                 # Dossier pour les données json
├── public/
│   └── index.html         # Fichier html de base
├── server.js             # Fichier principal
```

## Configuration de Multer
```js
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});



const upload = multer({ 
    storage: storage 
    limits: { fileSize: 2 * 1024 * 1024 }, // Limite: 2MB
 });
```
## Intégration dans le serveur
```js

const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const app = express();

// Middleware pour accepter les requêtes JSON 
app.use(express.json());
app.use(cors());
const PORT =  3000;

// Définir le stockage des fichiers
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  },
});

// Configurer Multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // Limite: 2MB
});

// Servir les fichiers statiques uploadés
app.use('/uploads', express.static('uploads'));

// Ajouter (POST)
app.post('/cars', upload.single('image'), (req, res) => {
  const { imm, brand, serie } = req.body;
  const image = req.file;

  const newCar = {
    id: Date.now().toString(),
    imm,
    brand,
    serie,
    image
  };

  cars.push(newCar);
  res.status(201).json(newCar);
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(` Serveur démarré sur http://localhost:${PORT}`);
});

```
## La partie client 
### Le formulaire html
```html 
<form id="carForm" enctype="multipart/form-data">
    <div class="mb-3">
      <label for="imm" class="form-label">Immatriculation</label>
      <input type="text" class="form-control" id="imm" name="imm" required>
    </div>
    <div class="mb-3">
      <label for="brand" class="form-label">Marque</label>
      <input type="text" class="form-control" id="brand" name="brand" required>
    </div>
    <div class="mb-3">
      <label for="serie" class="form-label">Série</label>
      <input type="text" class="form-control" id="serie" name="serie" required>
    </div>
    <div class="mb-3">
      <label for="image" class="form-label">Image</label>
      <input type="file" class="form-control" id="image" name="image" accept="image/*" required>
    </div>
    <button type="submit" class="btn btn-primary">Ajouter</button>
</form>
```
### Poster les dnnées avec js Fetch
```js 
const carForm = document.getElementById('carForm')
carForm.addEventListener('submit',  function(e) {
    e.preventDefault();
    const formData = new FormData(carForm);

    fetch('http://localhost:9000/cars', {
    method: 'POST',
    body: formData
    })
    .then(res => res.json())
    .then(data => {
    console.log(data)
    alert("Voiture ajoutée avec succès !")
    form.reset();
    })
    .catch(() => alert("Echec !"))
})
  
```