var App = (function(){

  function App(data) {

    this.data = data;

    this.$homecontent = $(".home-content");

    this.showGroups();

  }

  App.prototype = {

    getGroupNames: function() {
      return _.chain(this.data)
        .pluck("album")
        .uniq()
        .map(function(groupName){
          return {album: groupName};
        })
        .value();
    },

    showGroups: function() {
      var groupData = this.getGroupNames();
      this.albumGroupList = new AlbumGroupList(groupData);
      this.$homecontent.html( this.albumGroupList.render() );
    }
    
  };

  return App;

})();