# Frontend du Projet Manzer

## Introduction
Le frontend de Manzer est une application web développée avec ReactJS, utilisant des outils modernes tels que Bun, ViteJS, et Tailwind pour une expérience utilisateur rapide et réactive. L'application intègre également RadixUI pour des composants d'interface utilisateur riches et accessibles.

## Caractéristiques
- **ReactJS**: Pour la construction de l'interface utilisateur.
- **Bun & ViteJS**: Pour le développement rapide et le bundling efficace.
- **Tailwind**: Pour le design responsive et personnalisable.
- **RadixUI**: Pour des composants d'interface utilisateur complexes et accessibles.
- **Redux Toolkit & React Redux**: Pour la gestion d'état globale.

## Installation
1. Assurez-vous d'avoir Node.js installé.
2. Clonez le dépôt du projet.
3. Exécutez `npm install` ou `yarn install` pour installer les dépendances.

## Démarrage du projet
- Utilisez la commande `npm run dev` ou `yarn dev` pour démarrer le serveur de développement.
- Accédez à `http://localhost:3000` pour voir l'application en action.

## Structure des Routes
L'application comprend les routes suivantes :
- `/` : Affiche tous les repas disponibles.
- `/politique` : Page de politique du site.
- `/profile` : Page de profil utilisateur (accessible uniquement aux utilisateurs connectés).
- `/meals` : Liste des repas de l'utilisateur (nécessite une authentification).
- `/meals/create` : Formulaire pour créer un nouveau repas (nécessite une authentification).
- `/meals/:id` : Formulaire pour éditer un repas existant (nécessite une authentification).
- `/reset-password/*` : Page pour réinitialiser ou mettre à jour le mot de passe.

## Dépendances
- React et React DOM pour la base de l'application.
- Plusieurs composants Radix UI pour divers éléments d'interface utilisateur.
- Autres dépendances listées dans `package.json`.

## Contribution
Les contributions sont les bienvenues. Veuillez suivre les conventions de codage standard de React et de JavaScript/TypeScript, et soumettre des pull requests pour toute modification ou amélioration proposée.

## Licence
Ce projet est la propriété exclusive de son auteur et ne peut être réutilisé, copié, modifié ou distribué sans autorisation préalable. Tous les droits sont réservés.

## Contact
Pour toute question ou assistance, veuillez contacter l'équipe de développement [Manzer](formation.etienne.re@gmail.com).
