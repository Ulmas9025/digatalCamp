class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  }
  
  class Student extends Person {
    constructor(name, surname, section) {
      super(name, surname);
      this.section = section;
    }
  
    setName(name) {
      this.name = name;
    }
  
    setSurname(surname) {
      this.surname = surname;
    }
  
    setSection(section) {
      this.section = section;
    }
  
    getName() {
      return this.name;
    }
  
    getSurname() {
      return this.surname;
    }
  
    getSection() {
      return this.section;
    }
  }
  
  // Test qilish
  let student1 = new Student("John", "Doe", "A");
  console.log(student1.getName()); // John
  console.log(student1.getSurname()); // Doe
  console.log(student1.getSection()); // A
  
  student1.setSection("B");
  console.log(student1.getSection()); // B
  