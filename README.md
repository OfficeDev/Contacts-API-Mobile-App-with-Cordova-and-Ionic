---
topic: sample
products:
- Outlook
- Office 365
languages:
- JavaScript
extensions:
  contentType: samples
  technologies:
  - Add-ins
  createdDate: 8/3/2015 12:17:12 PM
  scenarios:
  - Mobile
---
# Contacts-API-Mobile-App-with-Cordova-and-Ionic
This repository contains a simple mobile application built using  Cordova, AngularJS, and the Ionic Framework to display contacts from Office 365.
## Environment Setup ##
The solution was built in Visual Studio 2015 with the Visual Studio tools for Apache Cordova installed. These tools were a separate install in Visual Studio 2013, but are an option install in Visual Studio 2015. The Cordova template in Visual Studio 2015 has changed to align with a more widely adopted project structure for Cordova apps (source under www folder). As such, this project will need to be re-factored to be backward compatible with Visual Studio 2013.

Office 365 applications are secured by Azure Active Directory, which comes as part of an Office 365 subscription. If you do not have an Office 365 Subscription or associated it with Azure AD, then you should follow the steps to [Set up your Office 365 development environment](https://msdn.microsoft.com/office/office365/HowTo/setup-development-environment "Set up your Office 365 development environment") from MSDN.

## Registering the App ##
When you open the solution in Visual Studio 2015, the application will need to be registered for your tenant. Simply right-click the project and select **Add** > **Connected Service**. Use the connected service wizard to register the application with Azure AD with permissions to read/write contacts.
## Running the Application ##
The tools for Apache Cordova will allow you to run the application different platforms and devices/emulators. First select the platform (ex: Android) and then the device/emulator of your choice. Debugging to iOS requires a Mac to remote connect to using [vs-mda-remote](https://www.npmjs.com/package/vs-mda-remote "vs-mda-remote").

> Ripple is an in-browser (Chrome) emulator that can be used to test this application. The web authentication process with Ripple can be a little tricky. If you run into problem, refresh the browser. If that doesn't work, toggle the proxy settings in the top right menu of Ripple.

![Cordova Contacts with Ionic](http://i.imgur.com/qOF7y0w.png)



This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information, see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
