template = require 'templates/about'
class AboutView extends Backbone.Layout
  template: template
  el: false
  
  afterRender: ->
    $("body").css('background', '#fff')
module.exports = AboutView