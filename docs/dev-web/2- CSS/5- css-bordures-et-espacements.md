---
id: css-bordures-et-espacements
title: Bordures et espacements
sidebar_label: Bordures & Espacements
---

#  Bordures, marges et espacements

En CSS, on utilise des **boîtes** autour des éléments HTML. Chaque boîte peut avoir :

- du **contenu**
- un **padding** (espacement intérieur)
- une **border** (bordure)
- une **margin** (marge extérieure)

---

##  Dimensions de boîte

```css
div {
  width: 300px;
  height: 150px;
}
```

## Bordures
```css
border: 2px solid blue;
```

<div style={{border: "2px solid blue", width: 100}}>
  Azicode62
</div>

## Marges et padding
![Texte alternatif](/img/css-box-model.png)
### Marges (espace extérieur)
```css
p {
  margin: 20px;
}
```
- `margin-top: 10px; ` 
<div style={{backgroundColor: "gray"}}>
  <button style={{border: "4px solid red", width: 100, marginTop: "20px"}}>
    Azicode62
  </button>
</div>
- `margin-right: 15px;`
<div style={{backgroundColor: "gray"}}>
  <button style={{border: "4px solid red", width: 100, marginRight: "20px"}}>
    Azicode62
  </button>
</div>
- `margin-bottom: 20px;`
<div style={{backgroundColor: "gray"}}>
  <button style={{border: "4px solid red", width: 100, marginBottom: "20px"}}>
    Azicode62
  </button>
</div>
- `margin-left: 5px;`
<div style={{backgroundColor: "gray"}}>
  <button style={{border: "4px solid red", width: 100, marginLeft: "20px"}}>
    Azicode62
  </button>
</div>

### Padding (espace intérieur)
```css
p {
  padding: 10px;
}
```

- `padding-top: 10px; ` 
<div style={{backgroundColor: "gray"}}>
  <button style={{border: "4px solid red", width: 100, paddingTop: "20px"}}>
    Azicode62
  </button>
</div>
- `padding-right: 15px;`
<div style={{backgroundColor: "gray"}}>
  <button style={{border: "4px solid red", width: 110, paddingRight: "30px"}}>
    Azicode62
  </button>
</div>
- `padding-bottom: 20px;`
<div style={{backgroundColor: "gray"}}>
  <button style={{border: "4px solid red", width: 100, paddingBottom: "20px"}}>
    Azicode62
  </button>
</div>
- `padding-left: 5px;`
<div style={{backgroundColor: "gray"}}>
  <button style={{border: "4px solid red", width: 110, paddingLeft: "30px"}}>
    Azicode62
  </button>
</div>


