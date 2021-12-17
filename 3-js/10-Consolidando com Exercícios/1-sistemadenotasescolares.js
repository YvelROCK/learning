function changeGrade(grade) {
    let gradeA = grade >= 90 && grade <= 100;
    let gradeB = grade >= 80 && grade <= 89;
    let gradeC = grade >= 70 && grade <= 79;
    let gradeD = grade >= 60 && grade <= 69;
    let gradeF = grade >= 0 && grade < 60;
    
    if (gradeA) {  
        grade = 'A';
    } else if (gradeB) {
        grade = 'B';
    } else if (gradeC) {
        grade = 'C';
    } else if (gradeD) {
        grade = 'D';
    } else if (gradeF) {
        grade = 'F';
    } else {
        grade = console.log("Forneça uma nota válida entre 0 e 100"); 
    }
    return grade;
}


// Unitary test
let gradeForChange = 12;
console.log(gradeForChange);
console.log(changeGrade(gradeForChange));


/* Automatic test
for (let i = 100; i >= 0; i--) {
    console.log(i);
    console.log(changeGrade(i));
}
gradeFinal
*/