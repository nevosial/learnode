function Student(fname, lname, age, course, gpa, factor)
{
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.course = course;
  this.gpa = gpa;
  this.factor = function(){
  return ++this.factor;
  };
}


//creating instances.

var std1 = new Student("Eric", 10, "CS", 2.0, 2);
var std2 = new Student("Josh", 13, "EE", 3.0, 1);

console.log(std1);

//Creating an array of students.

var studs = [
    new Student("Eric", 10, "CS", 2.0, 2);
    new Student("Dia", 23, "CS", 4.0, 2);
    ];
    
    
    
//invocation.

console.log(studs);
console.log(studs[1].fname);   //will give fname of second student.
console.log(studs[0].factor());  //will update factor for first student.
