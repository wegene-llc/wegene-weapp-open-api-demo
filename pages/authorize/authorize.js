// pages/authorize/authorize.js
Page({

  /**
   *  redirect_uri 是部署在您服务器端的一个页面，所在域名需要添加到小程序业务域名白名单中
   *  该页面需要实现解析回调 code 并转发给小程序原生页面进一步处理的逻辑
   *  实现可参考 server/callback.html 文件
   *  同时您需要使用额外向 WeGene 申请的 API 访问域名进行授权
   */
  data: {
    wegeneAuthUrl: "https://open-api-weapp-1.wegene.com/authorize/?redirect_uri=https://www.yourdomain.com/process_code&response_type=code&client_id=your_client_id&scope=basic"
  },
})