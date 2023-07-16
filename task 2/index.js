//1 задание
const grades = [];
for (i = 0; i < 12; i++) {
    const randomGrades = Math.floor(Math.random() * 100) + 1;
    grades.push(randomGrades);
    console.log(randomGrades);
}

//2 задание
const gradesAverage = grades.reduce((partialSum, grade) => partialSum + grade, 0);
console.log(gradesAverage);

//3 задание
const maxGrade = Math.max(...grades);
console.log(maxGrade);

//4 задание
const minGrade = Math.min(...grades);
console.log(minGrade);

//5 задание
const positiveGrade = grades.filter(el => el >= 60);
console.log(positiveGrade.length);

//6 задание
const badGrade = grades.filter(el => el < 60);
console.log(badGrade.length);

//7 задание
const gradeConversion = grades.map(grade => {
    if (grade >= 80 && grade <= 100) {
        return 'A';
    } else if (grade >= 60 && grade < 79) {
        return 'B';
    } else if (grade >= 40 && grade < 59) {
        return 'C';
    } else if (grade >= 20 && grade < 39) {
        return 'D';
    } else {
        return 'E';
    }
});
console.log(gradeConversion);