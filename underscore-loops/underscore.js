// assume we have pulled in underscore

// 1
_.each([], function(val, idx) {
    console.log(idx);
});
// no difference if we passed in an obj instead of an array

// 2
var helloArr = ['bonjour', 'hello', 'hola'];

var checkValue = function(arr, val) {
  for (var i=0; i < arr.length; i++) {
      if (arr[i] === val) { return true; }
  }
  return false;
}
checkValue(helloArr, 'hola'); // true
checkValue(helloArr, 'sup'); // false

// 3
var helloArr = ['bonjour', 'hello', 'hola'];

var checkValue = function(arr, val) {
  var result = false;
  _.each(arr, function(itm, idx) {
        if (itm === val) { return true; }
  });
  return result;
}
checkValue(helloArr, 'hola'); // true
checkValue(helloArr, 'sup'); // false

// 4
var input = {two: 2, four: 4, three: 3, twelve: 12};
var output = [];
for (var key in input) {
    output.push(input[key]);
}

// 5
var input = {two: 2, four: 4, three: 3, twelve: 12};
var ouput = _.map(input, function(val, prop, input) {
    return val;
});

// 6
var input = [9,8,7,6,5,2];
var evens = _.filter(input, function(val) {
    return val % 2 === 0;
});