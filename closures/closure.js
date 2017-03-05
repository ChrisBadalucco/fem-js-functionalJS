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
var firstname = function(firstname) {
    return function(lastname) {
        console.log(firstname + ' ' + lastname);
    }
}

var lname = firstname('Farmer');
var fullname = lname('Joe');

// 6a - story stored outside the obj
var storyWriter = function() {
    var story = '';
    return {
        addWords: function(words) {
            story = story + ' ' + words;
            return story;
        },
        erase: function() {
            story = '';
            return story;
        }
    };
}

// 6b - story stored on the obj
var storyWriter = function() {
    return {
        story: '',
        addWords: function(words) {
            this.story = this.story + ' ' + words;
            return this.story;
        },
        erase: function() {
            this.story = '';
            return this.story;
        }
    };
}