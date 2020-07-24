//i have commented question 9 of 14-16
//it was working properly but because of this question other question was being
//effected

//chapter 1

// 1
alert("Hello Everyone!");


// 2
alert("Error! Please enter a valid password");

// 3
alert("Welcome to JS Land...\nHappy Coding!");

// 4
alert("Welcome to JS Land...");
alert("Happy Coding!");

// 5
console.log("Hello... I can run JS thriugh web browser's console");

// chapter 2

// 1
var username;


//2
var myname = "Gul Noureen";

//3
// (a)
var message;

// (b)
message = "Hello World";

// (c)
alert(message);

// 4
var name = "Jhone Doe";
alert(name);
var age = 15;
alert(age + " years old");
var skill = "Certified Mobile Application Developement";
alert(skill);

//5
var p = "PIZZA";
alert(p.slice(0,5) + "\n" + p.slice(0,4) + "\n" + p.slice(0,3) + "\n" + p.slice(0,2) + "\n" + p.slice(0,1));

//6
var email = "noureeng334@gmail.com";
alert("My email address is "+ email);

//7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

//8
document.write("Yah! I can write HTML content through JavaScript");

//9
var s = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"; 
alert(s);


//chapter 3

//1
var age = 20;
alert("I am " + age + " years old");

//2
var N = 14;
alert("You have visited this site " + N + " times");

//3
var birthYear = 1999;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is number");

//4
var n = "John Doe";
var title = "T-shirts";
var q = 5;
document.write("<br>" + "<br>" + n + " ordered " + q + "\n" + title + " on XYZ Clothing store");

//chapter 4

//1
var a, b, c;

//2
//legal
var noor, noor1, $noor, nOOr, gNoreen;
alert(nOOr);

//illegal

// var 2m, ^noor, -noor, var, !import;

//3
// (a)
document.write("<b>" + "Rules for naming JS variables" + "</b>" + "<br>" + "<br>");
//(b)
document.write("Variable names can only contain letters, numbers, $, and _. For example $my_1stVariable");
//(c)
document.write("<br>" + "Variables must begin with a letter, $ or _. For example: $name, _name or name");
//(d)
document.write("<br>" + "Variable names are case sensitive");
//(e)
document.write("<br>" + "Variable names should not be JS keywords");


//chapter 5

//1
var a = +prompt("Enter 1st number: ");
var b = +prompt("Enter 2st number: ");

var c = a+b;

document.write("Sum of " + a + " and " +b+ " is " + c);

//2
var s = a-b;
document.write("<br>"+"<br>"+"Difference of " + a + " and " +b+ " is " + s);

var m = a * b;
document.write("<br>" + "Product of " + a + " and " +b+ " is " + m);

var d = b/a;
document.write("<br>" + "Quotiant of " + b + " and " +a+ " is " + d);

var mod = a%b;
document.write("<br>" + "Remainder of " + a + " and " +b+ " is " + mod);

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

//3
//(a)
var v;
//(b)
document.write("<br>"+"<br>"+"<br>"+"<br>"+"value after variable declaration is: " + v);
//(c)
v = 10;
//(d)
document.write("<br>"+"Initial value: " + v);
//(e)
++v;
//f
document.write("<br>"+"Value after increment: " + v);
v = v + 7;
//g
document.write("<br>"+ "Value after additoin is: " + v);
//i
--v;
//j
document.write("<br>"+ "Value after decrement: " + v);
//k
v = v % 3;
document.write("<br>"+ "The remainder is: " + v);

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

//4
var ticket = 600;
ticket = ticket * 5;
document.write("<br>"+"<br>"+"<br>"+"<br>"+"Total cost to buy 5 tickets to a movie is " + ticket + " PKR");

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

//5
var num = +prompt("Enter number to have a table: ");
document.write("<br>"+"<br>"+"<br>"+"<br>");
for(var i=1; i<=10; i++)
{
    document.write(num + "x" + i + "=" + num*i);
    document.write("<br>");
}

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

//6
//(a)
 var t1 = 25;
 //(b)
 var t2 = (t1 * 9/5) + 32;
 document.write("<br>" + t1 + "&#8451" + " is " + t2 + "&#8457");
//(c)
var t3 =70;
//(d)
var t4 = (t3 - 32) * 5/9;
document.write("<br>" + t3 + "&#8457" + " is " + t4 + "&#8451");

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");


//7
//(a)
var p1 = 650;
var p2 = 100;
var q1 = 3;
var q2 = 7;

document.write("<br>" + "<h1>" + "Shopping Cart" + "</h1>" + "<br>" + "<br>" + "<br>")

var ans = (p1 * q1) + (p2 * q2) + 100;

document.write("<br>" + "Price of item 1 is " + p1);
document.write("<br>" + "Quantity of item 1 is " + q1);
document.write("<br>" + "Price of item 2 is " + p2);
document.write("<br>" + "Quantity of item 2 is " + q1);
document.write("<br>" + "Shipping charges 100");

document.write("<br>" + "<br>" + "Total cost of your order is " + ans);


document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

//8

document.write("<br>" + "<h1>" + "Marks Sheet" + "</h1>" + "<br>" + "<br>" + "<br>");

var total = 980;
var obtained = 804;
var perc = 804 / 980 * 100;

document.write("Total marks: " + total);
document.write("<br>" + "Marks obtained: " + obtained);
document.write("<br>" + perc);


document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");


//9
document.write("<br>" + "<h1>" + "Currency in PKR" + "</h1>" + "<br>" + "<br>" + "<br>");

var dollar = 10;
var riyal = 25;

var us = 104.80;
var saudi = 28;
curr = (us * dollar) + (saudi * riyal);
document.write("<br>" + "Total Currency in PKR; " + curr);

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");




//10

var num2 = 20;
num2 = num2 +5 * 10 /2;


//11
//(a)
var y = 2020;
//(b)
var byear = 1999;
//(c)
ans = y - byear;
document.write("<br>" + "<h1>" + "Age calculator" + "</h1>");
document.write("<br>" + "<br>" + "<br>" + "<br>" + "Current Year: " + y);
document.write("<br>" + "Birth Year: " + byear);
document.write("<br>" + "Your Age: " + ans);

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");



//12
//(a)
var radius = 20;
var circum = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write("<br>" + "<h1>" + "The Geometrizer" + "</h1>");
document.write("<br>" + "<br>" + "<br>" + "<br>" + "Radius of a circle: " + radius);
document.write("<br>" + "The circumference is: " + circum);
document.write("<br>" + "The area is: " + area);


document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");


//13
//(a) 
var snack = "slanty";
//(b)
var age2 = 20;
//(c)
var m_age = 60;
//(d)
var amount = 3;
//(e)
ans = (60 - 20) * 3;
document.write("<br>" + "<h1>" + "The Lifetime Supply Calculator" + "</h1>");
document.write("<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "Favourite Snack: " + snack);
document.write("<br>" + "Current Age: " + age2);
document.write("<br>" + "Estimated Maximum Age: " + m_age);
document.write("<br>" + "Amount of snacks per day: " + amount);
document.write("<br>" + "You will need " + ans + " " + snack + " to last you untill the ripe old age of " + m_age);

document.write("<br>"+"<br>"+"-----------------------------------------------------------" + "<br>"+"<br>"+"<br>");

//chapter 6-9

//1
var a = +prompt("Enter number: ");
document.write("Result" + "<br>" + "The value of a is: "+ a);

document.write("<br>" + "<br>" + "'''''''''''''''''''''''''''''''''");

++a;
document.write("<br>" + "<br>" + "<br>" + "The value of ++a is: "+ a);

// a++;
document.write("<br>" + "<br>" + "<br>" + "The value of a++ is: "+ a++);
document.write("<br>" + "Now the value of a is: "+ a);

--a;
document.write("<br>" + "<br>" + "<br>" + "The value of --a is: "+ a);
document.write("<br>" + "Now the value of a is: "+ a);

// a--;
document.write("<br>" + "<br>" + "<br>" + "The value of a-- is: "+ a--);
document.write("<br>" + "The value of a is: "+ a);

document.write("<br>" + "<br>" + "-------------------------------------------------------------" + "<br>" + "<br>" + "<br>");

//2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<br>"+"<br>"+"<br>"+"<br>"+"a is " + a);
document.write("<br>"+"b is " + b);
document.write("<br>"+"result is " + result);


document.write("<br>" + "<br>" + "-------------------------------------------------------------" + "<br>" + "<br>" + "<br>");

//3
var name = prompt("Enter your name: ");
document.write("Hello " + name);


document.write("<br>" + "<br>" + "-------------------------------------------------------------" + "<br>" + "<br>" + "<br>");



//4 wasn't given
//5
var num2 = 0;
num2 = +prompt("ENter number for table: ");

if(num2 === 0)
{
    num2 = 5;
}

for(var i=1; i<=10; i++)
{
    document.write(num2 + "x" + i + "=" + num2*i);
    document.write("<br>");
}


document.write("<br>" + "<br>" + "-------------------------------------------------------------" + "<br>" + "<br>" + "<br>");


//6
//(a)
var s1 = prompt("Enter subject1 name: ");
var s2 = prompt("Enter subject2 name: ");
var s3 = prompt("Enter subject3 name: ");
//(b)
var total = 100;
//(c)
var o1 = +prompt("Obtained marks for subject1: ");
//(d)
var o2 = +prompt("Obtained marks for subject2: ");
var o3 = +prompt("Obtained marks for subject3: ");


document.write("<br>" + "<br>" + "Subject\tTotal Marks\tObtained Marks\tPercentage" + "</b>");
document.write("<br>" + s1 + "\t" + "100" + "\t" + o1 + "    " + o1 + "%");
document.write("<br>" + s2 + "\t" + "100" + "\t" + o2 + "\t" + o2 + "%");
document.write("<br>" + s3 + "\t" + "100" + "\t" + o3 + "\t" + o3 + "%");

var ans1 = 01 + 02 + o3;
var ans2 = (ans1 / 300)*100;

document.write("<br>" + "<br>" + "\t" + "300" + "\t" + ans1 + "\t" +ans2+"%");

//chapter 9-11
//1

var city = prompt("Enter city name: ");
city = city.toLocaleLowerCase;
if(city === "karachi")
{
    alert("Welcome to city of lights");
}


//2

var gender = prompt("Enter your gender: ");
gender = gender.toLocaleLowerCase();

if(gender === "male")
{
    alert("Good Morning Sir");
}
else if(gender === "female")
{
    alert("Good Morning Ma'am");
}

//3
var signal = prompt("Enter color for signal:");
signal = signal.toLocaleLowerCase();

if(signal === "red")
{
    alert("Must Stop");
}
else if(signal === "yellow")
{
    alert("Ready to move");
}
else if(signal === "green")
{
    alert("Move now");
}

//4
var fuel = +prompt("Enter the fuel in litres: ");

if(fuel < 0.25)
{
    alert("Please refill the fuel in your car")
}

//5
//a
var a = 4;
if(++a === 5)
alert("given condition for variable a is true")
//message is displayed


//b
var b = 82;
if(b++ === 83)
alert("give condition for variable b is true");
//message will not be displayed


//c
var c = 12;
if(c++ === 13)
{
    alert("condition 1 is true")
}

if(c === 13)
{
    alert("condition 2 is true");
}

if(++c < 14)
{
    alert("condition 3 is true");
}

if(c === 14)
{
    alert("condition 4 is true");
}

//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if(totalCost === laborCost+materialCost)
{
    alert("The cost equals");
}


//e
if(true)
{
    alert("true")

}

if(false)
{
    alert("false");
}

//f
if("car" < "cat")
{
    alert("car is smaller than cat")
}


document.write("<br>" + "<br>" + "<br>" + "------------------------------------------------------------------------------------------" + "<br>" + "<br>" + "<br>" + "<br>")


//6

document.write("<h1>" + "Marks Sheet" + "</h1>" + "<br>" + "<br>" + "<br>")

var tot = +prompt("Enter total marks: ");
var obt = +prompt("Enter obtained marks: ");

var perc = obt/tot;
perc = perc*100;

if(perc >= 80)
{
    document.write("Total marks: " + tot + "<br>" + "Marks obtained: " + obt + "<br>" + "Percentage: " + perc + "%" + "<br>" + "Grade: A-one" + "<br>" + "Remarks: " + "Excellent"); 
}
else if(perc >= 70)
{
    document.write("Total marks: " + tot + "<br>" + "Marks obtained: " + obt + "<br>" + "Percentage: " + perc + "%" + "<br>" + "Grade: A" + "<br>" + "Remarks: " + "Good"); 
}
else if(perc >= 60)
{
    document.write("Total marks: " + tot + "<br>" + "Marks obtained: " + obt + "<br>" + "Percentage: " + perc + "%" + "<br>" + "Grade: B" + "<br>" + "Remarks: " + "You need to improve"); 
}
else{
    document.write("Total marks: " + tot + "<br>" + "Marks obtained: " + obt + "<br>" + "Percentage: " + perc + "%" + "<br>" + "Grade: Fail" + "<br>" + "Remarks: " + "Sorry"); 
}

document.write("<br>" + "<br>" + "<br>" + "------------------------------------------------------------------------------------------" + "<br>" + "<br>" + "<br>" + "<br>")


//7

var num = Math.random() * 10;
num = Math.floor(num);

var num2 = +prompt("Guess the secret number:");
if(num2 === num)
{
    alert("Bingo! Correct answer");
}

else if(num2 + 1 === num)
{
    alert("Close enough to the correct answer");
}

//8

var num3 = +prompt("Enter the number to check if it is divisible by 3: ");
if(num3%3 === 0)
{
    alert("Number is divisible by 3");
}
else{
    alert("Number is not divisible by 3");
}

//9

var num4 = +prompt("Enter number to check even or odd: ");
if(num4%2 === 0)
{
    alert("Number is even");
}
else{
    alert("Number is odd");
}

//10

var temp = +prompt("Enter temperature: ");

if(temp > 40)
{
    alert("It is too hot outside.");
}
else if(temp > 30)
{
    alert("The weather today is Normal.")
}
else if(temp > 20)
{
    alert("Today's Weather is cool.")
}
else if(temp > 10)
{
    alert("OMG! Today's weather is so Cool");
}

//11

var n1 = +prompt("Enter 1st number in calculator: ");
var n2 = +prompt("Enter 2nd number in calculator: ");
var opt = prompt("Enter the operator(+,-,*,/,%): ");

if(opt === "+")
{
    alert(n1+n2);
}
else if(opt === "-")
{
    alert(n1 - n2);
}
else if(opt === "*")
{
    alert(n1*n2);
}
else if(opt === "/")
{
    alert(n1/n2);
}
else if(opt === "%")
{
    alert(n1/n2*100 + "%");
}

//chapter 12-13
//1

var char = prompt("Enter number or letter: ");
if(char.charAt(0) >= 65 && char.charAt(0) <= 90)
{
    alert("Uppercase letter");
}
else if(char.charAt(0) >= 95 && char.charAt(0) <=122)
{
    alert("Lowercase letter");
}

//2
var n3 = +prompt("Enter 1st integer to check larger: ");
var n4 = +prompt("Enter 2nd integer to check larger: ");

if(n3 === n4)
{
    alert("Both numbers are equal");
}
else if(n3 > n4)
{
    alert("1st number " + n3 + " is larger");
}
else{
    alert("2nd number " + n4 + " is larger");
}

//3
var n5 = +prompt("Enter number to check positive or negative: ");
if(n5 > 0)
{
    alert("Number is positive");
}
else if(n5 < 0)
{
    alert("Number is negative");
}
else{
    alert("Number is zero");
}

//4
var char2 = prompt("Enter an alphabet; ");

if(char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u")
{
    alert("true");
}
else{
    alert("false");
}

//5
var pw = "noor3";
var pw2 = prompt("Enter your password: ");

if(pw2 === pw)
{
    alert("Correct! The password you entered matches the original password");
}
else if(pw2 === "")
{
    alert("Please enter your password");
}
else{
    alert("Incorrect password");
}

//6
var greeting;
var hour = 13;

if(hour < 18)
{
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}

//7

var t = +prompt("Enter time in 24 hours formate(1200): ")

if(t === 0000)
{
    alert("12am");
}
else if(t === 0100)
{
    alert("1am");
}
else if(t === 0200)
{
    alert("2am");
}
else if(t === 0300)
{
    alert("3am");
}
else if(t === 0400)
{
    alert("4am");
}
else if(t === 0500)
{
    alert("5am");
}
else if(t === 0600)
{
    alert("6am");
}
else if(t === 0700)
{
    alert("7am");
}
else if(t === 0800)
{
    alert("8am");
}
else if(t === 0900)
{
    alert("9am");
}
else if(t === 1000)
{
    alert("10am");
}
else if(t === 1100)
{
    alert("11am");
}
else if(t === 1200)
{
    alert("12pm");
}
else if(t === 1300)
{
    alert("1pm");
}
else if(t === 1400)
{
    alert("2pm");
}
else if(t === 1500)
{
    alert("3pm");
}
else if(t === 1600)
{
    alert("4pm");
}
else if(t === 1700)
{
    alert("5pm");
}
else if(t === 1800)
{
    alert("6pm");
}
else if(t === 1900)
{
    alert("7pm");
}
else if(t === 2000)
{
    alert("8pm");
}
else if(t === 2100)
{
    alert("9pm");
}
else if(t === 2200)
{
    alert("10pm");
}
else if(t === 2300)
{
    alert("11pm");
}
else{
    alert("Enter correct time");
}

if(t >= 0000 && t < 1200)
{
    alert("Good morning!");
}
else if(t >= 1200 && t < 1700)
{
    alert("Good afternoon!");
}
else if(t >= 1700 && t < 2100)
{
    alert("Good evening");
}
else if(t >= 2100 && t < 2359)
{
    alert("Good night");
}

//chapter 14-16
//1
 var arr22 = []
 arr22 = new Array();


//2
 var arr11 = new Array();

 //3
 var a101=["String","Array"]

 //4
 var a102=[1,2,3,4,5]

 //5
 var a103=[true,false,false,true]

 //6
 var a104=[true,"false",1,2]
 
 //7
 var a105=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];

 console.log("Qualification :")
 for (var i = 0; i < a105.length; i++) {
     
 console.log(i+1 ,a105[i]);
     
 }

 //8
 var sc = [500, 453, 408];
 var name2 = ["Noureen", "Kanwal", "sanam"];
 for (var i = 0; i < 3; i++) {
     console.log("Score of ",name2[i]," is ",sc[i],".Percentage: ",sc[i]/500*100,"%");    
     
 }
 
 //9


//  var col222=["red","blue","green","yellow"];
//  var x = prompt("Enter a colour in beginning: ");
//  document.write("Before"+"<br>");
//  for(var i =0; i<=col222.length-1; i++)
//  {
//      document.write(col222[i]+"<br>");
//  } 
//  col222.unshift(x);
//  document.write("after"+"<br>");
//  for(var i =0; i<=col222.length-1;i++)
//  {
//      document.write(col222[i]+"<br>");
//  } 



// 10
var sc3=[230,435,453,234,231];
sc3.sort();
console.log(sc3);

//11
var wordList =["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var wordList2=wordList.slice(2,4);
console.log(wordList);
console.log(wordList2);

// 12
var arr12=["This","is","my","cat"];
var arr13=arr12.join(" ");
console.log(arr13);

13
var arr14=[];
arr14.push("Keyboard");
arr14.push("Mouse");
arr14.push("Printer");
arr14.push("Monitor");
console.log("Out: ")
console.log(arr14[0]);
console.log(arr14[1]);
console.log(arr14[2]);
console.log(arr14[3]);

// 14
var arr15=[];
arr15.push("Keyboard");
arr15.push("Mouse");
arr15.push("Printer");
arr15.push("Monitor");
arr15.reverse();
console.log("Out: ")
console.log(arr15[0]);
console.log(arr15[1]);
console.log(arr15[2]);
console.log(arr15[3]);
 


document.write("<br>" + "<br>" + "<br>" + "------------------------------------------------------------------------------------------" + "<br>" + "<br>" + "<br>" + "<br>")



// 15
var arr16=["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
document.write(arr16[0]);
document.write("<br>");
document.write(arr16[1]);
document.write("<br>");
document.write(arr16[2]);
document.write("<br>");
document.write(arr16[3]);
document.write("<br>");
document.write(arr16[4]);
document.write("<br>");
document.write(arr16[5]);


//chapter 17-20
//1
var Arr17=[[1,2],[3,4],[5,6]];

//2
var Arr18=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

//3
for (let i = 1; i < 11; i++) {
    console.log(i);
     }

//4
var num5=prompt("Enter Number");
var len=prompt("Enter Length");

for (var i = 1; i <= len; i++) {
    console.log(num5," * ",i," = ",num5*i);
}

//5
var fruits=["apple","banana","mango","orange","strawberry"]
for (var i = 0; i < fruits.length; i++) {
    console.log("Element at Index ",i," is ",fruits[i]);
    
}

//6
console.log("Counting : \n");
var R="";
for (var i = 1; i < 16; i++) {
    R=R+i;   
    R = R+", "
}
console.log(R);

R="";
console.log("Reversed Counting : \n");
for (var i = 10; i > 0; i--) {
    R = R+i;   
    R = R+", "
}
console.log(R);

R="";
console.log("Even Counting : \n");
for (var i = 0; i <= 20; i++) {
    if (i%2==0) {
    R = R+i;   
    R = R+", ";   
    }
}
console.log(R);

R="";
console.log("Odd Counting : \n");
for (var i = 0; i <= 20; i++) {
    if (i%2!=0) {
    R = R+i;   
    R = R+", ";   
    }
}
console.log(R);

R="";
console.log("Series : \n");
for (var i = 2; i <= 20; i++) {
    if (i%2==0) {
    R = R+i;   
    R = R+"k, ";   
    }
}
console.log(R);

//7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var B=prompt("What u want in our Bakery"); 
var flag=0;
for (var i = 0; i < A.length; i++) {
    if (A[i]==B) {
        console.log(B," is available at index ",i);
        flag=1;
        break
    } 
}
if (flag==0) {
    console.log(B," is not available at out store");
}

//8
var A2 = [24, 53, 78, 91, 12];
var alpha=0;
for (var i = 0; i < A2.length; i++) {
    if (A2[i]>alpha) {
        alpha=A2[i]
    }
    
}
console.log("The Largest Number is ",alpha);

//9
var A3 = [24, 53, 78, 91, 12];
var alpha2=1000;
for (var i = 0; i < A3.length; i++) {
    if (A3[i]<alpha2) {
        alpha2=A3[i]
    }
    
}
console.log("The Smallest Number is ",alpha2);

//10
var R2="";
for (var i = 1; i <= 100; i++) {
    if (i%5==0) {
        R2=R2+i;   
        R2=R2+", "   
    }
}
console.log(R2);

//chapter 21 - 25
//1
var f = prompt("Enter first name: ");
var l = prompt("Enter last name: ");

alert("Hello " + f + " " + l);

//2
var model = prompt("Enter your favourite mobile model: ");
var len = model.length;
alert("My favourite phone is: " + model + "\n" + "Length of string: "+len);

//3
var pak = "Pakistani";
var index;
for(var i=0; i<pak.length; i++)
{
    if(pak[i] === 'n')
    {
        index = i;
        break;
    }
}

alert("String: " + pak + "\n" + "Index of 'n' : " + index);

//4
var s = "Hello World";
var index2;
for(var i=s.length-1; i>=0; i--)
{
    if(s[i] === 'l')
    {
        index2 = i;
        break;
    }
}

alert("String: " + s + "\n" + "Last index of 'l' : " + index2);

//5
var pak2 = "Pakistani";
var index3;
for(var i = 0; i<4; i++)
{
    index3 = pak2[i];
}
alert("String: " + pak2 + "\n" + "Character at index 3: " + index3);

//6
var f2 = prompt("Enter first name: ");
var l2 = prompt("Enter last name: ");
var name = f2 + " " + l2;

alert("Hello " + name);

//7
var s2 = "Hyderabad";
s2 = s2.replace("Hyder","Islam");
document.write(s2);

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");

//8
var message = "Ali and Sami are best friends. They play cricket and football together."; 

message = message.replace(/and/g ,"&");

document.write("<br>" + "<br>" + "<br>" + "<br>" + message);


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//9
var s3 = "472";
document.write("<br>" + "<br>" + "<br>" + "<br>" + "Value: " + s3 + "<br>" + "Type: " + "string");
s3 = parseInt(s3);
document.write("<br>" + "Value: " + s3 + "<br>" + "Type: " + "number");


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");



//10
var s4 = prompt("Enter string: ");
document.write("<br>" + "<br>" + "<br>" + "<br>" + "Value: " + "User input: " + s4 );
s4 = s4.toUpperCase();
document.write("<br>" + "Value: " + "Upper case: " + s4 );



document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//11
var s5 = prompt("Enter string: ");
document.write("<br>" + "<br>" + "<br>" + "<br>" + "User input: " + s5 );
var first = s5.slice(0,1);
first = first.toUpperCase();
s5 = first + s5.slice(1);
document.write("<br>" + "Title case: " + s5);


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");

//12
var num = 35.36;
document.write("<br>" + "<br>" + "<br>" + "<br>" + "Number: " + num );
num = num.toString();
num = num.slice(0,2) + num.slice(3);
document.write("<br>" + "Result: " + num );

//13
var s6 = prompt("Enter your name: ");
for(var i=0; i<s6.length; i++)
{
    if(s6.charCodeAt(i) === 33 || s6.charCodeAt(i) === 44 || s6.charCodeAt(i) === 46 || s6.charCodeAt(i) === 64)
    {
        alert("Please enter valid username");
    }
}

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var n = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
n = n.toLowerCase();
for(var i=0; i<A.length; i++)
{
    if(A[i] === n)
    {
        document.write("<br>" + "<br>" + "<br>" + "<br>" + n + " is " + "<b>" + "available " + "</b>" + "at index " + i + " in our bakery");
    }
}



//15
var password = prompt("Enter password: ");
password = password.toLowerCase();
var flag = -1;
var flag2 = -1;
var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arr2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

if(password.length < 6)
{
    document.write( "<br>" + "Password cannot be of less than 6 characters Please enter a valid password!");
}
else if(password.slice(0,1) === "0" || password.slice(0,1) === "1" || password.slice(0,1) === "2" || password.slice(0,1) === "3" || password.slice(0,1) === "4" || password.slice(0,1) === "5" || password.slice(0,1) === "6" || password.slice(0,1) === "7" || password.slice(0,1) === "8" || password.slice(0,1) === "9")
{
    document.write( "<br>" + "Password cannot begin with a number Please enter a valid password!");
}


for(var i=0; i<password.length; i++)
{
    for(var j=0; j<arr.length; j++)
    {
        if(password[i] === arr[j])
        {
            flag2 = 0;
        }
        else if(password[i] === arr2[j])
        {
            flag = 0;
            break;
        }
    }
}

if(flag2 === -1)
{
    document.write( "<br>" + "Password must contain alphabets Please enter a valid password");
}

if(flag === -1)
{
    document.write( "<br>" + "Password must contain a number Please enter a valid password");
    
}

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//16
var university = "University of Karachi";

document.write("<br>" + "<br>" + "<br>" + "<br>")
university = university.split("");
for(var i = 0; i<university.length; i++)
{
    document.write("<br>" + university[i]);
}




document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");



//17
var s1 =  prompt("Enter here: ");
var v = s1[s1.length-1];
document.write("<br>" + "<br>" + "<br>" + "<br>" + "User input: " + s1 + "<br>" + "Last character of input: " + v);



document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");



//18  
var text = "The quick brown fox jumps over the lazy dog";
var a = 0;

document.write("<br>" + "<br>" + "<br>" + "<br>" + "Text: " + text);

text = text.toLowerCase();

for(var i=0; i<text.length; i++)
{
    if(text.slice(i, i+3) === "the")
    {
        a++;
    }
}

document.write( "<br>" + "There are " + a + " occurance(s) of 'the' ");


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//chapter 26 - 30

//1 (a)
var b = +prompt("Enter a positive integer: ");
while(1)
{
    if(b < 1)
    {
        b = +prompt("Enter a positive integer: ");
    }
    else
    {
        break;
    }
}
document.write("<br>" + "<br>" + "<br>" + "<br>" + "number: " + b);

var c = Math.round(b);
document.write("<br>" + "round off value: " + c);

var d = Math.floor(b);
document.write("<br>" + "floor value: " + d);

var e = Math.ceil(b);
document.write("<br>" + "ceil value: " + e);


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//2
var f = +prompt("Enter a negative floating point number: ");
while(1)
{
    if(f >= 0)
    {
        f = +prompt("Enter a negative floating point number: ");
    }
    else
    {
        break;
    }
}
document.write("<br>" + "<br>" + "<br>" + "<br>" + "number: " + f);

var g = Math.round(f);
document.write("<br>" + "round off value: " + g);

var h = Math.floor(f);
document.write("<br>" + "floor value: " + h);

var i = Math.ceil(f);
document.write("<br>" + "ceil value: " + i);


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//3
var a2 = +prompt("Enter number to have absolute value: ");
if(a2 < 0)
{
    var a3 = a2*(-1);
    document.write("<br>" + "<br>" + "<br>" + "<br>" + "The absolute value of " + a2 + " is " + a3);
}
else 
{
    document.write("<br>" + "<br>" + "<br>" + "<br>" + "The absolute value of " + a2 + " is " + a2);
}


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//4
var a3 = Math.random();
a3 = (a3 * 6) + 1;
a3 = Math.floor(a3);
document.write("<br>" + "<br>" + "<br>" + "<br>" + "random dice value: " + a3);

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");

//5
var a4 = Math.random();
a4 = (a4 * 2) + 1;
a4 = Math.floor(a4);
document.write("<br>" + "<br>" + "<br>" + "<br>" + a4 + "<br>" + "random coin value: ");

if(a4 === 2)
{
    document.write("Heads");
}
else if(a4 === 1)
{
    document.write("Tails");
}

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");

//6
var a5 = Math.random();
a5 = (a5 * 100) + 1;
a5 = Math.floor(a5);

document.write("<br>" + "<br>" + "<br>" + "<br>" + "random number between 1 and 100: " + a5);

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//7
var a6 = prompt("Enter your weight in kilograms");
var a7 = parseFloat(a6);
//a7 = Math.random() * a7;
document.write("<br>" + "<br>" + "<br>" + "<br>" + "The weight of user is " + a7 + " kilograms");


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");


//8
var a8 = Math.random();
a8 = (a8 * 10) + 1;
a8 = Math.floor(a8);
var a9 = +prompt("Enter a number: ");

if(a9 === a8)
{
    document.write("<br>" + "<br>" + "<br>" + "<br>" + "Random Number: " + a8 + "<br>" + "You entered: " + a9);
    document.write("<br>" + "Congratulation!");
}
else{
    document.write("<br>" + "<br>" + "<br>" + "<br>" + "Random Number: " + a8 + "<br>" + "You entered: " + a9);
    
}




//chapter 30 - 34
//1
document.write("<br>" + "<br>" + "<br>");

var a1000 = new Date();
document.write(a1000);

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");


//2
var a16 = new Date();
var a17 = a16.getMonth();
if(a17 === 0)
{
    document.write("Current month: " + "January");
}
else if(a17 === 1)
{
    document.write("Current month: " + "February");
}
else if(a17 === 2)
{
    document.write("Current month: " + "March");
}
else if(a17 === 3)
{
    document.write("Current month: " + "April");
}
else if(a17 === 4)
{
    document.write("Current month: " + "May");
}
else if(a17 === 5)
{
    document.write("Current month: " + "June");
}
else if(a17 === 6)
{
    document.write("Current month: " + "July");
}
else if(a17 === 7)
{
    document.write("Current month: " + "August");
}
else if(a17 === 8)
{
    document.write("Current month: " + "September");
}
else if(a17 === 9)
{
    document.write("Current month: " + "October");
}
else if(a17 === 10)
{
    document.write("Current month: " + "November");
}
else if(a17 === 11)
{
    document.write("Current month: " + "December");
}


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");


//3
var a18 = new Date();
a18 = a18.getDay();

if(a18 === 0)
{
    document.write("Today is " + "Sun");
}
else if(a18 === 1)
{
    document.write("Today is " + "Mon");
}
else if(a18 === 2)
{
    document.write("Today is " + "Tue");
}
else if(a18 === 3)
{
    document.write("Today is " + "Wed");
}
else if(a18 === 4)
{
    document.write("Today is " + "Thu");
}
else if(a18 === 5)
{
    document.write("Today is " + "Fri");
}
else if(a18 === 6)
{
    document.write("Today is " + "Sat");
}


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");


//4
if(a18 === 6)
{
    document.write("It's Fun day");
}
else if(a18 === 0)
{
    document.write("It's Fun day");
}





document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//5
var a19 = new Date();
a19 = a19.getDate();

if(a19 < 16)
{
    document.write("First fifteen days of the month");
}
else{
    document.write("Last days of the month");
}

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//6
document.write("Current Date: " + a1000);
var a20 = new Date();
var a21 = a20.getTime();
document.write("<br>" + "Elapsed milliseconds since January 1, 1970: " + a21);
var a22 = a20.getTime()/60;
document.write("<br>" + "Elapsed Minutes since January 1, 1970: " + a22);


//7
var a23 = new Date();
a23 = a23.getHours();
if(a23 >= 0 && a23 <= 11)
{
    alert("It's AM");
}
else
{
    alert("It's PM");
}


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//8
var laterDate = new Date("December 31, 2020");
document.write(laterDate);



document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");


//9
var a24 = new Date("June 18, 2015");
a24 = a24.getTime()/(1000 *60 *60 *24);
a24 = Math.round(a24);
alert(a24 + "days have passed since 1st Ramadan, 2015");

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");


//10
var ref=new Date("June 18,2015")
var newdate=new Date("January 01,2015")
ref=ref.getTime()
ref=ref/(1000)
newdate=newdate.getTime()
newdate=newdate/(1000)
var diff=ref-newdate
Diff=Math.round(diff)
console.log("On the Reference Date Jun 18 ,2015 "+diff+" seconds had passed since the beginning og 2015")

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");

//11
var mydate=new Date()
console.log("Current Date: "+mydate)
var hour=mydate.getHours();
mydate.setHours(hour+1)
console.log("1 Hour after, it was "+mydate)


document.write("<br>" + "<br>" + "<br>");


//12
var date=new Date()
console.log("Current Date: "+date)
var year=date.getFullYear();
date.setFullYear(year-100)
console.log("100 years back, it was "+date)


document.write("<br>" + "<br>" + "<br>");


//13
var date=new Date()
var age=+prompt("Enter Your Age")
console.log("Your Age is :"+age)
var year=date.getFullYear()
date.setFullYear(year-age)
year=date.getFullYear()
console.log("Your birth year is :"+year)


document.write("<br>" + "<br>" + "<br>");


//14
var Name=prompt("Enter Your Name")
var units=+prompt("Enter Number of units")
var charges=+prompt("Enter Charges per Unit")
var latecharges=350
latecharges=latecharges.toFixed(2)
var netamt=units*charges
netamt=netamt.toFixed(2)
netamt=Number(netamt)
latecharges=Number(latecharges)
var grsamt=netamt+latecharges
var mnt=new Date()
mnt=mnt.toString()
console.log("K-ELECTRI BILL")
console.log("    ")
console.log("Customer Name: "+Name)
console.log("Month: "+mnt.slice(4,7))
console.log("Number Of Units: "+units)
console.log("Charges Per Unit: "+charges)
console.log("     ")
console.log("Net Amount Payable (within Due Date): "+netamt)
console.log("Late Payment Surcharge: "+latecharges)
console.log("Gross Amount Payable (after Due Date: "+grsamt)





//chapter 35 - 38
//1

document.write("<br>" + "<br>" + "<br>");

var a100 = new Date();
document.write(a100);


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");


//2

function x1(a10,b10){
   // a10 = prompt("Enter your first name: ");
    //b10 = prompt("Enter your last name: ");

    document.write("Hello "+a10+" "+b10);
}
x1("Noureen","Awan")


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//3
function xx(a11,b11){
    //var a11 = +prompt("Enter 1st number: ");
    //var b11 = +prompt("Enter 2nd number: ");
    document.write("sum is "+ ((+a11)+(+b11)));
}
    
xx(4,5)


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//4
function px(a12,b12,c12){
    if (b12==="+")
    { 
        document.write("sum is ",(a12+c12))
    }
    else if (b12==="-")
    {
        document.write("subtraction is ",a12-c12)
    }
    else if (b12==="*")
    {
        document.write("multiplication is ",a12*c12)
    }
    else if (b12==="/")
    {
        document.write("division is ",a12/c12)
    }
    else if (b12==="%")
    {
        document.write("remainder is ",a12%c12)
    }
    else
    {
        document.write("Invalid operator")
    }
}

px(+prompt("Enter num 1"),prompt("Enter operator"),+prompt("Enter num 2"))




document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//5

function nx(a13){
    document.write(a13*a13)
}
nx(3)


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");


//6


function ox(a14)
{
    if (a14==0 || a14==1)
    {
        return 1;
    }
    else
    {
        fact=1;
        for(var i=a14;i>=1;i--)
        {
            fact *= (i);
            //document.write("Factorial is " + fact);

        }

        document.write("Factorial is " + fact);
  
    }
    
}
       

ox(6)



document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//7

function mx(a15,b15)
{
    for(var i =a15; i<=b15;i++)
    {
        document.write(i+" ");
    }

}
mx(1,55)


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//8
function oox(a,b){
    document.write("H is ",Math.sqrt((a*a) + (b*b)))
}
oox(5,5)


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//9
//i
function qx(a,b){
    document.write("Area is ",(a*b))
}
qx(5,6)

document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");


//ii
function qx(a,b){
    document.write("Area is ",(a*b))
}
var nn=7, mm=9;
qx(nn,mm);



document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//10
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        document.write(str, " is not a palindrome")
  
        return false;
                }
    }
    document.write(str," is a palindrome")
   }
   palindrome("CIVIC");


document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//11
function Xm(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }
 
 document.write(Xm("the quick brown fox"));



document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");



//12

function xn(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(xn("Web Development Tutorial"));



document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");




//13


function x(str, letter) 
{
 var letter_C = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_C += 1;
      }
  }
  return letter_C;
}

document.write(x('w3resource.com', 'o'));




document.write("<br>" + "<br>" + "<br>" + "--------------------------------------------------------------------");
document.write("<br>" + "<br>" + "<br>");




//14

function Circumference(radius) {
    var circumference = (Math.PI * 2) * radius;
    var area = (Math.pow(radius, 2)) * Math.PI;
   document.write("The circumference of a circle with a radius of " + radius + " is " + circumference + " The area for this circle is " + area)
  }
   Circumference(37);
   


document.write("<br>" + "<br>" + "<br>" + "------------------------------------------------------------------------------------------" + "<br>" + "<br>" + "<br>" + "<br>")

//chapter 39-42
//1
function power(a25,b25) {

    if (b25==0) {
        a25=1;
    } else {
        var tem=a25;
        b25--;
        while (b25>=1) {
            a25*=tem;
            b25--;
        }
    }
    alert(a25);
}

//2
function LeapYear(year2) {
    alert((year2 % 100 === 0) ? (year2 % 400 === 0) : (year2 % 4 === 0));    
} 

//3
function calcarea(s26,a26,b26,c26) {
    var Area=s26*(s26-a26)*(s26-b26)*(s26-c26);
    alert("Area: "+Area)
}
function calcS(age27,b27,c27) {
    var S=(a27+b27+c27)/2;
    calcarea(S,a27,b27,c27);
}

//4
function mainFunction(a28,b28,c28) {
    alert("Average: "+average(a28,b28,c28));
    alert("Percentage: "+percentage(a28,b28,c28)+"% out of 300");
}
function percentage(a29,b29,c29) {
    return (a29+b29+c29)/300*100;
}
function average(a29,b29,c29) {
    return (a29+b29+c29)/3;
}

//5
function indexOf(str3,_char) {
    var q=0;
    var flag=false;
    while (q<=str3.length) {
        if (_char==str3[q]) {
            alert("Found at "+ q)
            flag=true;
            break;
        }
        q++;
    }
    if (flag!=true) {
        alert("character not found");
    }
}

//6
function vowel(strings) {

    var str4=strings.replace(/[aeiou]/g,'')
    alert("String without vowel : "+str4);
 }


//7
function find(str2) {
    var find = 0, count = 0;
    str2 = str2.toLowerCase();
    console.log("Vowels in successions are: ")
    for (var i = 0; i<str2.length; i++) {
        if (isvowel(str2[i])) {
            find++;
        } else {
            find = 0;
        }
        if (find == 2) {
            console.log(str2[i - 1], str2[i]);
            find = 1;
        }

    }
 }
function isvowel(char2) {
    switch (char2) {
        case 'a':
            return 1;
            break;
        case 'e':
            return 1;
            break;
        case 'i':
            return 1;
            break;
        case 'o':
            return 1;
            break;
        case 'u':
            return 1;
            break;

        default:
            return 0;
    }
}


//8
function conversion(dis) {
    console.log("Distance in meter : "+toMeter(dis));
    console.log("Distance in feet : "+toFeet(dis));
    console.log("Distance in inch : "+toInch(dis));
    console.log("Distance in centimeter : "+toCentimeter(dis));    
}
function toMeter(dis) {
    return dis/1000;
}
function toInch(dis) {
    return dis/39370.0787;
}
function toFeet(dis) {
    return dis/3280.8399;
}
function toCentimeter(dis) {
    return dis/100000;
}

//9
function overtime() {
    var hour = +prompt("Enter Hours Worked");
    hour -= 40;
    if (hour < 0) {
        alert("You didnt worked for overtime");
    } else {
        var payment = hour * 12;
        alert("The overtime pay will be " + payment);
    }
}

//10
function withdraw() {
    var am=+prompt("Enter the amount to withdraw: ");
    var hundreds=0,fifty=0,tens=0;
    hundreds=Math.floor(am/100);
    fifty=Math.floor((am%100)/50)
    tens=Math.floor(((am%100)-fifty*50)/10)
    alert(`you will have ${hundreds} hundred notes ${fifty} fifty notes ${tens} ten notes`)
}

//chapters 43-48
//1
var cl = 0;
function inc() {
    cl += 1;
    document.getElementById("clicks").innerHTML = cl;
}
function dec() {
    cl -= 1;
    document.getElementById("clicks").innerHTML = cl;
}


//chapter 49-52
//1



function noor(){
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("mail").value;
    var city = document.getElementById("city").value;

    document.write("First Name: " + firstName + "<br>" + "Last Name: " + lastName + "<br>" + "Email ID: " + email + "<br>" + "Current City: " + city);

}

document.write("<br>" + "<br>" + "<br>" + "------------------------------------------------------------------------------------------" + "<br>" + "<br>" + "<br>" + "<br>")

//2

function See(){
    var s = document.getElementById("seemore");
    var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit Error eaque maiores nisi fuga Perferendis pariatur magni modi tempore repellat praesentium id odit blanditiis adipisci dolores Ipsam deserunt sed cupiditate quis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eaque maiores nisi fuga. Perferendis pariatur magni modi tempore repellat praesentium, id odit blanditiis adipisci dolores? Ipsam deserunt sed cupiditate quis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eaque maiores nisi fuga. Perferendis pariatur magni modi tempore repellat praesentium, id odit blanditiis adipisci dolores? Ipsam deserunt sed cupiditate quis?"

    s.innerHTML = text;
}


document.write("<br>" + "<br>" + "<br>" + "------------------------------------------------------------------------------------------" + "<br>" + "<br>" + "<br>" + "<br>")

//3


//chapters 52-57
//1
function appear(e)
{
    var modalImage = document.getElementById("modalImage")
    modalImage.src = e.src;
}

//2

var font = 10;
function zoomIn()
{

    var paragraph12 = document.getElementById("paragraph");
    font +=10;
    paragraph12.style.fontSize = font + "px";
}

function zoomOut()
{
    var paragraph12 = document.getElementById("paragraph");
    font -= 10;
    paragraph12.style.fontSize = font + "px";
}


//chapters 58-67
//1
//(i)

var main2 = document.getElementById("main-content");

//(ii)
for(var i=0; i<main2.childNodes.length; i++)
console.log(main2.childNodes[i]);

//(iii)
var rend = document.getElementsByClassName("render");
document.write("<br>" + "<br>" + "<br>" + "------------------------------------------------------------" + "<br>" + "<br>");

for(var i=0; i<rend.length; i++)
document.write(rend[i].innerHTML + "<br>");


//(iv)
document.write("<br>" + "<br>" + "<br>" + "------------------------------------------------------------" + "<br>" + "<br>");
var fname11 = document.getElementById("first-name");
fname11.value = "Gul";


//(v)
var lname11 = document.getElementById("last-name");
lname11.value = "Noureen";

var mail11 = document.getElementById("email");
mail11.value = "noureeng334@gmail.com";


//2
//(i)

var type1 = document.getElementById("form-content");
document.write(type1.nodeType);

//(ii)

document.write("<br>" + "<br>" + "<br>" + "------------------------------------------------------------" + "<br>" + "<br>");

var lname12 = document.getElementById("lastName");
document.write(lname12.nodeType);

document.write("<br>" + "<br>" + "<br>" + "------------------------------------------------------------" + "<br>" + "<br>");

document.write(lname12.childNodes.nodeType);

//(iii)

document.write("<br>" + "<br>" + "<br>" + "------------------------------------------------------------" + "<br>" + "<br>");
lname12.innerHTML = "Last Name : Habbeb" 
document.write(lname12.innerHTML);

document.write("<br>" + "<br>" + "<br>" + "------------------------------------------------------------" + "<br>" + "<br>");


//(iv)

var main3 = document.getElementById("main-content");
var fchild = main3.firstChild;
var lchild = main3.lastChild;
console.log(fchild);
console.log(lchild)

//(v)

var lname13 = document.getElementById("lastName");
var psibling = lname13.previousSibling;
var nsibling = lname13.nextSibling;

console.log(psibling);
console.log(nsibling);

//(vi)
var mail12 = document.getElementById("email");
var pnode = mail12.parentNode;
var type2 = mail12.nodeType;

console.log(pnode);
console.log(type2);

