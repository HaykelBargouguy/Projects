<h2>Table des Matières</h2>
<ul>
  <li><a href="#step1">Seeding des Données</a></li>
  <li><a href="#step2">CRUD pour Quiz et Questions</a></li>
  <li><a href="#step3">Fonction de Vérification des Réponses</a></li>
  <li><a href="#step4">Validation Complète d'un Quiz</a></li>
  <li><a href="#step5">Calcul du Score</a></li>
  <li><a href="#step6">Commits et Documentation</a></li>
</ul>

<h2 id="step1">Étape 1: Seeding des Données</h2>
<h3 >terminal : npm run seed</h3>

<p><strong>Objectif :</strong> Créer des jeux de données initiaux pour 4 domaines (Machine Learning, Sécurité, DevOps, Réseau) avec 40 questions.</p>
<p><strong>Actions :</strong></p>
<ul>
  <li>Préparation de fichiers JSON pour chaque domaine contenant 10 questions et réponses.</li>
  <li>Développement de scripts de seeding pour peupler la base de données avec ces questions.</li>
</ul>

<h2 id="step2">Étape 2: CRUD pour Quiz et Questions</h2>
<p><strong>Objectif :</strong> Permettre la gestion des quiz et des questions via des interfaces CRUD.</p>
<p><strong>Actions :</strong></p>
<ul>
  <li>Création de services et contrôleurs NestJS pour les entités Quiz et Question.</li>
  <li>Utilisation de TypeORM pour les opérations de base de données.</li>
</ul>

<h2 id="step3">Étape 3: Fonction de Vérification des Réponses</h2>
<p><strong>Objectif :</strong> Vérifier l'exactitude des réponses aux questions.</p>
<p><strong>Actions :</strong></p>
<ul>
  <li>Ajout d'une méthode de vérification dans <code>QuestionsService</code> pour comparer les réponses des utilisateurs avec les bonnes réponses.</li>
</ul>

<h2 id="step4">Étape 4: Validation Complète d'un Quiz</h2>
<p><strong>Objectif :</strong> Valider toutes les réponses d'un quiz en une seule opération.</p>
<p><strong>Actions :</strong></p>
<ul>
  <li>Création d'une API qui accepte les réponses du quiz et renvoie la validation pour chaque question.</li>
  <li>Test de l'API avec Postman.</li>
</ul>

<h2 id="step5">Étape 5: Calcul du Score</h2>
<p><strong>Objectif :</strong> Calculer le score total sur un quiz en pourcentage.</p>
<p><strong>Actions :</strong></p>
<ul>
  <li>Modification de la fonction de validation du quiz pour inclure un calcul de score basé sur le nombre de réponses correctes.</li>
  <li>Test de cette fonctionnalité avec Postman.</li>
</ul>


<h1>Test du  calcul de score du quiz : </h1>

![Screenshot (77)](https://github.com/Mohamedamine991/Nest-Project/assets/98351985/851b3036-78a8-4dc0-8141-51feafaaecd9)

<h1>Test de la validation d'un quiz</h1>  <br> Ici de coté front n en cliquant sur valider , on doit envoyer au serveur un json de ce type : <br>
{ <br>
  "answers": [ <br>
    { <br>
      "questionId": 1, <br>
      "userAnswer": 2 <br>
    }, <br>
    { <br>
      "questionId": 2, <br>
      "userAnswer": 3 <br>
    }, { <br>
      "questionId": 3, <br>
      "userAnswer": 3 <br>
    }, { <br>
      "questionId": 4, <br>
      "userAnswer": 3 <br>
    }, { <br>
      "questionId": 4, <br>
      "userAnswer": 3 <br>
    }, { <br>
      "questionId": 5, <br>
      "userAnswer": 3 <br>
    }, { <br>
      "questionId": 6, <br>
      "userAnswer": 3 <br>
    }, { <br>
      "questionId": 7, <br>
      "userAnswer": 3 <br>
    }, { <br>
      "questionId": 8, <br>
      "userAnswer": 3 <br>
    }, { <br>
      "questionId": 9, <br>
      "userAnswer": 3 <br>
    }, { <br>
      "questionId": 10, <br>
      "userAnswer": 3 <br>
    }] <br>
} <br>

![image](https://github.com/Mohamedamine991/Nest-Project/assets/98351985/aced3b28-327f-4049-ac05-de85ce3e6c21)
<h1>Seeding le  BD avec 40 questions 10 pour chaque domaine : </h1>

![Screenshot (79)](https://github.com/Mohamedamine991/Nest-Project/assets/98351985/b95e45cb-d3a1-4850-915c-03058d8386b5)
![Screenshot (78)](https://github.com/Mohamedamine991/Nest-Project/assets/98351985/4ae0eefa-e00e-4858-8a58-106aaa5592ef)



<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
