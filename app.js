const form = document.querySelector('#form')
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    console.log(isPalindrome(event.target.palindrom.value))
})
function isPalindrome(str){
    const work = str.toLowerCase().replace(/[^а-яa-z0-9]/g, '');
    console.log(work)
    const reverse = work.split('').reverse().join('');
    return work === reverse
}

