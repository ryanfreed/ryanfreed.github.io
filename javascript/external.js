// document.write("Where is my JS Code?")
// window.alert(5 + 6)
// document.write('<h1>A heading</h1>');
// document.write('<p>A sentence.</p>');

// let x = "web";
// let y = "mapping";
// let out = x + y; 
// document.write(out);

// let user_name = window.prompt("Please enter your name: ", 
//                              "type your name here");
// document.write(user_name);

// let sign = window.prompt();
// sign = prompt();
// sign = window.prompt('Are you feeling lucky');
// sign = window.prompt('Are you feeling lucky', 'sure');

// let x = 22;
// let y = 33;
// document.writeln(x + y);
// document.writeln("<br>");
// document.writeln(x += 33);

// document.writeln("<button onclick='condition()'>Conditional Test </button>")

// function condition() 
// {
//    let x = confirm("Are you sure you want to proceed?");

//    if(x) {
//        document.writeln("You chose Okay!");
//    }

//    else {
//        document.writeln("You chose Cancel!");
//    }
// }

// let arr = ["Joe", "April", "Mark", "Sara"];

// for (var i=0; i < arr.length; i++)

// {
    // document.writeln(arr[i], "<br>");
// }


// let askName = window.prompt("Please enter your name. ");
// document.write(`Hello, welcome to my webpage ${askName}!`);

function welcome() {
    let a = "Please enter your name.";
    let b = "Type your name here.";

// A prompt box is used to prompt users to input a
// value before entering a page
user_name = window.prompt(a, b);

message = "<hi>Hello, welcome to my webpage, " + user_name + 
"!</h1>"

return message

}

document.write(welcome());
