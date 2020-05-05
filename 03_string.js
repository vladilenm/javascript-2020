// const name = 'Владилен'
// const age = 26
//
// function getAge() {
//   return age
// }

// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'A' : 'B'} лет.`
// const output = `
//   <div>This is div</div>
//   <p>this is o</p>
// `

// console.log(output)

// const name = 'Владилен'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('!'))
// console.log(name.toLowerCase().startsWith('влад'))
// console.log(name.startsWith('Влад'))
// console.log(name.endsWith('ен!'))
// console.log(name.repeat(3))
// const string = '     password      '
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
  if (age < 0) {
    age = 'Еще не родился'
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Владилен'
const personName2 = 'Максим'
const personAge = 26
const personAge2 = -10

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)
