---
id: react-axios
title: API avec Axios
---

# Axios
Axios est une bibliothèque JavaScript qui permet de faire des **requêtes HTTP** pour interagir avec des API REST (GET, POST, PUT, DELETE, etc.). 

## Installation
```bash
npm install axios
```

## Importation
```jsx
import axios from 'axios';
```

# Requêtes avec Axios
## GET
```jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function PostList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('api_url')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des utilisateurs:', error);
      });
  }, []);

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## POST
### Exemple : formulaire d’ajout d’utilisateur
```jsx
import { useState } from 'react';
import axios from 'axios';

function AddUserForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('api_url/users', 
      {name, age}
        );
      alert('Utilisateur ajouté : ' + res.data.name);
    } catch (error) {
      console.error('Erreur POST:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>Name : </label>
      <input 
        type="text"
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Nom"
      />

    <label>Age : </label>
      <input 
        type="number"
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
        placeholder="Age"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}
```
