const students = [
    {id:21, name: 'Omar Sunny'},
    {id:41, name: 'Mannaa'},
    {id:51, name: 'Sanai Mahbub'},
    {id:20, name: 'Moushumi'},
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s=> s.id>40);
const biggerOne = students.find( s=> s.id>40);

console.log(biggerOne);