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
    return arr.reduce( (prev, curr) => prev+curr );
  },

  remove: function(arr, item) {
    let results = [];
    
    arr.forEach((num, i) => {
      if (num !== item) {
        results.push(num);
      }
    });

    return results;
  },

  removeWithoutCopy: function(arr, item) {

    let idx = arr.indexOf(item);

    while (idx !== -1) {
      arr.splice(idx, 1);
      idx = arr.indexOf(item);
    }
   
    return arr
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;

  },

  truncate: function(arr) {
    arr.splice(arr.length-1, 1);
    return arr;

  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;

  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {

    return arr1.concat(arr2);

  },

  insert: function(arr, item, index) {

    arr.splice(index, 0, item);
    return arr;

  },

  count: function(arr, item) {
    let count = 0;
    
    arr.forEach((el) => {
      if (el === item) {
        count++;
      }
    });

    return count;

  },

  duplicates: function(arr) {

    let results = [];

    const occurences = arr.reduce((prev, curr) => {
      if (!prev[curr]) {
        prev[curr] = 1;
      } else {
        prev[curr] += 1;
      }

      return prev;
    }, {});

    for (let el in occurences) {
      if (occurences[el] > 1) {
        results.push(Number(el));
      }
    }

    return results;
  },

  square: function(arr) {

    return arr.map((num) => num * num);

  },

  findAllOccurrences: function(arr, target) {

    let occurences = [];

    arr.forEach((el, i) => {
      if (el === target) {
        occurences.push(i);
      }
    });

    return occurences;

  }
};
