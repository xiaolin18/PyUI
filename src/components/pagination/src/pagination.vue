<template>
  <py-pager
    :page-count="pageCount"
    :pager-count="pagerCount"
    :current-page="currentPage"
    :disabled="disabled"
    :simple="simple"
  ></py-pager>
</template>

<script>
import PyPager from './pager';

export default {
  name: 'PyPagination',
  components: {
    PyPager
  },
  props: {
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
    simple: Boolean
  } 
}
</script>

