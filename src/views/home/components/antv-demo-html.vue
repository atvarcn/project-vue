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
      viewPortHeight: 0,
      WIDTH: 150,
      HEIGHT: 30,
      graph: null,
      edgeData: [],
      nodeData: [
        {
          id: 'node_1',
          label: '用户',
          children: [
            {
              id: 'node_1.1',
              label: 'USER_ID'
            },
            {
              id: 'node_1.2',
              label: 'ROLE_ID'
            },
            {
              id: 'node_1.3',
              label: 'SEX'
            }
          ]
        },
        {
          id: 'node_2',
          label: '客户',
          children: [
            {
              id: 'node_2.1',
              label: 'USER_ID'
            },
            {
              id: 'node_2.2',
              label: 'ROLE_ID'
            }
          ]
        },
        {
          id: 'node_3',
          label: '终端',
          children: [
            {
              id: 'node_3.1',
              label: 'USER_ID'
            },
            {
              id: 'node_3.2',
              label: 'ROLE_ID'
            },
            {
              id: 'node_3.3',
              label: 'SEX'
            }
          ]
        }
      ]
    }
  },
  created() {
    this.getViewPortHeight();
    
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

      this.nodeData.forEach((item, index) => {
        this.addHeadFn(item, index);
        item.children.forEach((cell, idx) => {
          this.addListFn(cell, idx);
        });
      });
    },
    addHeadFn(item, index) {
      this.graph.addNode({
        x: 20 + 300 * index,
        y: 30,
        width: this.WIDTH,
        height: this.HEIGHT,
        shape: 'html',
        html() {
          const el = document.createElement('div');
          el.classList.add('custom-table-head');
          el.innerText = item.label;
          el.title = item.label;
          return el;
        }
      });
    },
    addListFn(item, index) {
      this.graph.addNode({
        x: 20,
        y: 30 + (index + 1) * this.HEIGHT,
        width: this.WIDTH,
        height: this.HEIGHT,
        shape: 'html',
        html() {
          const el = document.createElement('div');
          el.classList.add('custom-table-list');
          el.innerText = item.label;
          el.title = item.label;
          return el;
        }
      });
    }
  }
}
</script>

<style>
.custom-table-head {
  width: 100%;
  height: 100%;
  line-height: 30px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  background: #5f95ff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
}
.custom-table-list {
  width: 100%;
  height: 100%;
  line-height: 30px;
  font-size: 12px;
  color: #515a6e;
  text-align: center;
  background: #eff4ff;
  border: 1px solid #5f95ff;
  border-top: 0;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
}
</style>
