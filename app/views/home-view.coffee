template = require 'templates/home'
swappingtext = require 'lib/js/swappingtext.js'
class HomeView extends Backbone.Layout
  template: template
  el: false
    
  afterRender: ->
    $("body").css('background', '#29274e')
    swappingtext()
  
module.exports = HomeView