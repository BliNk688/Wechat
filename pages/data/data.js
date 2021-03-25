var amapFile=require('../../libs/amap-wx.130');
var markersData = [];
Page({
  data: {
    markers: [],
    latitude: '',
    longitude: '',
    textData: {},
  show:false,//控制下拉列表的显示隐藏，false隐藏、true显示
  selectData:['1','2','3','4','5','6'],//下拉列表的数据
  index:0,//选择的下拉列表下标
  items:[
    {
img:"../../image/pH.png",
unit:"pH",
value:'5.32'
  },
  {
    img:"../../image/shuiwenji.png",
    unit:"水温(℃)",
    value:'17.62'
   },
   {
    img:"../../image/wendu.png",
    unit:"气温(℃)",
    value:'16.9'
   },

   {
    img:"../../image/shidu.png",
    unit:"湿度（%）",
    value:'30.6'
   },
   {
    img:"../../image/yangqinongdu.png",
    unit:"溶解氧(mg/L)",
    value:'7.97'
   },
   {
    img:"../../image/qiyaji.png",
    unit:"气压(kPa)",
    value:'101.99'
   },
    
],
position:{jindu:"115.3222",weidu:"28.7777",haiba:"20.20"}
  },
  makertap: function(e) {
    var id = e.markerId;
    var that = this;
    that.showMarkerInfo(markersData,id);
    that.changeMarkerColor(markersData,id);
  },
  // 点击下拉显示框
  selectTap(){
  this.setData({
   show: !this.data.show
  });
  },
  // 点击下拉列表
  optionTap(e){
  let Index=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
  this.setData({
   index:Index,
   show:!this.data.show
  });
  },
  onLoad: function (options) {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({key:'f7cf4276eb6f3aef0c249803626933bb'});
    myAmapFun.getPoiAround({
      iconPathSelected: '选中 marker 图标的相对路径', //如：..­/..­/img/marker_checked.png
      iconPath: '未选中 marker 图标的相对路径', //如：..­/..­/img/marker.png
      success: function(data){
        markersData = data.markers;
        that.setData({
          markers: markersData
        });
        that.setData({
          latitude: markersData[0].latitude
        });
        that.setData({
          longitude: markersData[0].longitude
        });
        that.showMarkerInfo(markersData,0);
      },
      fail: function(info){
        wx.showModal({title:info.errMsg})
      }
    })
  },
  showMarkerInfo: function(data,i){
    var that = this;
    that.setData({
      textData: {
        name: data[i].name,
        desc: data[i].address
      }
    });
  },
  changeMarkerColor: function(data,i){
    var that = this;
    var markers = [];
    for(var j = 0; j < data.length; j++){
      if(j==i){
        data[j].iconPath = "选中 marker 图标的相对路径"; //如：..­/..­/img/marker_checked.png
      }else{
        data[j].iconPath = "未选中 marker 图标的相对路径"; //如：..­/..­/img/marker.png
      }
      markers.push(data[j]);
    }
    that.setData({
      markers: markers
    });
  }

 })