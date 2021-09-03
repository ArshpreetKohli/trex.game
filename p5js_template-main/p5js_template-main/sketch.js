var student={
  name:'arshpreet',
  age:12,
class:'7th',
rollno:5

}
function setup() {
  createCanvas(400, 400);
  console.log(student.name)
  console.log(student.age)
  student.age=20
  console.log(student.age)
}

function draw() {
  background(220);
}