// 1
var nonsense = function(str) {
    var blab = function() {
        alert(str);
    }
    blab();
}

// 2
var nonsense = function(str) {
    var blab = function() {
        alert(str);
    }
    setTimeout(blab, 2000);
}

// 3
var nonsense = function(str) {
    var blab = function() {
        alert(str);
    }
    return blab;
}

var blabLater = nonsense('shoop');
var blabAgainLater = nonsense('da woop');

// 4
// inspect in console

// 5
