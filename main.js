/* ============================================================== printing and alert ============================================== */

window.alert("nice to meet you 😀");

console.log(10); //tis is number//
console.log("10"); //tis is string//

/*document.write("hello my friends how are you now"); */ // it is used for printing not for programming function //

/*document.getElementById("hello1").innerHTML = "hello again"; */

/* ============================================================ Variables =============================================================== */

//CASE ONE
var x = 10;
var y = 20;
var z = x + y;
document.write(z);

// there is another way like this: 

/*document.getElementById("hello1").innerHTML = z; */



//CASE TWO
var m, l, f = 10;
// will give u undefined but last variable will give you tha value which you insert so give value for each variable name. 
document.write(m, l, f);

// so the write way is:

var jj, mm, ff;
jj = 10;
mm = 10;
ff = 10;
document.write(jj, mm, ff);

// All mathematical operations are allowed here so you can use (+ or / or * or -).

/* ============================================================= Functions ================================================================ */

// CASE ONE

function my_function() {
    var the_num1 = 10;
    var the_num2 = 20;
    var the_num3;
    return the_num3 = the_num1 * the_num2;

}

document.write(my_function());

/*document.getElementById("hello1").innerHTML = my_function(); */


//CASE TWO

var how_write_function = the_function1(4, 3);

function the_function1(a, b) {
    return a * b;
}

document.write(how_write_function);
/*document.getElementById("hello1").innerHTML = how_write_function;*/


//another example

/*
var w = myname("ahmed", "mostafa");

function myname(aaa, bbb) { return aaa + " " + bbb; }
document.write(" " + w);

*/

//CASE THREE

function change_paraghraph() {
    return document.getElementById("hello1").innerHTML = "hello😁😁😁😁😁✌";
}

// when we call the name of function will change the content of <p> </p> to new content.

/* change_paraghraph(); */


//another example

function change_new_paraghraph() {
    var the_title = "hello my name is shady";
    return document.getElementById("hello1").innerHTML = the_title;
}

/*change_new_paraghraph();*/

/* ================================================================= OBJECTS ========================================================= */

//CASE ONE
/*
var car = { name: "fiat", color: "red", price: 28000 };
document.write(car.name);
document.write(car.color);
document.write(car.price);

//another way

/* document.write(car["name"]); */

//another way

/*
var the_name_of_car = car["name"];
document.write(the_name_of_car);
*/


//CASE TWO

var cars = { name: "fiat", price: 2500, my_speed: function() { return this.name + " " + this.price; } };

var x = cars.my_speed();

/*document.getElementById("hello1").innerHTML = x;*/
document.write(cars.my_speed());

/* ================================================================ THE END ============================================================ */

//NOTE: any thing between /* */ is a code so if you want to make this code work just delete /* */ but any thing between // is just text for calrification.

//  ملحوظة: اي سطر كود بين علامة النجمة والسلاش يعتبر كود عشان لو هتعدلو عليه لازم تمسحو النجمتين طب لو من غير النجمتين لا فده نص عادي مش كود

/* ==================================================================تحياتي 🙂============================================================ */