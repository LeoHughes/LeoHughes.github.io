//配置数据源
var config = {
  syncURL: 'https://dictionary.wilddogio.com'
};
wilddog.initializeApp(config);
var ref = wilddog.sync().ref('/dic/words');

//初始化vue
var vm = new Vue({
  el: 'body',
  data: {
    searchWord: '',
    result: [],
    showResult: false,
    noData: false
  },
  methods:{
    search: function(){
      var self = this;

      if(!self.searchWord){
        return;
      }

      self.showResult = true;

      ref.orderByChild('name').equalTo(self.searchWord).on("value",function(snapshot){
        var data = snapshot.val() || [];

        data.length === 0 ? self.noData = true : self.noData = false ;

        self.result = data;

      });
    },
    back: function(){
      this.showResult = false;
      this.searchWord = '';
      this.result = [];
    }
  }
});

