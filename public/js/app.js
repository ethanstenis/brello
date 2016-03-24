'use strict';

// Models

var LaneModel = Backbone.Model.extend({
  urlRoot: "/lanes"
});

var TagModel = Backbone.Model.extend({
  urlRoot: "/tags"
});

console.log('hello, you handsome devil.');


var LanesCollection = Backbone.Collection.extend({
  url: "/lanes",
  model: LaneModel
});

var TagsCollection = Backbone.Collection.extend({
  url: "/tags",
  model: TagModel
});
