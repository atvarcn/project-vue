<template>
  <div class="antv-demo">
    <div id="container"></div>
  </div>
</template>

<script>
import { Graph } from '@antv/x6'

export default {
  data() {
    return {
      viewPortHeight: 0,
      itemWidth: 150,
      itemHeight: 30,
      graph: null,
      edgeData: [
        {
          id: 'edge_01'
        },
        {
          id: 'edge_02'
        },
        {
          id: 'edge_03'
        }
      ],
      nodeData: [
        {
          id: 'node_01',
          label: '父表',
          shape: 'custom-rect',
          width: 150,
          height: 30,
          position: {
            x: 30,
            y: 60
          },
          ports: [
            {
              id: 'node_01_01',
              group: 'list',
              attrs: {
                label: {
                  text: '风险点名称'
                }
              }
            },
            {
              id: 'node_01_02',
              group: 'list',
              attrs: {
                label: {
                  text: '风险点名称'
                }
              }
            }
          ]
        }
      ]
    }
  },
  created() {
    this.getViewPortHeight();
    this.registerPortLayout();
    this.customNodeFn();
  },
  mounted() {
    this.initGraphFn();
  },
  methods: {
    // 获取窗口高度
    getViewPortHeight() {
      this.viewPortHeight = (document.documentElement.clientHeight || document.body.clientHeight) - 128;
      window.addEventListener('resize', () => {
        this.viewPortHeight = (document.documentElement.clientHeight || document.body.clientHeight) - 128;
      });
    },
    // 自定义节点
    customNodeFn() {
      Graph.registerNode('custom-rect', {
        inherit: 'rect',
        markup: [
          {
            tagName: 'rect',
            selector: 'body',
          },
          {
            tagName: 'text',
            selector: 'label',
          },
        ],
        attrs: {
          rect: {
            strokeWidth: 1,
            stroke: '#5f95ff',
            fill: '#5f95ff'
          },
          label: {
            fontWeight: 'bold',
            fill: '#fff',
            fontSize: 14
          }
        },
        ports: {
          groups: {
            list: {
              markup: [
                {
                  tagName: 'rect',
                  selector: 'body',
                },
                {
                  tagName: 'text',
                  selector: 'label',
                }
              ],
              attrs: {
                body: {
                  width: this.itemWidth,
                  height: this.itemHeight,
                  strokeWidth: 1,
                  stroke: '#5f95ff',
                  fill: '#eff4ff'
                },
                label: {
                  ref: 'body',
                  refX: 8,
                  refY: 8,
                  fontSize: 12
                }
              },
              position: 'portLayoutItem'
            }
          }
        },
        style: {
          height: '60px',
          overflow: 'hidden'
        }
      }, true);
    },
    // 节点布局
    registerPortLayout() {
      Graph.registerPortLayout('portLayoutItem', portsPositionArgs => {
        return portsPositionArgs.map((_, index) => {
          return {
            position: {
              x: 0,
              y: (index + 1) * this.itemHeight,
            },
            angle: 0
          }
        })
      }, true);
    },
    // 初始化Graph
    initGraphFn() {
      this.graph = new Graph({
        container: document.getElementById('container'),
        width: '100%',
        height: this.viewPortHeight,
        background: {
          color: '#fffbe6'
        },
        grid: {
          size: 10,
          visible: true
        },
      });

      const cells = [];
      this.edgeData.forEach(item => {
        cells.push(this.graph.createEdge(item));
      });
      this.nodeData.forEach(item => {
        cells.push(this.graph.createNode(item));
      });
      this.graph.resetCells(cells);
    }
  }
}
</script>
