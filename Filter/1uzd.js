const students = [
    {
        id:1,
        firstName: "Jonas",
        lastName: "Jonaitis",
        group: "JS22",
        results: {
            'db': 7.5,
            'js': 8,
            'Linux': 6
        }
    },
    {
        id:2,
        firstName: "Petras",
        lastName: "Petraitis",
        group: "JS23",
        results: {
            'db': 5.5,
            'js': 4,
            'Linux': 9
        }
    },
    {
        id:3,
        firstName: "Vardenis",
        lastName: "Pavardenis",
        group: "JS23",
        results: {
            'db': 4.5,
            'js': 8,
            'Linux': 6
        }
    },
    {
        id:4,
        firstName: "Tomas",
        lastName: "Tomaitis",
        group: "JS24",
        results: {
            'db': 9.5,
            'js': 4,
            'Linux': 6
        }
    },
    {
        id:5,
        firstName: "Ieva",
        lastName: "Ievaite",
        group: "JS24",
        results: {
            'db': 9.5,
            'js': 8,
            'Linux': 9
        }
    }
]

// Parasyti funkcija, kuri gavus grupe kaip parametra atfiltruotu grupei priklausancius studentus.

// function filterGroup(group, students){
//     let groups = students.filter(student => student.group == group);
//     return groups;
// }
// console.log(filterGroup("JS22", students))

function getAverage(student){
    grades = student.results;
    let gradeSum = 0;
    for (grade in grades){
        gradeSum += grades[grade];
    }
    average = (gradeSum) / Object.keys(grades).length;
    return average;
}

function filterAverage(students, grade){
    let averages = students.filter(student => getAverage(student) > grade);
    return averages
}

console.log(filterAverage(students, 8))

// let filteredStudent = students.filter(student => student.firstName.length > 5);
// console.log(filteredStudent)