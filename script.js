

function attachBuyEvents() {
  const btns = document.querySelectorAll('#products .buy')
  for (const btn of btns) {
    btn.addEventListener('click',function(e){
     const parentName = btn.parentElement;
    const input = parentName.querySelector('input')
    const inputValue = input.value
console.log(parentName.textContent + inputValue)
    //  const specifiedAttribute=  parentName.getAttribute('data-id')
     parentName.classList.toggle('sale')
  })
}
}
attachBuyEvents()






















































// console.log('Hello World')
// function changeAllArticleColors(){
//     const result = (document.querySelectorAll('#products article'))
//     for (let element of result){
//       element.classList.add('sale')
//     }

// }
// console.log(changeAllArticleColors())


































// function addItem (e){
// const h2 = e.target.parentElement.querySelector('h2');
// console.log('BUY!' + h2.textContent);


// }

// function attachBuyEvents() {
//     const btn = document.querySelectorAll('button');
//     for(i=0;i<=btn.length;i++){
//         btn[i].addEventListener('click',addItem);
//     }
   
// //    const newClick =document.querySelectorAll('button');
// //    for(i=0;i<=newClick.length;i++){
// //     newClick[i].addEventListener('click',function(){
// //        newArticle.style.backgroundColor = 'red';
// //     });
// // }

//   }
  
  // attachBuyEvents();