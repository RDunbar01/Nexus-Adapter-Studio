# Nexus Adapter Optimization Studio

**Version 2.7.0**

Entraîner et évaluer des adaptateurs expérimentaux pour les modèles de langage locaux pris en charge, avec votre propre corpus.

**[Essayer dans le navigateur](https://rdunbar01.github.io/Nexus-Adapter-Studio/Nexus_Adapter_Optimization_Studio_v2_7_Browser.html)** · [Télécharger les composants de bureau](https://github.com/RDunbar01/Nexus-Adapter-Studio/tree/main/releases/2.7.0) · [README](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/README.md)

Ouvrez la version d’essai pour examiner l’interface et choisissez **Check WebGPU adapter**. Aucune installation de Python n’est nécessaire. L’objectif est un premier aperçu rapide ; le chargement d’un modèle et l’exécution d’une tâche dépendent des données et de l’appareil.

Paquet natif 2.7.0 ; édition navigateur 2.7.

## Fonctionnalités

- Entrées locales de modèles et de corpus pour les parcours d’entraînement d’adaptateurs admis.
- Commandes d’entraînement et d’évaluation dans une interface navigateur.
- Vérification de l’architecture, du tokenizer, du format des tenseurs et de la mémoire avant les opérations prises en charge.
- Essais WebGPU personnalisés et backend PyTorch natif installé séparément.

## Contribution technique

Une interface locale ciblée pour tester l’adaptation d’un modèle et en évaluer le résultat. Séparer l’admission du modèle de l’entraînement permet de signaler les entrées non prises en charge, plutôt que de considérer tout fichier GGUF comme compatible.

## Pourquoi un seul fichier HTML ?

L’édition navigateur réunit l’interface, JavaScript, CSS et les noyaux WGSL dans un seul fichier HTML. Ce choix facilite les essais en ligne, le partage du lien et l’inspection, sans compilation ni CDN à l’exécution. Le fichier contient le moteur navigateur, pas les poids des modèles ni le backend PyTorch natif.

Utilisez un navigateur compatible WebGPU en HTTPS. Les requêtes réseau à l’exécution, la surveillance matérielle native et les passerelles vers un serveur local sont désactivées. L’entraînement ou l’évaluation exige des entrées prises en charge. Le backend PyTorch natif nécessite le téléchargement complet.

[English](https://github.com/RDunbar01/Nexus-Adapter-Studio/wiki/Home) · [Français](https://github.com/RDunbar01/Nexus-Adapter-Studio/wiki/Home.fr) · [日本語](https://github.com/RDunbar01/Nexus-Adapter-Studio/wiki/Home.ja) · [한국어](https://github.com/RDunbar01/Nexus-Adapter-Studio/wiki/Home.ko)

## Versions de Python et environnement natif

- **Interpréteur conseillé : CPython 3.12 standard, 64 bits.** L’installateur annonce Python **3.11–3.14**, mais son programme de démarrage ne vérifie pas cette plage. L’ouverture avec une autre version ne prouve pas la compatibilité du moteur natif.
- **L’installation d’un nouvel environnement AMD exige CPython standard 64 bits 3.11–3.14, sans mode free-threaded**, sous Windows 11 **25H2**. Les environnements existants sont testés avant cette restriction d’installation et réutilisés uniquement si le test réussit ; leur Python doit correspondre aux paquets PyTorch installés. Aucune compatibilité plus large n’est certifiée ici.
- Le test natif attend **PyTorch 2.14.0+rocm10.1.0**, HIP et le périphérique RX 7900 XT/XTX configuré, puis vérifie un calcul FP32 avant/arrière avec des valeurs finies. Le paquet n’installe ni ne modifie Python, les pilotes AMD ou les prérequis du compilateur. Consultez la [matrice officielle AMD](https://rocm.docs.amd.com/en/latest/compatibility/compatibility-matrix.html).

Ces conditions ne constituent pas une validation sur matériel Windows, WebView2 ou Radeon réel, ni une qualification du modèle complet. Un test réussi ne valide pas toutes les précisions, compilations ou charges de travail.


## Objectif

Entraînez des adaptateurs expérimentaux pour les modèles admis à partir de votre propre corpus, comparez-les au modèle de base figé et exportez les points de contrôle pris en charge. Aucun modèle de base n’est fourni. L’extension GGUF ne garantit pas la compatibilité.

## Choisir une édition

### Édition navigateur

[HTML](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/Nexus_Adapter_Optimization_Studio_v2_7_Browser.html) · [README](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/README.md)

Utilisez un navigateur compatible WebGPU en HTTPS ou sur une origine localhost sécurisée prise en charge. Le fichier HTML unique contient le moteur JavaScript/WGSL personnalisé. Importez des fichiers locaux compatibles. Python, PyTorch, les services natifs, le téléchargement de jeux de données en ligne et la télémétrie GPU native ne sont pas disponibles ; les requêtes réseau de l’application sont bloquées. L’affichage du code sur GitHub n’exécute pas l’application.

### Édition installée

Téléchargez ensemble tous les fichiers du [paquet 2.7.0](https://github.com/RDunbar01/Nexus-Adapter-Studio/tree/main/releases/2.7.0), en conservant leur disposition. Gardez toutes les parties de données `.nxd` numérotées à côté de [Start_Nexus.py](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/releases/2.7.0/Start_Nexus.py), puis lancez `python Start_Nexus.py` avec l’interpréteur compatible. Lisez le [guide correspondant](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/releases/2.7.0/README.md) et le récapitulatif avant de confirmer. Chaque partie `.nxd` fait au plus **10 000 000 octets** ; chaque fichier distribué, avant installation, fait moins de **20 000 000 octets**. L’archive complète, l’application reconstruite, les fichiers installés et les modèles téléchargés peuvent être plus volumineux. Ne mélangez pas les versions. Les réglages et tests PyTorch natifs concernent l’édition installée, pas l’essai HTML seul.

## Mesures et limites

Les tests CPU et les contrôles statiques/DOM ne valident pas l’exécution sur du matériel Windows/Radeon/WebGPU réel. Comparez uniquement des conditions équivalentes : modèle, corpus, contexte, lot, précision et moteur. Les débits d’entraînement, de récupération, de traitement des invites et de génération sont des mesures différentes. Aucune compatibilité universelle ni vitesse maximale n’est garantie.

## Utilisation et attribution

Rich Dunbar / Nexus Emerging Technology. L’usage personnel ainsi que les tests et évaluations commerciaux internes sont autorisés pour les éléments appartenant à Nexus. La distribution, la modification, le déploiement en production et les autres usages commerciaux nécessitent un consentement écrit exprès. Les licences tierces et les droits déjà accordés restent inchangés. [licence](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/LICENSE) · [autorisation d’évaluation (en anglais)](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/COMMERCIAL_EVALUATION_PERMISSION.md).
