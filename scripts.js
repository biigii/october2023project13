function scaleHeader() {
  document.querySelector('h1').style.scale = 0.1
}

function rotateBox() {
  document.querySelector('#box').style.rotate = '45deg'
}

// arrow function
const myNewFunction = () => {
  console.log('this is called an arrow function :) ')
}

myNewFunction()

const isSummer = false

if(isSummer === true) {
  console.log('yes it is summer time')
} else {
  console.log('no it is not summer yet')
}

function addImageToPage() {
  // this code does not run until i call the function
  let figure = document.querySelector('figure');
  let image = document.createElement('img');
  // image.setAttribute('src','https://picsum.photos/id/75/400/300')
  image.src = 'https://picsum.photos/id/75/400/300'
  figure.appendChild(image)
}

document.querySelector('#btn').onclick = function() {
  console.log('you clicked the btn')
}

document.querySelector('#btn').onclick = () => console.log('you clicked the btn')


document.querySelector('#btn').addEventListener('click', addImageToPage)

// document.querySelector('#btn').addEventListener('click', function() {
//   let figure = document.querySelector('figure');
//   let image = document.createElement('img');
//   // image.setAttribute('src','https://picsum.photos/id/75/400/300')
//   image.src = 'https://picsum.photos/id/75/400/300'
//   figure.appendChild(image)
// })

const h1 = document.querySelector('[data-h1]')

h1.style.fontSize = '5em'
h1.style.color = '#ff1'

// document.querySelector('[data-p]').setAttribute('class', 'text')
h1.removeAttribute('id')

document.querySelector("#box").classList.add('box')
// document.querySelector('#heading').classList.remove('heading');
document.querySelector('#box').classList.toggle('some-class');

const p = document.createElement('p');
p.innerHTML = 'hello world'
p.style.fontSize = '4em'
p.style.border = '3px solid #000'
document.body.appendChild(p)

