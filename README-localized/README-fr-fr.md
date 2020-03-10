---
page_type: sample
products:
- office-outlook
- office-365
languages:
- javascript
extensions:
  contentType: samples
  technologies:
  - Add-ins
  createdDate: 8/3/2015 12:17:12 PM
  scenarios:
  - Mobile
---
# Contacts-API-Mobile-App-with-Cordova-and-Ionic
Ce référentiel contient une application mobile simple créée à l’aide de Cordova, AngularJS et du framework Ionic pour afficher des contacts à partir d’Office 365.
## Configuration de l'environnement ##
La solution a été créée dans Visual Studio 2015 dans lequel les outils Visual Studio pour Apache Cordova sont installés. Ces outils étaient installés séparément dans Visual Studio 2013, mais ils constituent une option d'installation dans Visual Studio 2015. Le modèle Cordova dans Visual Studio 2015 a changé pour s’aligner sur une structure de projet plus largement adoptée dans les applications Cordova (source sous dossier www). De ce fait, ce projet doit être refactorisé pour être rétrocompatible avec Visual Studio 2013.

Les applications Office 365 sont sécurisées par Azure Active Directory, lequel fait partie d’un abonnement Office 365. Si vous ne disposez pas d’un abonnement Office 365 ou si vous ne l'avez pas associé à Azure AD, suivez les étapes pour [Configurer votre environnement de développement Office 365](https://msdn.microsoft.com/office/office365/HowTo/setup-development-environment "Configurer votre environnement de développement Office 365") à partir de MSDN.

## Inscription de l’application ##
Lorsque vous ouvrez la solution dans Visual Studio 2015, l’application doit être inscrite pour votre client. Cliquez simplement sur le projet avec le bouton droit, puis sélectionnez **Ajouter** > **Service connecté**. Utilisez l’Assistant service connecté pour enregistrer l’application auprès d’Azure AD et des autorisations de lecture/écriture de contacts.
## Exécution de l’application ##
Les outils pour Apache Cordova vous permettent d’exécuter plusieurs plateformes d’application et appareils/émulateurs. Sélectionnez tout d’abord la plateforme (par ex. : Android), puis l’appareil/l’émulateur de votre choix. Le débogage vers iOS nécessite un Mac pour se connecter à distance à l’aide de [vs-mda-remote](https://www.npmjs.com/package/vs-mda-remote "vs-mda-remote").

> L’ondulation est un émulateur intégré au navigateur (Chrome) qui peut être utilisé pour tester cette application. Le processus d’authentification web avec l'ondulation peut être un peu délicat. Actualisez le navigateur si vous rencontrez un problème. Si cela échoue, activez ou désactivez les paramètres proxy dans le menu supérieur droit de l’ondulation.

![Contacts Cordova avec Ionic](http://i.imgur.com/qOF7y0w.png)



Ce projet a adopté le [Code de conduite Open Source de Microsoft](https://opensource.microsoft.com/codeofconduct/). Pour en savoir plus, reportez-vous à la [FAQ relative au code de conduite](https://opensource.microsoft.com/codeofconduct/faq/) ou contactez [opencode@microsoft.com](mailto:opencode@microsoft.com) pour toute question ou tout commentaire.
