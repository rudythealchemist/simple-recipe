// const getElement = (selector) => {
//   const element = document.querySelector(selector)

//   if (element) return element
//   throw Error(
//     `Please double check your class names, there is no ${selector} class`
//   )
// }

// const links = getElement('.nav-links')
// const navBtnDOM = getElement('.nav-btn')

// navBtnDOM.addEventListener('click', () => {
//   links.classList.toggle('show-links')
// })

// const date = getElement('#date')
// const currentYear = new Date().getFullYear()
// date.textContent = currentYear

// console.log('Hello world')

// Select nav links, if function does not exist, throw error.
const getElement = (selector) => {
  const element = document.querySelector(selector)
  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

// click function added to button
navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

// current year in html
const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear