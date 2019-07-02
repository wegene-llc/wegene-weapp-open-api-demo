# WeGene 开放平台小程序开发示例 #

由于 WeGene 开放平台是基于 Web OAuth 2.0 流程开发的，在小程序中使用时，需要通过小程序的 `web-view` 组件进行授权，并通过 HTML 页面与小程序原生页面之间的通讯实现授权码 `code` 的传递。本代码库提供了一个实现该流程的简单示例。

### 文件列表 ###

```
.
├── README.md
├── app.js
├── app.json
├── app.wxss
├── pages
│   ├── authorize # 授权页面，放置了 web-view 组件
│   │   ├── authorize.js
│   │   ├── authorize.json
│   │   ├── authorize.wxml
│   │   └── authorize.wxss
│   ├── index # 首页，此处放置了跳转到授权页面的按钮
│   │   ├── index.js
│   │   ├── index.json
│   │   ├── index.wxml
│   │   └── index.wxss
│   └── process # 授权完成后的回调界面，用于接收 code
│       ├── process.js
│       ├── process.json
│       ├── process.wxml
│       └── process.wxss
├── project.config.json
├── server # 需要部署在服务端的授权完成后回调页面，用于 code 获取及传递
│   └── callback.html
├── sitemap.json
└── utils
    └── util.js
```

### 注意： ###

由于微信小程序有访问域名限制，在小程序中访问 WeGene 授权页时不可使用 `api.wegene.com` 的域名。请单独向 WeGene 申请用于小程序内的业务域名并绑定在您的小程序账号下。