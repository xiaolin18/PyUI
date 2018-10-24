import PYPagination from './src/pagination.js';

PYPagination.install = Vue => {
  Vue.component(PyPagination.name, PYPagination);
};

export default PYPagination;

