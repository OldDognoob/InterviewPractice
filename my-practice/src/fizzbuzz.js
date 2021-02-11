//Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
//For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3),
//print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", 
//for numbers that are divisible by both 3 and 5

//Methodology Approach
for(let num=1; num<101; num++){
    //check if the number is divisible by 3 or 5
    let checkForThree = num % 3;
    let checkForFive = num % 5;
    //check if the number is divisible by 3 and 5 , then print FizzBuzz
    if((checkForThree === 0) && (checkForFive === 0))
    console.log('FizzBuzz');
    //check if the number is divisible by 3 , then print Fizz
    else if (checkForThree === 0)
    console.log("Fizz");
    //check if the number is divisible by 5, then print Buzz
    else if(checkForFive === 0)
    console.log("Buzz");
    //otherwise just print me the number
    else
    console.log(num);
}