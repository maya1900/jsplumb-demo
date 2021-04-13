
import JSP from './jsp'
import {jsPlumb} from 'jsplumb'
const Dag = function () {
  this.dag = {}
  this.instance = {}
}

Dag.prototype.init = function ({ dag, instance}){
  this.dag = dag
  this.instance = instance
}

Dag.prototype.create = function () {
  // const self = this
  const plumbIns = jsPlumb.getInstance()
  plumbIns.reset()
  plumbIns.ready(() => {
    JSP.init({
      dag: this.dag,
      instance: this.instance,
      // options: {
      //   onRemoveNodes($id) {
      //      self.dag.removeEventModelById($id)
      //   }
      // }
    })

    JSP.draggable()
  })

}

export default new Dag()
