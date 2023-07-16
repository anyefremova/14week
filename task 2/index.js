const grades = [];
for (i = 0; i < 12; i++) {
    const randomGrades = Math.floor(Math.random() * 100) + 1;
    grades.push(randomGrades);
    console.log(randomGrades);
}

