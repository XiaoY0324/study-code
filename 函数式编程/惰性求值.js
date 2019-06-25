function addEvent (type, element, fun) {
    if (element.addEventListener) {
        element.addEventListener(type, fun, false);
    } else if(element.attachEvent){
        element.attachEvent('on' + type, fun);
    } else{
        element['on' + type] = fun;
    }
}

// 惰性写法 (惰性载入函数的优点只执行一次if分支，避免了函数每次执行时候都要执行if分支和不必要的代码，因此提升了代码性能)

function addEvent (type, element, fun) {
    if (element.addEventListener) {
        addEvent = function (type, element, fun) { // 直接让函数等于一个匿名函数 改变函数体
            element.addEventListener(type, fun, false);
        }
    } else if (element.attachEvent){
        addEvent = function (type, element, fun) {
            element.attachEvent('on' + type, fun);
        }
    } else {
        addEvent = function (type, element, fun) {
            element['on' + type] = fun;
        }
    }
    return addEvent(type, element, fun);
}

var addEvent = addEvent(type, fun, ele);