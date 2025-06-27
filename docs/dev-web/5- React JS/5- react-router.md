---
id: react-router
title: React Router
---

# React Router 

##  Qu'est-ce que React Router ?

**React Router** est une bibliothèque permettant de gérer la navigation (ou le "routing") dans une application **React** mono-page (SPA). Il permet de définir différentes pages virtuelles sans recharger la page entière.

##  Pourquoi utiliser React Router ?

- Créer des applications avec plusieurs "vues" ou "pages"
- Gérer les URL dynamiques
- Afficher des composants spécifiques selon le chemin (`/about`, `/contact`, etc.)
- Naviguer sans recharger la page

---

##  Installation

```bash
npm install react-router-dom
```

## Composants principaux
### BrowserRouter 
Le composant racine qui permet d'utiliser le routing. Il doit envelopper tout votre app.

Dans le fichier  `main.jsx` : 
```jsx
<BrowserRouter>
      <App />
</BrowserRouter>
```
### Routes
Contient tous les composants Route.
```jsx
<Routes>
    <Route />
    <Route />
    <Route />
</Routes>
```
### Route
Associe un chemin `path` à un composant à afficher `element`.
```jsx
<Route path="/home" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
```

### Link 
Permet de naviguer entre les routes sans recharger la page.
```jsx
<Link to="/contact">Contact</Link>
```

## Exemple complet
```jsx
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link> 
        <Link to="/about">À propos</Link> 
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

```

##  Routes dynamiques
Une route dynamique est une route dont une partie du chemin (URL) est variable. <br />
<strong> Exemple </strong> <br />

- /user/1
- /user/2
- /produit/chaussure

On utilise un paramètre dynamique dans la définition de la route comme ceci :
```jsx
<Route path="/user/:id" element={<User />} />
```
:::info Information
`:id` est une variable qu’on pourra récupérer dans le composant `User`.
:::

###  Récupérer useParams() 
```jsx
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();

  return (
    <div>
      <h1>Profil de l'utilisateur {id}</h1>
    </div>
  );
}
```

:::info Information
`useParams()` est un hook de react-router-dom qui retourne un objet avec tous les paramètres de l'`URL`.
:::

## Plusieurs paramètres 
```jsx
<Route path="/produit/:categorie/:id" element={<Produit />} />
```

Pour récupérer :
```jsx
const { categorie, id } = useParams();
```

## Paramètre de requête
Un paramètre de requête se présente comme :
```jsx
/products?title=tshirt
```
###  Récupérer avec useSearchParams()
```jsx
import { useSearchParams } from "react-router-dom";

function Produits() {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");

  return (
    <div>
      <h2>Produits</h2>
      <p>Titre du produit : {title}</p>
    </div>
  );
}
```
