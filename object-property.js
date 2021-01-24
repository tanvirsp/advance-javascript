const students = [
    {id: 32, name: 'Omar Summy'},
    {id: 50, name: 'Jamal'},
    {id: 23, name: 'Kamal'},
    {id: 15, name: 'Jolil'},
]

const student = students.map(student => student.name);
console.log(student);

const id = students.map(s => s.id);
console.log(id);

const bigger = students.filter(s => s.id > 20);
console.log(bigger);

const oneNumber = students.find(s => s.id > 20);
console.log(oneNumber);