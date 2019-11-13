function Teacher(name) {
    this.name = name
}

Teacher.prototype[Symbol.toStringTag] = 'teacher'

const teacher = new Teacher('xxx')
console.log(teacher.toString())
console.log(Object.prototype.toString.call(teacher))
