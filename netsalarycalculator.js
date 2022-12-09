//declare function with 2 parameters which are all 0.
function salarycalculator(){
    salary = 0;
    benefits = 0;
//calculate the gross salary 
    const grossSalary = basicSalary + benefits;
//show case the value of the gross salary
    console.log("gross salary = ${grossSalary}");

//we use let since the value changes;it's not constant
    let PAYE;
    if(grossSalary <= 24000){
        PAYE = grossSalary * 0.1;
//PAYE is calculated according to the gross salary amount and percentage
    }
    else if(grossSalary > 24000 &&grossSalary <= 32333){
        PAYE = grossSalary * 0.25;
    }
    else if(grossSalary > 32333){
        PAYE = grossSalary * 0.3;
    }
}
//displaying the deduction value
    console.log("Pay as you earn=${PAYE}");

//NHIF Deductions

//variable nhif is declared using let as its value is not fixed

    let nhif;
//introduction of if statements to validate the value inputs
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
//deduction value is displayed here after calculations
    console.log("nhif deduction = ${nhif}");
//NSSF Deductions
//variable nssf is declared
    let nssf;

        nssf = grossSalary * 5/100;
//if condition where if the nssf is above 400, the maximum amount to be deducted will be 400
    if(nssf > 400){
        nssf = 400;
    }
    console.log("nssf dediuction = ${nssf}");

//all the deductions are summed up here and output is given
    const AllDeductions = PAYE + nssf + nhif;

//displays the sum deductions done.
    console.log("sum deductions = ${AllDedeuctions}");
    const netSalary = grossSalary - AllDeductions;//
    console.log('net salary = ${netSalary}');

//all console logs will be output
    console.log(salarycalculator)
