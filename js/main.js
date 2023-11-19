const navbar = document.getElementById('navbar')
const toggle = document.getElementById('toggle')
const toggleCart = document.getElementById('toggle-cart')
const cartItems = document.getElementById('cart-items')


//ABAJO ES LA 2DA OPCION

toggle.addEventListener('click', () => {
  navbar.classList.toggle('active')
})
document.addEventListener('click', e => {
  if (!navbar.contains(e.target) && e.target !== toggle) {
    toggle.classList.remove('active')
    navbar.classList.remove('active')
  }
})
toggleCart.addEventListener('click', () => {
  cartItems.classList.toggle('active')
})
document.addEventListener('click', e => {
  if (!cartItems.contains(e.target) && e.target !== toggleCart) {
    toggleCart.classList.remove('active')
    cartItems.classList.remove('active')
  }
})


///ABAJO ESTA OTRO CODIGO

// Function add class active
// toggle.onclick = () => {
//   toggle.classList.toggle('active')
//   navbar.classList.toggle('active')
// }
// // Function check class
// document.onclick = (e) => {
//   if (e.target.id !== 'navbar' && e.target.id !== 'toggle') {
//     toggle.classList.remove('active')
//     navbar.classList.remove('active')
//   }
// }

// // Function add class active
// toggleCart.onclick = () => {
//   toggleCart.classList.toggle('active')
//   cartItems.classList.toggle('active')
// }
// // Function check class
// document.onclick = (e) => {
//   if (e.target.id !== 'cart-items' && e.target.id !== 'toggle-cart') {
//     toggleCart.classList.remove('active')
//     cartItems.classList.remove('active')
//   }
// }