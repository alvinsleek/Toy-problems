//Here is my student grade calculator code

// we declare the function with a parameter(grades)

function grades(input){ 
//input entered must be an integer between 0 - 100
    if (input < 0 || input > 100){
        console.log("Enter a valid input")

        let grade = ''
    //if...else loop is used to distinguish the grades through use of comparison operators
    }else{
        if (marks > 79) {
            grade = 'A';    
        } else if (marks > 60) {
            grade = 'B';   
        } else if(marks > 49) {
            grade = 'C';
        } else if(marks > 40) {
            grade = 'D';
        }else{
            grade = 'E';
        }
    }
}
