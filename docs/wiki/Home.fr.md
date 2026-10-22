# Nexus Adapter Optimization Studio — Accueil

## [Essayer dans le navigateur](<https://rdunbar01.github.io/Nexus-Adapter-Studio/Nexus_Adapter_Optimization_Studio_v2_7_Browser.html>) · activation en attente

Pages n’est pas encore activé ni vérifié pour cette version. Il s’agit de l’adresse HTTPS prévue, pas d’un essai actuellement en ligne. L’affichage du fichier HTML dans GitHub n’exécute pas l’application.

Après publication, ouvrez le lien et choisissez **Check WebGPU adapter**. L’objectif des dix premières secondes est d’examiner l’interface et les capacités du navigateur, pas de télécharger un modèle ni de garantir l’entraînement ou l’inférence. Le chargement dépend de la connexion et de l’appareil.

**L’essai HTML ne nécessite pas Python. Le moteur PyTorch natif exige le téléchargement complet.** Gardez l’installateur Python et toutes les parties de données de la même version ensemble. Python et PyTorch ne s’exécutent pas dans le HTML. La prise en charge de WebGPU, les fichiers locaux et les contrôles de compatibilité du modèle restent nécessaires.

## Versions de Python et environnement natif

- **Interpréteur conseillé : CPython 3.12 standard, 64 bits.** L’installateur annonce Python **3.11–3.14**, mais son programme de démarrage ne vérifie pas cette plage. L’ouverture avec une autre version ne prouve pas la compatibilité du moteur natif.
- **L’installation d’un nouvel environnement AMD exige CPython standard 64 bits 3.11–3.14, sans mode free-threaded**, sous Windows 11 **25H2**. Les environnements existants sont testés avant cette restriction d’installation et réutilisés uniquement si le test réussit ; leur Python doit correspondre aux paquets PyTorch installés. Aucune compatibilité plus large n’est certifiée ici.
- Le test natif attend **PyTorch 2.14.0+rocm10.1.0**, HIP et le périphérique RX 7900 XT/XTX configuré, puis vérifie un calcul FP32 avant/arrière avec des valeurs finies. Le paquet n’installe ni ne modifie Python, les pilotes AMD ou les prérequis du compilateur. Consultez la [matrice officielle AMD](https://rocm.docs.amd.com/en/latest/compatibility/compatibility-matrix.html).

Ces conditions ne constituent pas une validation sur matériel Windows, WebView2 ou Radeon réel, ni une qualification du modèle complet. Un test réussi ne valide pas toutes les précisions, compilations ou charges de travail.

**2.7.0 · Français**

Cette page est la source du wiki à relire pour la prochaine version. Elle ne signifie pas que le wiki public ou la version d’essai en ligne est déjà publié.

[English](Home.md) · [Français](Home.fr.md) · [日本語](Home.ja.md) · [한국어](Home.ko.md)

## Objectif

Entraînez des adaptateurs expérimentaux pour les modèles admis à partir de votre propre corpus, comparez-les au modèle de base figé et exportez les points de contrôle pris en charge. Aucun modèle de base n’est fourni. L’extension GGUF ne garantit pas la compatibilité.

## Choisir une édition

### Édition navigateur

[HTML](../../Nexus_Adapter_Optimization_Studio_v2_7_Browser.html) · [README](../../README.md)

Utilisez un navigateur compatible WebGPU en HTTPS ou sur une origine localhost sécurisée prise en charge. Le fichier HTML unique contient le moteur JavaScript/WGSL personnalisé. Importez des fichiers locaux compatibles. Python, PyTorch, les services natifs, le téléchargement de jeux de données en ligne et la télémétrie GPU native ne sont pas disponibles ; les requêtes réseau de l’application sont bloquées. L’affichage du code sur GitHub n’exécute pas l’application.

### Édition installée

Extrayez le ZIP complet et gardez l’installateur avec toutes ses parties de données. Chaque composant distribué doit faire moins de 20 000 000 octets ; les fichiers reconstruits et les modèles téléchargés peuvent être plus volumineux. Suivez le manifeste et le récapitulatif de l’installateur de cette version. Les réglages et tests PyTorch natifs concernent l’édition installée, pas l’édition HTML seule.

## Mesures et limites

Les tests CPU et les contrôles statiques/DOM ne valident pas l’exécution sur du matériel Windows/Radeon/WebGPU réel. Comparez uniquement des conditions équivalentes : modèle, corpus, contexte, lot, précision et moteur. Les débits d’entraînement, de récupération, de traitement des invites et de génération sont des mesures différentes. Aucune compatibilité universelle ni vitesse maximale n’est garantie.

## Crédits et licences

Rich Dunbar / Nexus Emerging Technology, avec l’aide d’outils de codage par IA. Les licences existantes et les conditions applicables aux recherches, au code, aux modèles et aux données tiers restent en vigueur. Cette page n’accorde aucune licence supplémentaire.

## Licence de la version actuelle

Cette version de Nexus n’est pas proposée sous la licence Apache 2.0. Le logiciel appartenant à Nexus ne peut être utilisé qu’à des fins personnelles et non commerciales. Toute autre utilisation, y compris commerciale, ainsi que toute modification ou redistribution, nécessite le consentement écrit exprès du titulaire des droits. Les codes, modèles, jeux de données tiers et composants sous licence distincte conservent leurs propres licences et mentions. Les droits déjà accordés et les droits qui ne peuvent légalement être restreints restent inchangés.
