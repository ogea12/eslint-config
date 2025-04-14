<div align="center">
  <img src="https://github.com/user-attachments/assets/b11acec7-07f1-4c72-8eac-6a88d7e52c5e" />
</div>

<div align="center">

![Version](https://img.shields.io/npm/v/@ogea12/eslint-config?style=for-the-badge&colorA=4c566a&colorB=5382a1&logo=npm&logoColor=white)
![Code Size](https://img.shields.io/github/languages/code-size/ogea12/eslint-config?style=for-the-badge&colorA=4c566a&colorB=ebcb8b&logo=github&logoColor=white)
![License](https://img.shields.io/github/license/ogea12/eslint-config?style=for-the-badge&colorA=4c566a&colorB=a3be8c)

</div>

`@ogea12/eslint-config` est un package permettant de bénéficier de la configuration [ESLint](https://eslint.org) utilisée dans les projets de l'OGEA 12. Cette configuration est compatible avec la version d'ESLint 9.x, elle utilise notamment le format de fichier _flat config_.

## Premiers pas

### Installation

Pour utiliser le package, vous devez d'abord l'intégrer dans votre projet.

```shell
npm install -D @ogea12/eslint-config

# Assurez-vous également d'installer le package suivant
npm install -D eslint
```

### Utilisation

Une fois l'installation terminée, vous pouvez ajouter le fichier `eslint.config.js` dans votre projet. Ce-dernier doit contenir l'initialisation de la configuration, comme ci-dessous.

```js
// eslint.config.js

import { configure } from '@ogea12/eslint-config'

export default configure()
```

La configuration peut être étendue avec vos propres règles, vos propres plugins, ...

```js
// eslint.config.js

import { configure } from '@ogea12/eslint-config'

export default configure({
  name: "Ma config' personnalisée",
  rules: {
    // Désactive la règle suivante
    'jsdoc/require-description-complete-sentence': 'off',

    // Active la règle suivante
    'jsdoc/check-types': 'warn',
  },
})
```

Une liste par défaut de fichiers est exclue de la configuration, il n'est donc pas nécessaire de fournir un fichier `.eslintignore`. Cependant, si certains fichiers ne figurent pas dans cette liste, il peut être interessant de les ajouter dans un fichier `.eslintignore`.

Vous pouvez également ajouter deux scripts pour utiliser l'analyseur ESLint dans le fichier `package.json`. Après avoir ajouté les scripts, vous pouvez exécuter les commandes `npm run lint` et `npm run lint:fix` afin d'analyser les fichiers du projet.

```jsonc
// package.json

{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
  },
}
```
