const students = [
    {name: "John", age: 22, grade: "C"},
    {name: "Moyin", age: 20, grade: "A"},
    {name: "Luke", age: 27, grade: "B"},
    {name: "Brandy", age: 20, grade: "A"},
    {name: "Stephen", age: 21, grade: "B"},
    {name: "Beatrice", age: 30, grade: "A"},
]
const filterByGrade = (students, grade) => {
return (students.filter(students => students.grade === grade));
}
const averageAge = (students) => {
const totalAge = students.reduce((sum, students) => sum + students, 0);
return (totalAge / students.length);
};
const gradeAStudents = filterByGrade(students, "A");
console.log("students who has grade A: ", gradeAStudents);
const averagAge = averageAge(students);
console.log("average age of students: ", averagAge);