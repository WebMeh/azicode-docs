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
        <Link to="/">Accueil</Link> | 
        <Link to="/about">À propos</Link> | 
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

