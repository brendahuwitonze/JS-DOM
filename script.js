console.log('Hello World')
function changeAllArticleColors(){
    const result = (document.querySelectorAll('#products article'))
    for (let element of result){
      element.classList.add('sale')
    }

}
console.log(changeAllArticleColors())
