<template>
  <div>
    <py-pagination
      :page-count="10"
      :pager-count="7"
      prev-text="上一页"
      next-text="下一页"
      :total="100"
    ></py-pagination>
  </div>
</template>

<script>
export default {
  name: "pagination-demo",
};
</script>
