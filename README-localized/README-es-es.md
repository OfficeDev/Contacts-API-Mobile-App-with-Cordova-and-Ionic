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
Este repositorio contiene una sencilla aplicación móvil creada con Cordova, AngularJS y el marco de Ionic para mostrar contactos de Office 365.
## Configuración del entorno ##
La solución se ha generado en Visual Studio 2015 con Visual Studio Tools para Apache Cordova instalado. Estas herramientas eran una instalación independiente en Visual Studio 2013, pero son una opción que se instalación en Visual Studio 2015. La plantilla de Cordova en Visual Studio 2015 ha cambiado para alinearse con la estructura de Project más extendida para las aplicaciones de Cordova (fuente en la carpeta www). De este modo, se tendrá que refactorizar este proyecto para que sea compatible con versiones anteriores de Visual Studio 2013.

Las aplicaciones de Office 365 están protegidas con Azure Active Directory, que forma parte de una suscripción a Office 365. Si no dispone de una suscripción de Office 365 o si la asoció con Azure AD, debe seguir los pasos para [configurar el entorno de desarrollo de Office 365](https://msdn.microsoft.com/office/office365/HowTo/setup-development-environment "configurar el entorno de desarrollo de Office 365") de MSDN.

## Registro de la aplicación ##
Cuando abra la solución en Visual Studio 2015, la aplicación tendrá que registrarse por su propietario. Solo tiene que hacer clic con el botón derecho en el proyecto y seleccionar **agregar** > **servicio conectado**. Use el Asistente de servicio conectado para registrar la aplicación con Azure AD con permisos para leer y escribir contactos.
## Ejecutando la aplicación ##
Las herramientas para Apache Cordova le permitirán ejecutar las aplicaciones de distintas plataformas y dispositivos/emuladores. En primer lugar, seleccione la plataforma (ej.: Android) y, a continuación, el dispositivo o emulador que elija. La depuración a iOS requiere un equipo Mac para conectarse de forma remota a con [vs-MDA – Remote](https://www.npmjs.com/package/vs-mda-remote "vs-MDA-Remote").

> Ripple es un emulador en el navegador (Chrome) que se puede usar para probar esta aplicación. El proceso de autenticación Web con rizo puede ser un poco complicado. Si tiene algún problema, actualice el explorador. En caso de que no funcione, cambie la configuración de proxy en el menú de la parte superior derecha de rizo.

![Contactos de Cordova con iónico](http://i.imgur.com/qOF7y0w.png)



Este proyecto ha adoptado el [Código de conducta de código abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/). Para obtener más información, vea [Preguntas frecuentes sobre el código de conducta](https://opensource.microsoft.com/codeofconduct/faq/) o póngase en contacto con [opencode@microsoft.com](mailto:opencode@microsoft.com) si tiene otras preguntas o comentarios.
