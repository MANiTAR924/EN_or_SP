document.getElementsByClassName('mainButton'), document.addEventListener("click", newBlank)

function newBlank(){
    const input0 = document.querySelector('input').value
   
    const datamuseUrl = 'https://api.datamuse.com/words?ml='
    const resWord = `${datamuseUrl+input0}`

    console.log(fetch(resWord))
    const p = document.createElement('p')
    document.body.appendChild(p)
    console.log(`input = ${input0}`)
}