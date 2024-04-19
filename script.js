console.log('Hello World')
function changeAllArticleColors(){
    const result = (document.querySelectorAll('#products article'))
    for (let element of result){
      element.classList.add('sale')
    }

}
console.log(changeAllArticleColors())

function addItem (e){
const h2 = e.target.parentElement.querySelector('h2')
console.log('BUY!' + h2.textContent);
}


function attachBuyEvents() {
    const btn = document.querySelectorAll('button')
    for(i=0;i<=btn.length;i++){
        btn[i].addEventListener('click',addItem)
    
    }
  }
  
  attachBuyEvents()