                      // переменные



// const age = 19
// const isProgrammer = true

// alert(firstName)

// const _private = 'private'
// const $ = 'some value'

                      // мутирование



// alert('Мое имя: ' + firstName + '. А возраст мой - ' + age)
// за кулисами js преобразовывает число 19 в строку (age.toString())

// const firstName = prompt('Введи имя')
// const lastName = prompt('Введи фамилию')

// alert('Привет, ' + firstName + ' ' + lastName)

                      //циклы и прочее



// let yearBirth = prompt ('Enter year of birth')
// const currentYear = 2020

// let age = currentYear - yearBirth

// if (age <= 18){
//     alert('You are young, you have a ' + age + ' years old')
// }
// else {
//     alert('You are old, you have a ' + age + ' years old')
// }

// const num1 = 40
// const num2 = "40"

// console.log(num1 == num2)//приводит к одному типу данных и сравнивает значение
// console.log(num1 === num2)//не приводит к одному типу данных и сравнивает напрямую

// const isProgrammer = false

// if (isProgrammer === true) {
//     console.log('Вы программист')
// } else {
//     console.log('Вы не программист')
// }


//                      // это то же самое, что и


// if (isProgrammer) {
//     console.log('Вы программист')
// } else {
//     console.log('Вы не программист')
// }


//                      // а еще то же самое, что и


//                // Тернарное выражение
// isProgrammer ? console.log('Вы программист') : console.log('Вы не программист') //сокращение. Тернарное выражение


                      //функции



// function ageCalc(year) {
//     return 2020 - year
// }

// // const myAge = ageCalc(2001)
// // console.log(myAge)
// // console.log(ageCalc(2001))

// function humanInfo(name, year) {
//     const age = ageCalc(year)
//     return 'Тебя зовут ' + name + ' и тебе ' + age + ' лет!'
// }
// console.log(humanInfo('Никита','2001'))


//                      //то же самое, что и:


// function humanInfo(name, year) {
//     const age = ageCalc(year)
//     console.log('Тебя зовут ' + name + ' и тебе ' + age + ' лет!')
// }
// humanInfo('Никита', '2001')


                      //Массивы



// const cars = ['Mazda', 'Volvo', 'Ford']

// console.log(cars[1])
// console.log(cars.length)

// cars[1] = ['Mersedes']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

//                      //то же самое


// for(let car of cars) {
//     console.log(car)
// }


                      //объекты



// const tower = {
//     height: 320,
//     countFloor: 25,
//     boss: 'Jerry Smith',
//     isGovarnament: false,
//     greet: function() {
//         console.log('Wlcome to the Tower!')
//     }
// }

// console.log(tower)
// tower.greet()