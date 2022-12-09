// we declare the function with a parameter(grades)

function grades(input){ 
//input entered must be an integer between 0 - 100
    const input = parseInt(prompt('enter a student mark:));
    if (isNan(input) ||input < 0 || input > 100){
        console.log("Enter a valid input")

    //if...else loop is used to distinguish the grades through use of comparison operators
        let grade;
        if (marks >= 80) {
            grade = 'A';    
        } else if (marks >= 60) {
            grade = 'B';   
        } else if(marks >= 50) {
            grade = 'C';
        } else if(marks >= 40) {
            grade = 'D';
        }else{
            grade = 'E';
        }
    return grade;
    }
}
