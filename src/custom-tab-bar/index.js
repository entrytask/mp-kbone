Component({
  data: {
    selected: 0,
    color: '#000000',
    selectedColor: '#07c160',
    list: [{
      pagePath: '/pages/home/index',
      text: '首页',
      iconPath: '../img/icon_tabbar_home-sel@2x.png',
      selectedIconPath: '/images/icon_tabbar_home-sel@2x.png',
    }, {
      pagePath: '/pages/my/index',
      text: '我的',
      iconPath: '/images/90086e8f8fbd30adf8e5ff4f7ee293c0.png',
      selectedIconPath: '/images/23be89c5ce5665d08a304663360b27c3.png',
    }]
  },
  methods: {
    async switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path

      await this.setData({
        selected: data.index
      })
      wx.switchTab({ url })
    }
  }
})
