this["JST"] = this["JST"] || {};
this["JST"]["album-group"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li data-group-name=\""
    + escapeExpression(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album","hash":{},"data":data}) : helper)))
    + "\">\n  <img src=\"http://cdn.last.fm/flatness/responsive/2/noimage/default_album_300_g4.png\" alt=\""
    + escapeExpression(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album","hash":{},"data":data}) : helper)))
    + "\">\n  <h4>"
    + escapeExpression(((helper = (helper = helpers.album || (depth0 != null ? depth0.album : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album","hash":{},"data":data}) : helper)))
    + "</h4>\n</li>\n";
},"useData":true});