function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
  this.marks = [];
}

Student.prototype.addMark = function (mark){
  if(this.marks === undefined){ 
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks){
  marks.forEach(mark => {
    this.addMark(mark);
  });
}


Student.prototype.getAverage = function (){
  let sum = 0;
  this.marks.forEach(mark=> {
    sum += mark;
  });
  return (this.marks.length >0) ? sum/this.marks.length : 0;
}

Student.prototype.exclude = function (reason){
    this.excluded = reason;
    delete this.marks;
    delete this.subject;
}
