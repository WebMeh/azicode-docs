---
id: formulaires-html
title: Les Formulaires en HTML
sidebar_label: Formulaires HTML
description: Apprenez à créer des formulaires HTML avec des exemples pratiques.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

#  Les Formulaires en HTML



##  Définition

Un formulaire HTML permet à un utilisateur **d’envoyer des données** à un serveur ou un script.

```html
<form   >
  <!-- éléments ici -->
</form>
```
## Éléments courants des formulaires


### Champ de texte
```html
<label>Nom : </label>
<input type="text" name="nom" placeholder="Entrez votre nom" />
```
<br /><label>Nom : </label><input type="text" name="nom" placeholder="Entrez votre nom" />

### Mot de passe
```html
<label>Mot de passe : </label>
<input type="password" name="password" placeholder="Entrez votre mot de passe" />
```
<label>Mot de passe : </label>
<input type="password" name="password" placeholder="Entrez votre mot de passe" />

### Email
```html
<label>Email: </label>
<input type="email" name="emil" placeholder="Entrez votre mot  email" />
```
<label>Email: </label>
<input type="email" name="emil" placeholder="Entrez votre mot  email" />


### Zone de texte (textarea)
```html
<label>Message: </label>
<textarea name="message" rows="4" cols="30" placeholder="Votre message ici..."></textarea>
```
<label>Message: </label>
<textarea name="message" rows="4" cols="30" placeholder="Votre message ici..."></textarea>

### Case à cocher
```html
<label><input type="checkbox" name="interets" value="sport" /> Sport</label>
<label><input type="checkbox" name="interets" value="musique" /> Musique</label>
```
<label><input type="checkbox" name="interets" value="sport" /> Sport</label>
<label><input type="checkbox" name="interets" value="musique" /> Musique</label>

### Boutons radio
```html
<label><input type="radio" name="genre" value="homme" /> Homme</label>
<label><input type="radio" name="genre" value="femme" /> Femme</label>
```
<label><input type="radio" name="genre" value="homme" /> Homme</label>
<label><input type="radio" name="genre" value="femme" /> Femme</label>

### Liste déroulante
```html
<label>Ville :
  <select name="ville">
    <option value="azilal">Azilal</option>
    <option value="demnate">Demnate</option>
    <option value="afourar">Afourar</option>
  </select>
</label>
```
<label>Ville : </label>
  <select name="ville">
    <option value="azilal">Azilal</option>
    <option value="demnate">Demnate</option>
    <option value="afourar">Afourar</option>
  </select>

### Bouton envoyer
```html
<button type="submit">Envoyer</button>
```
<button type="submit">Envoyer</button>

## Exemple complet
```html
<form >
  <h2>Formulaire de contact</h2>
  
  <label>Nom :
    <input type="text" name="nom" required />
  </label><br/><br/>

  <label>Email :
    <input type="email" name="email" required />
  </label><br/><br/>

  <label>Message :<br/>
    <textarea name="message" rows="5" cols="40"></textarea>
  </label><br/><br/>

  <label>
    <input type="checkbox" name="newsletter" /> Recevoir la newsletter
  </label><br/><br/>

  <button type="submit" >Envoyer</button>
</form>

```
<form >
  <h2>Formulaire de contact</h2>
  <label>Nom :</label>
    <input type="text" name="nom" required />
  <br/><br/>

  <label>Email : </label>
    <input type="email" name="email" required />
  <br/><br/>

  <label>Message :</label><br/>
    <textarea name="message" rows="5" cols="40"></textarea>
  <br/><br/>
<input type="checkbox" name="newsletter" /> Recevoir la newsletter 
 

  <button type="submit" >Envoyer</button>
</form>