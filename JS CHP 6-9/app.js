//                         CH4

//  q1;
let user, names, age;



// q2;
// legal 
// 1.my_variable
// 2.userName1
// 3._temp
// 4.age
// 5.productCode         

//    illegal
// 1. class 
// 2. user names 
// 3. &ages 
// 4. 4result 
// 5. my-output


// q3;
document.writeln("<h1>Rules for naming Js variables</h1><br><br><br>")
document.writeln("<h2>variable names can only contain,numbers,$ and_.For example: $smy_ 1stvariable<br>   ")
document.writeln("Variable must begin with a letter $ or _ .For example:$name,_name,name<br>")
document.writeln("Variable names are case sensitive<br> ")
document.writeln("Variable name should not be Js keywords<br><br><br>")



                             
//                            CH5
//  q1;                          
let num1=4
let num2=3
let result=num1+num2
console.log("Result1 after +:"+result)
document.writeln("<h1>Sum of 4 and 3 is 7<h1>")


// q2;
let result2=num1-num2
document.writeln("<h1>The difference between 4 and 3 is 1<h1>")
console.log("Result2 after -:"+result2)
let result3=num1*num2
document.writeln("<h1>The result after multiplying 4 and 3 is 12")
console.log("Result3 after *:"+result3)
 let result4=num1/num2
document.writeln("<h1>The result after dividing 4 and 3 is 1.333")
console.log("Result4 after / :"+result4)
let result5=num1%num2
document.writeln("<h1>The result after applying modulus to 4 and 3 is 1<br>")
console.log("Result5 after%:"+result5)


// q3;
let num;
document.writeln("<h2>The value of variable after declaration is undefined<h2>")
num =5

document.writeln("<h2>The initial value of variable:5<h2>")
num=++num
document.writeln("<h2>The value after increment:6")
console.log(num)
num=num+7
console.log(num)
document.writeln("<h2> The value of variable after addition:13 ")
num=--num
document.writeln("<h2>The value after decrement:12")
console.log(num)
num=num%3
console.log(num)
document.writeln("<h2>The remainder after applying modulus to the variable is 0")
  


// q4;
let one = 600
let times=5
let cost = one*times
console.log("cost:"+cost)
document.writeln("<h1>The total cost of 5 movie tickets is 3000<br>")



// q5;
document.writeln("<h1>Table of 5</h1>")
let nums=5
let multi=nums*1
document.writeln("<h2> 5*1=",multi,'</h2>')
multi=nums*2
document.writeln("<h2> 5*2=",multi,'</h2>')
multi=nums*3
document.writeln("<h2> 5*3=",multi,'</h2>')
multi=nums*4
document.writeln("<h2> 5*4=",multi,'</h2>')
multi=nums*5
document.writeln("<h2> 5*5=",multi,'</h2>')
multi=nums*6
document.writeln("<h2> 5*6=",multi,'</h2>')
multi=nums*7
document.writeln("<h2> 5*7=",multi,'</h2>')
multi=nums*8
document.writeln("<h2> 5*8=",multi,'</h2>')
multi=nums*9
document.writeln("<h2> 5*9=",multi,'</h2>')
multi=nums*10
document.writeln("<h2> 5*10=",multi,'</h2>')



// q6;
let celc=25
let fah;
fah=celc*9/5+32
console.log("25celcius to fahrenheit:"+fah)
document.writeln("<h1>25°C is equal to 77°F<h1>")
let fahren=77
let celce;
celce=(fahren-32)*5/9
console.log("77 Fahrenheit to celcius:"+celce)
document.writeln("<h1>77°Fahrenheit is equal to 25Celciues°<h1>")


// q7;
let item1=400
let item2=500
let item1q=3
let item2q=2
let ship=200
let totalcost=(item1*item1q)+(item2*item2q)+ship
console.log("Total cost:"+totalcost)
document.writeln("<h1> Item1 price:400rs<br>")
document.writeln("Item1 quantity:3<br>")
document.writeln(" Item2 price:500rs<br>")
document.writeln("Item1 quantity:2<br>")
document.writeln("Shipping cost:200rs<br>")
document.writeln("Total cost:2400</h1>")



// q8;
let total=750
let obt=700
let percent=obt*100/total
console.log("Percentage:"+percent)
document.writeln("<h1><b>Marks sheet</b>")
document.writeln("<h3>Total marks:750<br>")
document.writeln("Marks obtained:700<br>")
document.writeln("Percentage:93.333</h3><br>")



// q9;
let totalpkr=(10*104.80)+(25*28)
console.log("Total Pkr:"+totalpkr)
document.writeln("<h1>Currency in pkr<h1>")
document.writeln("Total currency in PKR:1748<br>")


// q10;
let number = 10;
let resultt = ((number + 5) * 10) / 2; 
document.writeln("The result is:75 ");
console.log("The result is: " + resultt)



// q11;
let current = 2025
let birthyear = 2006
let agee = current-birthyear
console.log("age:"+agee)


// q12;
let favsnack="kurkure"
let currage=19
let maxage =30
let daily=3
let tlsc=(11*365)*3
console.log("tlsc:"+tlsc)
document.writeln("<h1>The lifetime supply calculator<br>")
document.writeln("You will need 12045 packets of kurkure to lastvyou until the rip old age of 30 ")