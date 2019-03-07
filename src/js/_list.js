import Vue from 'vue'
import ListItem from './_listitem'
import EditorView from './_editorview'
// import ListView from './_listview'

export default () => {
  new Vue({
    el: '#list',
    components: { ListItem, EditorView },
    data() {
      return {
        memo: {
          id: 1,
          text: '',
          date: '',
          tags: '',
        },
      }
    },
    methods: {
      add(newMemo) {
        Object.assign(this.memo, newMemo)
      },
    },
    template: `
      <div>
        <editor-view @add="add"></editor-view>
        <list-item :memo="memo"></list-item>
      </div>`,
    // render: h => h(ListItem),
  })
}
