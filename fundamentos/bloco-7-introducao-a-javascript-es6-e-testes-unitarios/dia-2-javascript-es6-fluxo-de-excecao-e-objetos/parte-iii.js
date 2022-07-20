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

// questão 6
const studentsNumber = (object) => {
let total = 0;
let arr = Object.keys(object);

for (i in arr) {
  total += object[arr[i]].numeroEstudantes;
}
return total
}
console.log(studentsNumber(allLessons));

// questão 7
const getValueByNumber = (object, index) => {
  Object.values(object)[index];
}
console.log(getValueByNumber(lesson, 0));


// questão 8
const verifyKeyValue = (object, key, value) => {
  let arr = Object.entries(object)
  let compareKeyValue = false;
  for (let i in arr) {
    if (arr[i][0] === key && arr[i][1] === value) {
      compareKeyValue = true;
    }
  }

  return compareKeyValue;
}

console.log(verifyKeyValue(lesson3,'turno', 'noite'));
console.log(verifyKeyValue(lesson3, 'materia', 'Maria Clara'));
