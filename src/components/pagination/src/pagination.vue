<template>
  <div class="py-pagination">{{ current }}
    <!-- <div class="py-pagination__total">共<span>{{ total }}</span>条</div> -->
    <py-pager
      :page-count="pageCount"
      :pager-count="pagerCount"
      :current-page="current"
      :disabled="disabled"
      :simple="simple"
      :prev-text="prevText"
      :next-text="nextText"
      @changePage="changePage"
    ></py-pager>
    <py-page-input :current-page="current" :page-count="pageCount" @changeCurrent="changeCurrent"></py-page-input>
  </div>
</template>

<script>
import PyPager from './pager';
import PyPageInput from './pageInput'

export default {
  name: 'PyPagination',
  components: {
    PyPager,
    PyPageInput
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
    }
  },
  data () {
    return {
      current: this.currentPage
    }
  },
  methods: {
    changeCurrent (_page) {
      this.current = _page;
    },
    changePage (_page) {
      this.current = _page;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../base/themes.scss';
  $prefixCls: "py-pagination";

  .#{$prefixCls} {
    display: flex;
    align-items: center;
    color: $color;
    &__total span {
      padding: 0 2px;
    }
  }
</style>


