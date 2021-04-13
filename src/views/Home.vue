<template>
  <div class="root">
    <div class="source">
      <ul>
        <li>Red</li>
        <li>Green</li>
      </ul>
    </div>
    <div class="container" id="canvas"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import $ from 'jquery'
//引入jquery-ui需要直接写到具体方法
import 'jquery-ui/ui/widgets/draggable'
import 'jquery-ui/ui/widgets/droppable'
import { jsPlumb } from 'jsplumb'
import Dag from '../js/dag'

export default {
  name: 'Home',
  components: {
    
  },
  methods: {
    init (args) {
      console.log(args)
      Dag.create()
    }
  },
  created () {
    Dag.init({
      dag: this,
      instance: jsPlumb.getInstance({
        //端点
        Endpoint: [
          'Dot',{ adius: 1, cssClass: 'dot-style' }
        ],
        //连接线类型
        Connector: 'Bezier',
        //绘画样式
        PaintStyle: { lineWidth: 2, stroke: '#456' },
        //连接上的默认样式
        ConnectionOverlays: [
           ['Arrow',
              {
                location: 1,
                id: 'arrow',
                length: 12,
                foldback: 0.8
              }
            ],
            ['Label', {
              location: 0.5,
              id: 'label'
            }]
        ],
        //选择器id
        Container: 'canvas',
        //连接是否可以使用鼠标默认分离
        ConnectionsDetachable: true
      })
    })
  },
  mounted () {
    this.init(this.arg)
  }
}
</script>
