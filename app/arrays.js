/* eslint-disable */

exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    let index = -1;

    arr.forEach((num, i) => {
      if (item === num) {
        index = i;
      }
    });
    
    return index;

  },

  sum: function(arr) {

  },

  remove: function(arr, item) {

  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
