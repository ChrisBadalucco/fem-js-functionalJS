// 1
var funcCaller = function(func, arg) {
    return func(arg);
};

// 2
var firstVal = function(arr, func) {
    return func(arr[0], 0, arr);
};

// 3
var firstValArrObj = function(arrObj, func) {
    return func(Object.keys(arrObj)[0], 0, arrObj);
};