var AlbumGroup = (function(){

  var template = JST["album-group"];

  function AlbumGroup(data) {
    this.data = data;
  }

  AlbumGroup.prototype = {

    render: function() {
      return $( template(this.data) );
    }

  };

  return AlbumGroup;

})();

var AlbumGroupList = (function(){

  function AlbumGroupList(data) {
    this.data = data;
    this.$el = $("<ul />");
  }

  AlbumGroupList.prototype = {
    select: function(groupName) {
      this.$el
        .find("li[data-group-name='"+ groupName +"']");
    },

    render: function() {
      var $el = this.$el;

      _.each(this.data, function(groupData) {

        var group = new AlbumGroup(groupData);
        $el.append( group.render() );
        console.log(group);

      });

      return $el;
    }
  };

  return AlbumGroupList;

})();