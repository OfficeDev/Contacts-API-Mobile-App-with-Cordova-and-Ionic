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
该存储库包含一个通过 Cordova、AngularJS 和 Ionic 框架生成的简单移动应用，此应用可以显示 Office 365 中的联系人。
## 环境设置 ##
生成该解决方案的环境是 Visual Studio 2015，其中装有适用于 Apache Cordova 的 Visual Studio 工具。这些工具在 Visual Studio 2013 中是单独安装的，但在 Visual Studio 2015 中是通过选项进行安装。Visual Studio 2015 中的 Cordova 模板已更改，目的是适应更广泛采用的用于 Cordova 应用的项目结构（源代码位于 www 文件夹下）。因此，需要对该项目进行重构，使其向后与 Visual Studio 2013 兼容。

Office 365 应用程序受 Azure Active Directory（这是 Office 365 订阅的一部分）的保护。如果没有 Office 365 订阅或未将其与 Azure AD 关联，则应按照 MSDN 中的相关步骤[设置 Office 365 开发环境](https://msdn.microsoft.com/office/office365/HowTo/setup-development-environment "设置 Office 365 开发环境")。

## 注册应用 ##
在 Visual Studio 2015 中打开解决方案时，需要为租户注册该应用程序。只需右键单击项目，然后选择“**添加**”>“**连接的服务**”。使用“已连接的服务”向导以读取/写入联系人的权限向 Azure AD 注册应用程序。
## 运行应用程序 ##
适用于 Apache Cordova 的工具可用于在不同的平台和设备/仿真程序上运行该应用程序。先选择平台（例如：Android），然后选择所需的设备/仿真程序。针对 iOS 进行调试时需要一台可使用 [vs-mda-remote](https://www.npmjs.com/package/vs-mda-remote "vs-mda-remote") 进行远程连接的 Mac。

> Ripple 是一种浏览器 (Chrome) 内的仿真程序，可用于测试此应用程序。向 Ripple 进行 Web 身份验证的过程可能有点难度。如果遇到问题，请刷新浏览器。如果不起作用，请切换 Ripple 右上方菜单中的代理设置。

![采用 Ionic 的 Cordova 联系人](http://i.imgur.com/qOF7y0w.png)



此项目遵循 [Microsoft 开放源代码行为准则](https://opensource.microsoft.com/codeofconduct/)。有关详细信息，请参阅[行为准则 FAQ](https://opensource.microsoft.com/codeofconduct/faq/)。如有其他任何问题或意见，也可联系 [opencode@microsoft.com](mailto:opencode@microsoft.com)。
