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

// 7
var Toaster = function() {
    var _maxThreshold = 100;
    var _checkParameters = function(time, intensity) {
        if (parseInt(time)*parseInt(intensity) > _maxThreshold) {
            return false;
        } else {
            return true;
        }
    }

    return {
        clock: '12:00',
        changeClock: function(time) { this.clock = time; },
        makeToast: function(time, intensity) {
            if (_checkParameters(time, intensity)) {
                console.log('Your toast is being made with a toast level of ' + parseInt(time)*parseInt(intensity) + ' out of 100');
            } else {
                console.log('Too hot! Try different settings');
            }
        }
    };
}

// 8 extra credit
var Character = function(name, gender) {
    var _health = 100;
    var _mushroom = 25;
    var _enemyAtack = -50;
    var _calcHealth = function(amt) {
        _health += amt;
        if(_health > 100) { _health = 100; }
        else if(_health < 0) { _health = 0; }
    }

    return {
        name: name,
        changeName: function(name) { this.name = name; },
        gender: gender,
        getHealth: function() { return _health },
        eatMushroom: function() { 
            _calcHealth(_mushroom);
            console.log('You ate a mushroom! Your health is now ', _health);
        },
        hitByEnemy: function() {
            _calcHealth(_enemyAtack);
            console.log('You got hit by an enemy! Your health is now ', _health);
            if (_health === 0) {
                console.log('You died...');
            }
        }
    };
}

// 9 extra credit

// bad code - fails because we are creating a new scope with the function we push onto resultArr. 
// The body of that new function does not have access to namesArr

// var checkAttendanceFunc = function(nameArr) {
//     var resultArr = [];
//     for(var i = 0; i < nameArr.length; i++){
//         resultArr.push(function(){ console.log('Is', nameArr[i], 'present?', i)})
//     };
//     return resultArr;
// };

// good code
var checkAttendanceFunc = function(nameArr){
    var resultArr = [];
    var func = function(num) {
        console.log('Is', nameArr[num], 'present?', num);
    };
    for(var i = 0; i < nameArr.length; i++){
        resultArr.push(func(i));
    };
    return resultArr;
};
checkAttendanceFunc(['jeff', 'chris', 'adam', 'greg']); // Is jeff present? 0, Is chris present? 1, Is adam present? 2, Is greg present? 3