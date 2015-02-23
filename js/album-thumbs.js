var AlbumThumbs = (function(){

  var template = JST["album-thumbs"];

  function AlbumThumbs(data){
    this.data = data;
  }

  AlbumThumbs.prototype = {
    
    render: function() {
      return $(template(this.data));
    }

  }

  return AlbumThumbs;

})();

