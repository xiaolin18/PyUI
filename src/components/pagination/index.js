import PYPagination from './src/pagination.vue';

PYPagination.install = Vue => {
  Vue.component(PyPagination.name, PYPagination);
};

export default PYPagination;

