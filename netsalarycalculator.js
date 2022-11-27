//declare function with 2 parameters which are all 0.
function salarycalculator(){
    salary = 0;
    benefits = 0;
//calculate the gross salary 
    const grossSalary = basicSalary + benefits;
//show case the value of the gross salary
    console.log("gross salary = ${grossSalary}");


    let PAYE;//we use let since the value changes;it's not constant
    if(grossSalary <= 24000){
        PAYE = grossSalary * 10/100;
        //PAYE is calculated according to the gross salary amount and percentage
    }
    else if(grossSalary > 24000 &&grossSalary <= 32333){
        PAYE = grossSalary * 25/100;
    }
    else if(grossSalary > 32333){
        PAYE = grossSalary * 30/100;
    }
}
    console.log("Pay as you earn=${PAYE}");

    let nhif;//variable nhif is declared using let as its value is not fixed

    if(grossSalary < 6000){
        nhif = 150;
    }
    else if(grossSalary >= 6000 && grossSalary <= 7999){
        nhif = 300;
    }
    else if(grossSalary >= 8000 && grossSalary <= 11999){
        nhif = 400;
    }
    else if(grossSalary >= 12000 && grossSalary <= 14999) {
        nhif = 500;
    }
    else if(grossSalary >= 15000 && grossSalary <= 19999) {
        nhif = 600;
    }
    else if(grossSalary >= 20000 && grossSalary <= 24999) {
        nhif = 750;
    }
    else if(grossSalary >= 25000 && grossSalary <= 29999) {
        nhif = 850;
    }
    else if(grossSalary >= 30000 && grossSalary <= 34999) {
        nhif = 900;
    }
    else if(grossSalary >= 35000 && grossSalary <= 39999) {
        nhif = 950;
    }
    else if(grossSalary >= 40000 && grossSalary <= 44999) {
        nhif = 1000;
    }
    else if(grossSalary >= 45000 && grossSalary <= 49999) {
        nhif = 1100;
    }
    else if(grossSalary >= 50000 && grossSalary <= 59999) {
        nhif = 1200;
    }
    else if(grossSalary >= 60000 && grossSalary <= 69999) {
        nhif = 1300;
    }
    else if(grossSalary >= 70000 && grossSalary <= 79999) {
        nhif = 1400;
    }
    else if(grossSalary >= 80000 && grossSalary <= 89999) {
        nhif = 1500;
    }
    else if(grossSalary >= 90000 && grossSalary <= 99999) {
        nhif = 1600;
    }
    else if(grossSalary >= 100000) {
        nhif = 1700;
    }
  
    console.log("nhif deduction = ${nhif}");//deduction value is displayed here after calculations

    let nssf;//variable nssf is declared

        nssf = grossSalary * 5/100;

    if(nssf > 400){
        nssf = 400;
    }
    console.log("nssf dediuction = ${nssf}");

    const AllDeductions = PAYE + nssf + nhif;//
    console.log("sum deductions = ${AllDedeuctions}");//displays the sum deductions done.

    const netSalary = grossSalary - AllDeductions;//
    console.log('net salary = ${netSalary}');

    console.log(salarycalculator)//all console logs will be output