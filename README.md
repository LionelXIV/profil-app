# Profil App - Communication Parent → Enfant en React

Application React démonstrant la communication entre composants parent et enfant.

## 📋 Description

Cette application illustre les concepts fondamentaux de React :
- **Gestion d'état** avec `useState`
- **Communication Parent → Enfant** via les props
- **Modification de l'état parent** depuis le composant enfant

## 🎯 Fonctionnalités

- Composant **Parent** (`ProfilParent`) qui gère l'état `age`
- Composant **Enfant** (`ProfilEnfant`) qui reçoit les props et peut modifier l'état du parent
- Boutons pour augmenter/diminuer l'âge depuis le parent ou l'enfant
- Affichage en temps réel de l'âge mis à jour

## 🏗️ Structure du projet

```
profil-app/
├── src/
│   ├── App.js              # Composant racine
│   ├── ProfilParent.jsx    # Composant parent (gère l'état)
│   ├── ProfilEnfant.jsx    # Composant enfant (reçoit les props)
│   ├── index.js            # Point d'entrée
│   └── index.css           # Styles globaux
├── public/                 # Fichiers statiques
└── package.json           # Dépendances
```

## 🚀 Installation et démarrage

### Prérequis
- Node.js installé
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install
```

### Démarrage

```bash
# Lancer l'application en mode développement
npm start
```

L'application s'ouvrira automatiquement sur [http://localhost:3000](http://localhost:3000)

## 📚 Concepts React démontrés

### 1. Gestion d'état avec useState

```jsx
const [age, setAge] = useState(18);
```

### 2. Passage de props du parent à l'enfant

```jsx
<ProfilEnfant nom="Lionel" age={age} onAgeUp={augmenterAge} />
```

### 3. Modification de l'état parent depuis l'enfant

```jsx
// Dans l'enfant
<button onClick={onAgeUp}>Augmenter l'âge</button>
```

## 🎨 Composants

### ProfilParent
- Gère l'état `age` avec `useState(18)`
- Contient des fonctions `augmenterAge` et `diminuerAge`
- Passe les props au composant enfant

### ProfilEnfant
- Reçoit les props : `nom`, `age`, `onAgeUp`
- Affiche les informations du profil
- Peut modifier l'âge via le bouton qui appelle `onAgeUp`

## 🛠️ Technologies utilisées

- **React** 19.2.1
- **React DOM** 19.2.1
- **React Scripts** 5.0.1

## 📝 Scripts disponibles

- `npm start` - Lance l'application en mode développement
- `npm test` - Lance les tests
- `npm run build` - Crée une version de production
- `npm run eject` - Éjecte la configuration (irréversible)

## 🎓 Objectifs pédagogiques

Cette application sert d'exemple pour comprendre :
1. Comment gérer l'état dans React
2. Comment passer des données du parent à l'enfant
3. Comment permettre à l'enfant de modifier l'état du parent
4. Le flux de données unidirectionnel en React

## 👤 Auteur

Exercice réalisé dans le cadre du cours INF37407 - Technologie de l'inforoute
