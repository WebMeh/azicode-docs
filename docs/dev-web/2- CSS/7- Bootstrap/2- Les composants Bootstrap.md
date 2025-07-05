---
id: bootstrap-components
title: Les composants de Bootstrap
---
# Les Composants Bootstrap les plus intéressants

## 1. Boutons
```html
<button class="btn btn-primary">Se connecter</button>
<button class="btn btn-outline-danger">Créer un compte</button>
```

## 2. Alertes
```html
<div class="alert alert-success" role="alert">
  Opération réussie !
</div>
```
## 3. Navbar (Menu de navigation)
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Azicode62</a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="menu">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"><a class="nav-link active" href="#">Accueil</a></li>
        <li class="nav-item"><a class="nav-link" href="#">À propos</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      </ul>
    </div>
  </div>
</nav>
```

## 4. Cartes (Cards)
```html
<div class="card" style="width: 18rem;">
  <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Titre</h5>
    <p class="card-text">Description courte ici.</p>
    <a href="#" class="btn btn-primary">En savoir plus</a>
  </div>
</div>
```

## 5. Modale (fenêtre popup)
```html
<!-- Bouton -->
<button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#monModal">
  Ouvrir la modale
</button>

<!-- Modale -->
<div class="modal fade" id="monModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Titre de la modale</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        Contenu de la modale.
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>
``` 

## 6. Carousel (diaporama)
```html
<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://via.placeholder.com/800x300" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://via.placeholder.com/800x300?text=Deuxième" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
``` 
## Atelier pratique
- Crée une page portfolio personnelle avec les composants suivants :
  1. Navbar avec liens vers différentes sections.
  2.  Une section avec une carte pour se présenter.
  3. Une galerie d’images avec un carousel.
  4. Un bouton qui ouvre une modale contenant un formulaire de contact.