import PyPageInput from './pageInput.vue';
import PyPager from './pager.vue';

export default {
  name: 'PyPagination',
  components: {
    PyPageInput,
    PyPager,
    MySlot: {
      render(h) {
        return this.$parent.$slots.default ? this.$parent.$slots.default : ''
      }
    },
    Total: {
      render (h) {
        return (
          <div class="py-pagination__total">共<span>{ this.$parent.total }</span>条</div>
        )
      }
    }
  },
  props: {
    total: Number,
    pageCount: Number,
    pagerCount: {
      type: Number,
      validator(value) {
        return (value | 0) === value && value > 4 && value < 22 && (value % 2) === 1;
      },
      default: 7
    },
    currentPage: {
      type: Number,
      required: false,
      default: 1
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    simple: Boolean,
    prevText: {
      type: String,
      required: false,
      default: '>'
    },
    nextText: {
      type: String,
      required: false,
      default: '<'
    },
    layout: {
      type: String,
      default: 'total, prev, pager, next, jumper, pageInput'
    }
  },
  render (createElement) {
    // h返回createElement函数
    let template = <div class="py-pagination"></div>;
    const layout = this.layout || '';
    if (!layout) return;
    const CHILD_TEMPLATE = {
      pager:  <py-pager 
                currentPage={ this.currentPage } 
                pageCount={ this.pageCount } 
                pagerCount={ this.pagerCount }
                layout={ this.layout }
                prevText={ this.prevText }
                nextText={ this.nextText }
              ></py-pager>,
      jumper:  <py-page-input
                    currentPage={ this.currentPage } 
                    pageCount={ this.pageCount } 
                  ></py-page-input>,
      slot:  <my-slot></my-slot>,
      total: <total></total>
    };
    const components = layout.split(',').map((item) => item.trim());
    template.children = template.children || [];

    components.forEach((compo) => {
      if (compo && CHILD_TEMPLATE[compo]) {
        template.children.push(CHILD_TEMPLATE[compo])
      }
    });
    return template
  }
}