<template>
  <div class="antv-demo">
    <div id="container"></div>
  </div>
</template>

<script>
/* eslint-disable */
import { Graph, Shape } from '@antv/x6'

export default {
  data() {
    return {
      broheight: (document.documentElement.clientHeight || document.body.clientHeight) - 128,
      NODE_WIDTH: 150,
      LINE_HEIGHT: 24,
      graph: null,
      erdata: [
        {
          id: 'er_1',
          label: '学生',
          shape: 'custom-rect',
          width: 150,
          height: 24,
          position: {
            x: 40,
            y: 100
          },
          ports: [
            {
              id: 'er_1.1',
              group: 'list',
              attrs: {
                label: {
                  text: '张三'
                }
              }
            },
            {
              id: 'er_1.2',
              group: 'list',
              attrs: {
                label: {
                  text: '李四'
                }
              }
            }
          ]
        },
        {
          id: 'er_2',
          label: '课程',
          shape: 'custom-rect',
          width: 150,
          height: 24,
          position: {
            x: 300,
            y: 100
          },
          ports: [
            {
              id: 'er_2.1',
              group: 'list',
              attrs: {
                label: {
                  text: '语文'
                }
              }
            },
            {
              id: 'er_2.2',
              group: 'list',
              attrs: {
                label: {
                  text: '数学'
                }
              }
            }
          ]
        },
        {
          id: 'er_3',
          label: '教师',
          shape: 'custom-rect',
          width: 150,
          height: 24,
          position: {
            x: 560,
            y: 100
          },
          ports: [
            {
              id: 'er_3.1',
              group: 'list',
              attrs: {
                label: {
                  text: '语文教师'
                }
              }
            },
            {
              id: 'er_3.2',
              group: 'list',
              attrs: {
                label: {
                  text: '数学教师'
                }
              }
            },
            {
              id: 'er_3.3',
              group: 'list',
              attrs: {
                label: {
                  text: '体育教师'
                }
              }
            }
          ]
        },
        {
          id: 'ed_1',
          shape: 'edge',
          source: {
            cell: 'er_1',
            port: 'er_1.1'
          },
          target: {
            cell: 'er_2',
            port: 'er_2.2'
          },
          attrs: {
            line: {
              stroke: '#A2B1C3',
              strokeWidth: 2
            }
          }
        },
        {
          id: 'ed_2',
          shape: 'edge',
          source: {
            cell: 'er_3',
            port: 'er_3.2'
          },
          target: {
            cell: 'er_2',
            port: 'er_2.2'
          },
          attrs: {
            line: {
              stroke: '#A2B1C3',
              strokeWidth: 2
            }
          }
        }
      ]
    }
  },
  created() {
    this.registerPortLayoutFn();
    this.registerNodeFn();
  },
  mounted() {
    this.initGraphFn();
  },
  methods: {
    // 初始化Graph
    initGraphFn() {
      this.graph = new Graph({
        container: document.getElementById('container'),
        width: '100%',
        height: this.broheight,
        background: {
          color: '#fffbe6'
        },
        grid: {
          size: 10,
          visible: true
        },
        connecting: {
          router: {
            name: 'er',
            args: {
              offset: 25,
              direction: 'H'
            }
          },
          createEdge() {
            return new Shape.Edge({
              attrs: {
                line: {
                  stroke: '#A2B1C3',
                  strokeWidth: 2
                }
              }
            })
          }
        }
      });

      const cells = [];
      this.erdata.forEach(item => {
        if (item.shape === 'edge') {
          cells.push(this.graph.createEdge(item));
        } else {
          cells.push(this.graph.createNode(item));
        }
      });
      this.graph.resetCells(cells);
    },
    // 注册节点
    registerNodeFn() {
      Graph.registerNode('custom-rect', {
        inherit: 'rect',
        markup: [
          {
            tagName: 'rect',
            selector: 'body'
          },
          {
            tagName: 'text',
            selector: 'label'
          }
        ],
        attrs: {
          rect: {
            strokeWidth: 1,
            stroke: '#5F95FF',
            fill: '#5F95FF'
          },
          label: {
            fontWeight: 'bold',
            fill: '#ffffff',
            fontSize: 12
          }
        },
        ports: {
          groups: {
            list: {
              markup: [
                {
                  tagName: 'rect',
                  selector: 'body'
                },
                {
                  tagName: 'text',
                  selector: 'label'
                }
              ],
              attrs: {
                body: {
                  width: this.NODE_WIDTH,
                  height: this.LINE_HEIGHT,
                  strokeWidth: 1,
                  stroke: '#5F95FF',
                  fill: '#EFF4FF',
                  // magnet: true
                },
                label: {
                  ref: 'body',
                  refX: 6,
                  refY: 6,
                  fontSize: 12
                }
              },
              position: 'erPortPosition'
            }
          }
        }
      }, true);
    },
    // 注册位置
    registerPortLayoutFn() {
      Graph.registerPortLayout('erPortPosition', portsPositionArgs => {
        return portsPositionArgs.map((_, index) => {
          return {
            position: {
              x: 0,
              y: (index + 1) * this.LINE_HEIGHT,
            },
            angle: 0
          };
        });
      }, true);
    }
  }
}
</script>

<style>

</style>
