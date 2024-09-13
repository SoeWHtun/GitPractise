 let greet="Hello World";
 console.log(greet);
 let sayhi=`Hi there ${greet}`;
 console.log(sayhi);
 let z="4"-"3";
 console.log(z);
 function agecal(age){
    let result=2024-age;
    let print="You are "+result+" years old"
    return print;
 }
 console.log(agecal(2002));
 // write a javascript function to calculate interest rate per year and return it as a string
 function interestrate(principal,rate,years){
    let result=principal*(1+(rate/100))*years;
    let print="After "+years+" years your principal amount "+principal+" over an interest rate of "+rate+" % will be "+result
    return print;
 }

