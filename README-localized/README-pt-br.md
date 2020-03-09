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
Este repositório contém um aplicativo móvel simples compilado usando Cordova, AngularJS e Ionic Framework para exibir os contatos do Office 365.
## Configuração do ambiente ##
A solução foi criada no Visual Studio 2015 com as ferramentas do Visual Studio para Apache Cordova instaladas. Essas ferramentas eram uma instalação separada do Visual Studio 2013, mas é uma instalação de opção no Visual Studio 2015. O modelo do Cordova no Visual Studio 2015 foi alterado para se alinhar com uma estrutura de projeto mais amplamente adotada para aplicativos do Cordova (fonte na pasta www). Assim, esse projeto precisará ser refatorado para ser compatível com versões anteriores do Visual Studio 2013.

Os aplicativos do Office 365 estão protegidos pelo Azure Active Directory, que é parte de uma assinatura do Office 365. Se você não tiver uma assinatura do Office 365 ou associada a ela com o Azure AD, siga as etapas para [Configurar seu ambiente de desenvolvimento do Office 365](https://msdn.microsoft.com/office/office365/HowTo/setup-development-environment "Configurar seu ambiente de desenvolvimento do Office 365") no MSDN.

## Registrar o aplicativo ##
Quando você abrir a solução no Visual Studio 2015, será necessário registrá-lo para o seu locatário. Basta clicar com o botão direito do mouse no projeto e selecionar **Adicionar** > **Serviço Conectado**. Use o assistente de serviço conectado para registrar o aplicativo com o Azure AD com permissões de leitura/gravação.
## Executar o aplicativo ##
As ferramentas para Apache Cordova permitem executar o aplicativo para diferentes plataformas e dispositivos/emuladores. Primeiro, selecione a plataforma (por exemplo: Android) e o disposito/emulador da sua escolha. A depuração no iOS exige que um Mac para se conectar remotamente usando [vs-mda-remote](https://www.npmjs.com/package/vs-mda-remote "vs-mda-remote").

> O Ripple é um emulador no navegador (Chrome) que pode ser usado para testar esse aplicativo. O processo de autenticação na Web com o Ripple pode ser um pouco complicado. Se você tiver problemas, atualize o navegador. Se isso não funcionar, alterne as configurações de proxy no menu no canto superior direito.

![Contatos do Cordova com Ionic](http://i.imgur.com/qOF7y0w.png)



Este projeto adotou o [Código de Conduta de Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/).  Para saber mais, confira [Perguntas frequentes sobre o Código de Conduta](https://opensource.microsoft.com/codeofconduct/faq/) ou contate [opencode@microsoft.com](mailto:opencode@microsoft.com) se tiver outras dúvidas ou comentários.
