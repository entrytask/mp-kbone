const debug = true
const apiHost = 'https://xxx.com'
var Mock = require('mockjs')

const data = Mock.mock({
  'userlist|5': [{
    'id|+1': 1,
    'name': '@cname()',
  }]
})

const ajax = (url,success) => {
  if(debug) {
    switch(url) {
      case '/getArrs':
        success(['hi', 'mock', 'data'])
        break
      case '/user/list':
        success(data.userlist)
        break
    }
  }else{
    //request
    wx.requst({
      url: apiHost+url,
      success: success,
    })
  }
}

module.exports = {
  ajax
}