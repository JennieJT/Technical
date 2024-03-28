let openClock = true;
let timerID;

const handleButton = () => {
    console.log("enter handle button: ");
    if (openClock) {
        timerID = setInterval(() => {
            console.log(Date());
            console.log("Clock is called back")
        }, 1000);
        openClock = false;
    } else {
        clearInterval(timerID);
        openClock = true;
    }
    console.log("handle button callback ends.");
}

const hellSaver = (saver) => {
    return new Promise((resolve, reject) => {
        let a = 4;
        setTimeout(() => {
            let b = 5;
            resolve({ a: a, b: b, c: saver });
        }, 1000);
    });
}
const handlePromise = () => {
    hellSaver(9).then((a) => {
        console.log("a: " + a.a + " b: " + a.b + " c: " + a.c);
    }).catch(() => {
        console.log("issue happened");
    });
}

const handleCallback = () => {
    console.log("Fall into Callback Hell.")
    let hell = 100;
    console.log(hell);
    setTimeout(() => {
        let hell = Math.abs(-1);
        console.log("In Hell Level 1: " + hell);
        setTimeout(() => {
            let hell2 = -Infinity;
            console.log("In Hell Level 2");
            setTimeout(() => {
                console.log("In Hell Level 3");
                setTimeout(() => {
                    console.log("In Hell Level 4");
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
    console.log("Handle Callback Ends.")
}

function handleThis() {
    console.log(this.toString());
    const obj = { a: "obj" };
    function h(b) {
        try {
            console.log("This: " + this.a);
        } catch {
            console.log("unknown this");
        }
        console.log("Parameter: " + b);

    }
    h("normal call");
    h.apply(obj, ["apply call"]);
    h.call(obj, "call call");
    let ach = h.bind(obj);
    ach("bind call");
}

let bindThis = { bind: "thisBond" };
const handleBindThis = handleThis.bind();

function handleClosure01() {
    for (let i = 0; i < 3; i++) {
        console.log("loop" + i + " start");
        setTimeout(() => {
            console.log(`timeout start ${i} ` + Date());
            alert(i)
            console.log(`timeout end ${i} ` + Date());
        }, 1000 + i);
        console.log(`loop ${i} end`);
    }
}

function handleClosure02() {
    function createBase(baseNumber) {
        return function (N) {
            // we are referencing baseNumber here even though it was declared
            // outside of this function. Closures allow us to do this in JavaScript
            return baseNumber + N;
        }
    }

    //true scope, closure.
    const tryBase = (s) => {
        var addSix = createBase(s);
        addSix(10);
        addSix(21);
    }

    //fake scope
    {
        var addSeven = createBase(7);
        addSeven(10);
        addSeven(21);
    }

    {
        let addEight = createBase(8);
        addEight(10);
        addEight(21);
    }

    tryBase(6);
    try { addSix(11); } catch {
        console.log("Error");
    }
    addSeven(12);
    addEight(13);
}

function handleClosure03() {
    function counter() {
        var _counter = 0;
        // return an object with several functions that allow you
        // to modify the private _counter variable
        return {
            add: function (increment) {
                _counter += increment;
                console.log("counter is " + _counter);
            },
            retrieve: function () {
                return 'The counter is currently at: ' + _counter;
            }
        }
    }

    // error if we try to access the private variable like below
    // _counter;

    // usage of our counter function
    var c = counter();
    c.add(5);
    c.add(9);

    // now we can access the private variable in the following way
    console.log(c.retrieve()); // => The counter is currently at: 14
}

function handleConfirm(){
    confirm("Are you a great programmer?");
}
function handlePrompt(){
    const identity = prompt("Are you a great programmer?");
    console.log(`Your programming identity is ${identity}.`);
}