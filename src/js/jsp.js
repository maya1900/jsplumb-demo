import 'jquery-ui/ui/widgets/draggable'
import 'jquery-ui/ui/widgets/droppable'
import 'jquery-ui/ui/widgets/resizable'
import $ from 'jquery'
import { jsPlumb } from 'jsplumb'

const JSP = function () {
  this.dag = {}
}

JSP.prototype.init = function ({ dag, instance, options }) {
  this.dag = dag
  this.jspInstance = instance
  this.options = options || {}
  // this.JspInstance.registerConnectionType('basic', {
  //   anchor: 'Continuous',
  //   connector: 'Bezier' // Line type
  // })
}


JSP.prototype.draggable = function () {
  let self = this
  $('.source').find("li").draggable({
    scope: 'plant',
    helper: 'clone',
    containment: $('.root')
  })
  $('#canvas').droppable({
    scope: 'plant',
    drop: function (ev, ui) {
      let id = 'task-' + Math.ceil(Math.random() * 100000)
      const left = parseInt(ui.offset.left - $(this).offset().left) 
      const top = parseInt(ui.offset.top - $(this).offset().top) 
      let html = $(`<div style='border-color:${ui.draggable.first().text()};top:${top}px;left:${left}px' id=${id}>${ui.draggable.first().text()}</div>`)
      $(this).append(html)
      // html.draggable({
      //   containment:$('.container')
      // })
      const thisDom = jsPlumb.getSelector('#' + id)
      self.jspInstance.batch(() => {
        self.initNode(thisDom[thisDom.length - 1])
      })
    }
  })
}

JSP.prototype.initNode = function (el) {
  $(el).draggable({
    containment: '.container'
  })
}

export default new JSP()
