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
このリポジトリには、Cordova、AngularJS、Ionic Framework を使用して構築されたシンプルなモバイル アプリケーションが含まれており、Office 365 の連絡先を表示します。
## 環境設定 ##
ソリューションは、インストールされている Apache Cordova 用 Visual Studio ツールとともに Visual Studio 2015 に組み込まれました。これらのツールは Visual Studio 2013 では個別インストールでしたが、Visual Studio 2015 ではオプション インストールです。Visual Studio 2015 の Cordova テンプレートは、Cordova アプリ用により広く採用されるプロジェクト構造に整合するように変更されました。したがって、このプロジェクトは、Visual Studio 2013 との下位互換性を持つようにリファクタリングする必要があります。

Office 365 アプリケーションは、Office 365 サブスクリプションの一部として付属する Azure Active Directory によって保護されます。Office 365 サブスクリプションをご利用でない場合、または Azure AD に関連付けていない場合は、MSDN の [Set up your Office 365 development environment](https://msdn.microsoft.com/office/office365/HowTo/setup-development-environment "Office 365 開発環境のセットトップ")の手順に従ってください。

## アプリを登録する ##
Visual Studio 2015 でソリューションを開くときは、テナントにアプリケーションを登録する必要があります。プロジェクトを右クリックして、**\[追加]** > **\[接続済みサービス]** の順に選択します。接続済みサービス ウィザードを使用して、連絡先を読み取り/書き込むアクセス許可を使って、Azure AD にアプリケーションを登録します。
## アプリケーションを実行する ##
Apache Cordova 用のツールを使用すると、アプリケーションをさまざまなプラットフォームやデバイス/エミュレーターに対して実行できます。まず、プラットフォーム (例: Android) を選択し、次にデバイス/エミュレータ－を選択します。iOS に対するデバッグには、[vs-mda-remote](https://www.npmjs.com/package/vs-mda-remote "vs-mda-remote") を使用するためにリモート接続用の Mac が必要です。

> Ripple は、このアプリケーションをテストするために使用できるブラウザー内 (Chrome) エミュレーターです。Ripple を使用する Web 認証プロセスは、少々複雑な場合があります。問題が発生した場合は、ブラウザーを更新してください。問題が解決しない場合は、Ripple の右上メニューでプロキシ設定を切り替えてください。

![Ionic を使用する Cordova Contacts](http://i.imgur.com/qOF7y0w.png)



このプロジェクトでは、[Microsoft Open Source Code of Conduct (Microsoft オープン ソース倫理規定)](https://opensource.microsoft.com/codeofconduct/) が採用されています。詳細については、「[倫理規定の FAQ](https://opensource.microsoft.com/codeofconduct/faq/)」を参照してください。また、その他の質問やコメントがあれば、[opencode@microsoft.com](mailto:opencode@microsoft.com) までお問い合わせください。
