// var person = {
//     fname : "Ranganath",
//     lname : "sk",
//     age : 35,
//     fullName: function () {
        
//         return this.fname + " " +this.lname;
//     } 
// }

// console.log("full name is: ", person.fullName());

var str = "     Please Locate where locate occures! "

// console.log("The positon of the first occurence is: ", str.indexOf("Hello"));

// console.log("The positon of the last occurence is: ", str.lastIndexOf("locate"));

// console.log("The positon of the first occurence from the index is: ", str.indexOf("locate", 15));

// console.log(str.slice(-11, -2));

var st = str.replace(/locate/ig, "hello");
console.log("String str is: ", str);

console.log("String st is: ", st);

console.log(st.trim());