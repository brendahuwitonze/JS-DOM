
function attachBuyEvents() {
  const btns = document.querySelectorAll('#products .buy')
  for (const btn of btns) {
    btn.addEventListener('click',function(e){
     const parentName = btn.parentElement;
     parentName.classList.toggle('sale')
    //get the id
    const specifiedAttribute=  parentName.getAttribute('data-id')
    //get the product name
    const h2 = e.target.parentElement.querySelector('h2');
    const text = h2.textContent
    // get quantity
    const input = parentName.querySelector('input')
    const inputValue = parseInt(input.value)
    //get price
    const price = e.target.parentElement.querySelector('p')
    const textprice = parseInt(price.textContent)
    //appending the row to the table  and adding the functionality 
    const table = document.querySelector(' #cart table')
    const tbody = document.createElement('tbody')
    table.appendChild(tbody)
    //appending the columns to the row and adding some text into the columns coresspondingly
const newRow = document.createElement('tr')
tbody.appendChild(newRow)
const th1 = document.createElement('th')
newRow.append(th1)
th1.textContent = specifiedAttribute
const th2 = document.createElement('th')
newRow.append(th2)
th2.textContent =text;
const th3 = document.createElement('th')
newRow.append(th3)
th3.textContent = inputValue
const th4 = document.createElement('th')
newRow.append(th4)
th4.textContent =  textprice
const th5 = document.createElement('th')
newRow.append(th5)
//Multipying quantity with price to find total 
th5.textContent = th4.textContent * th3.textContent
  })
}
// console.log(parentName.textContent + inputValue)

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