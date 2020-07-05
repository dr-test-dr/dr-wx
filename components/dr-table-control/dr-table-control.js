// components/dr-table-control/dr-table-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeItem(e){
      let data = e.currentTarget.dataset.currentItem
      this.triggerEvent('showGoods', data)
      this.setData({
        currentIndex: data
      })
    }
  }
})
