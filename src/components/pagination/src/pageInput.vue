<template>
  <div class="py-pageinput">
    <span>前往</span>
    <span>
      <input
        v-model="current"
        type="text"
        class="py-pageinput__input"
        @keyup.enter="changeCurrent"
        @change="changeCurrent"
        @input="input"
      >
    </span>
    <span>页</span>
  </div>
</template>

<script>
export default {
  name: 'PyPageInput',
  data () {
    return {
      current: this.currentPage
    }
  },
  props: {
    currentPage: Number,
    pageCount: Number
  },
  watch: {
    currentPage (_val) {
      this.current = _val;
    }
  },
  methods: {
    input (_val) {
      let newValue = [];
      const value = _val.target.value;
      value.split('').forEach(item => {
        if (!isNaN(Number(item))) {
          newValue.push(item);
        }
      });
      this.current = newValue.join('');
    },
    changeCurrent () {
      let curPage = Number(this.current);
      if (curPage < 1) {
        this.current = 1;
      } else if (curPage > this.pageCount) {
        this.current = this.pageCount;
      }
      this.$emit('changeCurrent', Number(this.current));
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../../../base/themes.scss';
  $prefixCls: "py-pageinput";

  .#{$prefixCls} {
    color: $color;
    width: 110px;
    &__input {
      margin: 0 2px;
      width: 50%;
      border: 1px solid $border-color;
      border-radius: 5px;;
      text-align: center;
      padding: 6px;
      &:hover, &:focus {
        border-color: $border-color-hover;
        box-shadow: 0 0 4px $border-color-hover;
      }
    }
  }
</style>


