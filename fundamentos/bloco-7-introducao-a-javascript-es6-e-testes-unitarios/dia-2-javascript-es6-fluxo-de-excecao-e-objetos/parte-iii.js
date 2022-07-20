const lesson = {
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
}

const modifyLesson2 = (object,key,value) => {
  object[key] = value;
}
modifyLesson2(lesson2, 'turno', 'noite')

const listObjectKeys = (object) => {
  console.log(Object.keys(object));
}

listObjectKeys(lesson);

const objectLength = (object) => {
  Object.keys(object).length;
}

const objectValues = (object) => {
  Object.values(object);
}

const allLessons = Object.assign({}, { lesson, lesson2, lesson3 });
console.log(allLessons);