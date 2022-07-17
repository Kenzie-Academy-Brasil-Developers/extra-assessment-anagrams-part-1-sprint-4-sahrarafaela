let inp = document.querySelector('input')
const button = document.getElementById("findButton")



function alphabetize(a) {
   return a.toLowerCase().split("").sort().join("").trim()
}
function getAnagramsOf(input) {
    let list = []
    let inpt = alphabetize(input)
    
    for (let i= 0; i<palavras.length; i++) {
        let pal = alphabetize(palavras[i])
        if(pal == inpt){
            list.push(palavras[i])
        }
    }
    return list
}


button.addEventListener("click", function () {
let tipo = document.getElementById("input").value
let body = document.body
let row = document.createElement ('p')
row.innerHTML = getAnagramsOf(tipo)
body.append(row)

})

