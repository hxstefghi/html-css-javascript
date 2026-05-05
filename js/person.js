export class Person {
  constructor(name, course, age, job) {
    this.name = name;
    this.course = course;
    this.age = age;
    this.job = job;
  }

  display() {
    return `Name: ${this.name} Course: ${this.course} Age: ${this.age} Dream Job: ${this.job}`;
  }
}
