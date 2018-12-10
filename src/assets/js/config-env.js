let baseUrl = '';
if (process.env.url_env === 'test') { // 测试环境
  baseUrl = 'http://testing'
} else if (process.env.url_env === 'dev') { // 开发uat环境
  baseUrl = 'http://development'
} else if (process.env.url_env === 'prod') { // 生产环境
  baseUrl = 'http://production'
}
export default baseUrl;

