# L'Escape Game Odyssée

Ramener Ulysse à Ithaque !

## Pour commencer

Bienvenu dans L'Escape Game Odyssée ! Suivez attentivement les instructions d'installation ci-dessus.

### Pré-requis

Plusieurs éléments sont nécessaires au fonctionnement du jeu

- Avoir installé un serveur web local ([MAMP](https://www.mamp.info/en/downloads/) ou [Wamp](https://www.wampserver.com/)), et l'avoir lancé
- Avoir installé un navigateur web (Chrome ou Firefox)
- Le jeu nécessite une connexion internet pour l'affichage de la carte 

### Installation

Voici les différentes étapes de l'installation du programme :

- Placer le dossier EscapeGame à la racine de votre répertoire localhost (pour MAMP, vérifier l'adresse dans les préférences, pour Wamp, placer le fichier dans ``C:\wamp64\www``)
- Dans votre navigateur internet entrer ``localhost/phpMyAdmin``. Si vous n'avez pas changé la configuration, l'user est root, et il n'y pas de mot de passe. 
- Cliquer sur nouvelle base de donnée, appeler la odyssee.
- Cliquer sur importer, puis choisir le fichier BD.sql présent dans le répertoire. Choisir utf-8.
- ATTENTION Si vous avez changé la configuration de phpMyAdmin, entrez vos identifiants habituels, mais cela nécessite la modification du code du jeu suivante :\
Ouvrir le fichier **objet.php** (``EscapeGame\php\connect.php``) à l'aide d'un éditeur de texte, et modifier dans la 2ème ligne root par votre username, et entrer votre mot-de-passe dans les '' vide.\
_$link = mysqli_connect('localhost', '**votre user**', '**votre mdp**', 'odyssee');_

- Le jeu est prêt à être lancé !

## Démarrage

Pour lancer le jeu, taper dans votre navigateur ``localhost/EscapeGame``. Une fois sur la page d'accueil, cliquer simplement sur jouer. Bon jeu !

## Fabriqué avec

Les logiciels et ressource suivantes ont été utilisés pour le développement du projet

* [Visual Studio Code](https://visualstudio.microsoft.com/fr/) - Editeur de code
* [MAMP](https://www.mamp.info/en/downloads/) - Serveur Web local
* [Wamp](https://www.wampserver.com/) - Serveur Web local
* [StackOverflow](https://stackoverflow.com/) - Aide pour le développement 

## Versions

Version finale 

## Auteurs

* **Vincent Heau** [VincentHeau](https://github.com/VincentHeau)
* **Lubin Roineau** [lroineau](https://github.com/lroineau)
