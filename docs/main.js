var like = [30, 8, 1]
var unlike = [2, 3, 17]
let likou = 0
let unlikou = 0

function fim() {
    document.getElementById('fim').innerHTML = "<p>Não tem mais nada para ver aqui</p>"
} ;
  
function image(nome) {
    let numero = Math.floor(Math.random() * 10) + 1
    if (numero == 10) {
        climaMedo(nome)
    } else {
        document.getElementById('imagemp').innerHTML = `<img src="imagens\\${nome}\\${numero}.jpg" alt="${nome}">`
    }
} ;

function criarBotoes() {

    let likeButton = document.createElement('button')
    likeButton.className = 'likeButton'

    //let likeImage = document.createElement('img')
    //likeImage.src = 'imagens\\post-prof\\like-button.png'
    //likeButton.appendChild(likeImage)
    likeButton.innerHTML = `<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="like-svg" ><path d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z" class="style-scope yt-icon"></path></g></svg>`

    let unlikeButton = document.createElement('button')
    unlikeButton.className = 'unlikeButton'

    //let unlikeImage = document.createElement('img')
    //unlikeImage.src = 'imagens\\post-prof\\unlike-button.png'
    //unlikeButton.appendChild(unlikeImage)
    unlikeButton.innerHTML = `<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="unlike-svg" ><path d="M18,4h3v10h-3V4z M5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21c0.58,0,1.14-0.24,1.52-0.65L17,14V4H6.57 C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14z" class="style-scope yt-icon"></path></g></svg>`

    let quantLike = document.createElement('span')
    let quantUnlike = document.createElement('span')

    let sections = document.querySelectorAll('body > main > section > section')
    for (let c = 0; c < sections.length; c++) {
        let botoes = document.createElement('div')
        botoes.className = 'botoes'
        let likeButton_copy = likeButton.cloneNode(true)
        let unlikeButton_copy = unlikeButton.cloneNode(true)
        botoes.appendChild(likeButton_copy)
        quantLike.innerHTML = like[c]
        let quantLike_copy = quantLike.cloneNode(true)
        botoes.appendChild(quantLike_copy)
        botoes.appendChild(unlikeButton_copy)
        quantUnlike.innerHTML = unlike[c]
        let quantUnlike_copy = quantUnlike.cloneNode(true)
        botoes.appendChild(quantUnlike_copy)
        sections[c].appendChild(botoes)
    }
}

function funcBotoes() {
    let sections = document.querySelectorAll('body > main > section > section')
    let botoesLike = document.getElementsByClassName('likeButton')
    let botoesUnlike = document.getElementsByClassName('unlikeButton')
    for (let c = 0; c < sections.length; c++) {
        botaoLike = botoesLike[c]
        botaoUnlike = botoesUnlike[c]
        botaoLike.onclick = function() {opiniao(c, 'like')}
        botaoUnlike.onclick = function() {opiniao(c, 'unlike')}
    }
}



function opiniao(n, c) {
    n = n*2
    let imagemLike = document.querySelectorAll('button > svg')[n]
    let imagemUnlike = document.querySelectorAll('button > svg')[n+1]
    let estiloLike = getComputedStyle(imagemLike)
    let estiloUnlike = getComputedStyle(imagemUnlike)
    let quantLike = document.querySelectorAll('section > div > span')[n]
    let quantUnlike = document.querySelectorAll('section > div > span')[n+1]
    if (estiloLike.fill == 'rgb(59, 59, 59)' && estiloUnlike.fill == 'rgb(59, 59, 59)') {
        if (c == 'like'){
            quantLike.innerText = parseInt(quantLike.innerText) + 1
            imagemLike.style.fill = 'rgb(0, 204, 0)'
            likou = 1
        } else if (c == 'unlike') {
            quantUnlike.innerText = parseInt(quantUnlike.innerText) + 1
            imagemUnlike.style.fill = 'rgb(204, 0, 0)'
            unlikou = 1
        }
    } else {
        if (estiloLike.fill != 'rgb(59, 59, 59)') {
            imagemLike.style.fill = 'rgb(59, 59, 59)'
            quantLike.innerText = parseInt(quantLike.innerText) - 1
            if (c =='like' && estiloLike.fill == 'rgb(59, 59, 59)'){
                if (likou == 0) {
                    quantLike.innerText = parseInt(quantLike.innerText) + 1
                    imagemLike.style.fill = 'rgb(0, 204, 0)'
                    likou = 1
                    if (unlikou == 1) {
                        unlikou = 0
                        }
                } else {
                    likou = 0
                }   
            } 
            if (c =='unlike' && estiloUnlike.fill == 'rgb(59, 59, 59)'){
                if (unlikou == 0) {
                    quantUnlike.innerText = parseInt(quantUnlike.innerText) + 1
                    imagemUnlike.style.fill = 'rgb(204, 0, 0)'
                    unlikou = 1
                    if (likou == 1) {
                        likou = 0
                        }
                } else {
                    unlikou = 0
                }
            }
        } else if (estiloUnlike.fill != 'rgb(59, 59, 59)') {
            imagemUnlike.style.fill = 'rgb(59, 59, 59)'
            quantUnlike.innerText = parseInt(quantUnlike.innerText) - 1
            if (c =='like' && estiloLike.fill == 'rgb(59, 59, 59)'){
                if (likou == 0) {
                    quantLike.innerText = parseInt(quantLike.innerText) + 1
                    imagemLike.style.fill = 'rgb(0, 204, 0)'
                    likou = 1
                    if (unlikou == 1) {
                        unlikou = 0
                        }
                } else {
                    likou = 0
                }   
            } 
            if (c =='unlike' && estiloUnlike.fill == 'rgb(59, 59, 59)'){
                if (unlikou == 0) {
                    quantUnlike.innerText = parseInt(quantUnlike.innerText) + 1
                    imagemUnlike.style.fill = 'rgb(204, 0, 0)'
                    unlikou = 1
                    if (likou == 1) {
                        likou = 0
                        }
                } else {
                    unlikou = 0
                }
            }
        }
    }
}

function opinar(n, c, el, eu) {
    let quantLike = document.querySelectorAll('section > div > span')[n].innerHTML
    let quantUnlike = document.querySelectorAll('section > div > span')[n].innerHTML
    if (c == 'like'){
        quantLike = parseInt(quantLike) + 1
        el.fill == 'rgb(0, 204, 0)'
    } else if (c == 'unlike') {
        quantUnlike = parseInt(quantUnlike) + 1
        eu.fill == 'rgb(204, 0, 0)'
    }
}

function climaMedo(nome) {
    if (nome == 'faustao') {
        document.write(`<!DOCTYPE html>
        <html lang="pt-br">
        <head >
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="shortcut icon" href="imagens/medo.ico" type="image/x-icon">
            <link rel="stylesheet" href="estilos/medo.css">
            <script src="main.js"></script>
            <title>a̵̺͙̞̺̗̪̜͕̲͍̟̔̌̇̚ȏ̷̮͚͖͎͗͑̑t̵̩̜̰̠̮̮̳̝̞̭̝̯͉͙͌͐̀̔͐̂͒̏̎̇ͅu̷͎̯͈̘͒̌̊͌̉̇̄̈̕͘͘̕̕ͅạ̸̙̤̣͛̀̈̐͂̒̂͘͝͠͝s̷̩̹̟̗͇̬̪̗̤̺̠͚̙̒̉͋̌͗̾̒́͌̿̅̉͌̕̚f̵̢̡̺͉͋̈̂́͐͊̍̊̈́̀͑̚͘͠</title>
        </head>
        <body  onload="image('faustao')">
            <header></header>
            <nav>
                <a href="index.html" target="_self" rel="prev">Home</a>
                <a href="faustao.html" target="_self" rel="next">a̵̺͙̞̺̗̪̜͕̲͍̟̔̌̇̚ȏ̷̮͚͖͎͗͑̑t̵̩̜̰̠̮̮̳̝̞̭̝̯͉͙͌͐̀̔͐̂͒̏̎̇ͅu̷͎̯͈̘͒̌̊͌̉̇̄̈̕͘͘̕̕ͅạ̸̙̤̣͛̀̈̐͂̒̂͘͝͠͝s̷̩̹̟̗͇̬̪̗̤̺̠͚̙̒̉͋̌͗̾̒́͌̿̅̉͌̕̚f̵̢̡̺͉͋̈̂́͐͊̍̊̈́̀͑̚͘͠</a>
                <a href="minecraft.html" target="_self" rel="next">Minecraft</a>
                <a href="sobre.html" target="_self" rel="next">Sobre</a>
                <a href="fale-conosco.html" target="_self" rel="next">Fale Conosco</a>
            </nav>
            <main>
                <article>
                    <h1>a̵̺͙̞̺̗̪̜͕̲͍̟̔̌̇̚ȏ̷̮͚͖͎͗͑̑t̵̩̜̰̠̮̮̳̝̞̭̝̯͉͙͌͐̀̔͐̂͒̏̎̇ͅu̷͎̯͈̘͒̌̊͌̉̇̄̈̕͘͘̕̕ͅạ̸̙̤̣͛̀̈̐͂̒̂͘͝͠͝s̷̩̹̟̗͇̬̪̗̤̺̠͚̙̒̉͋̌͗̾̒́͌̿̅̉͌̕̚f̵̢̡̺͉͋̈̂́͐͊̍̊̈́̀͑̚͘͠</h1>
                    <img src="imagens\\faustao\\10.jpg" width="800px">
                </article>
            </main>
            <footer>Porque você ainda tá aqui?</footer>
        </body>
        </html>`)
    } else if (nome == 'minecraft') {
        document.write(`<!DOCTYPE html>
        <html lang="pt-br">
        <head >
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="shortcut icon" href="imagens/medo.ico" type="image/x-icon">
            <link rel="stylesheet" href="estilos/medo.css">
            <script src="main.js"></script>
            <title>ć̸̡̧͉͚̹̩̹͉̗̙̯̜͙̭̍̽͜m̴͕̦̝͈͎̰̠̲̜̟̙̑f̸̨͇̺͙͈̲̰̺̙̫̜̥̓͌͜͠ī̴̫̿̓͘t̶̡̥̫̬̫͇̱̻̤͍̝̦̦͈̦̆͗͊́͊̌̂̀̀̎́̕a̷̢͓̩̱̥̙̠͚̦̰̽̽̒̽̃͘ͅẻ̵͂</title>
        </head>
        <body  onload="image('faustao')">
            <header></header>
            <nav>
                <a href="index.html" target="_self" rel="prev">Home</a>
                <a href="faustao.html" target="_self" rel="next">Faustao</a>
                <a href="minecraft.html" target="_self" rel="next">ć̸̡̧͉͚̹̩̹͉̗̙̯̜͙̭̍̽͜m̴͕̦̝͈͎̰̠̲̜̟̙̑f̸̨͇̺͙͈̲̰̺̙̫̜̥̓͌͜͠ī̴̫̿̓͘t̶̡̥̫̬̫͇̱̻̤͍̝̦̦͈̦̆͗͊́͊̌̂̀̀̎́̕a̷̢͓̩̱̥̙̠͚̦̰̽̽̒̽̃͘ͅẻ̵͂</a>
                <a href="sobre.html" target="_self" rel="next">Sobre</a>
                <a href="fale-conosco.html" target="_self" rel="next">Fale Conosco</a>
            </nav>
            <main>
                <article>
                    <h1>ć̸̡̧͉͚̹̩̹͉̗̙̯̜͙̭̍̽͜m̴͕̦̝͈͎̰̠̲̜̟̙̑f̸̨͇̺͙͈̲̰̺̙̫̜̥̓͌͜͠ī̴̫̿̓͘t̶̡̥̫̬̫͇̱̻̤͍̝̦̦͈̦̆͗͊́͊̌̂̀̀̎́̕a̷̢͓̩̱̥̙̠͚̦̰̽̽̒̽̃͘ͅẻ̵͂</h1>
                    <img src="imagens\\minecraft\\10.jpg" width="800px">
                </article>
            </main>
            <footer>Porque você ainda tá aqui?</footer>
        </body>
        </html>`)
    }
} ;











//if (imagem != 'rgb(59, 59, 59)') {
//    let opiniao = document.querySelectorAll('body > main > section > section > div > span')
//    let imagem = document.querySelectorAll('body > main > section > section > div > button > img').style.fill
//    console.log(imagem)
//} else {
//
//}

//`<div class="botoes">
//<button class="likeButton" onclick="opiniao(0, 'like')">
//    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="like-svg">
//        <path d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z" class="style-scope yt-icon">//
//        </path>
//    </svg>
//</button>
//<span>30</span>
//<button class="unlikeButton" onclick="opiniao(0, 'unlike')">
//    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="unlike-svg">
//        <path d="M18,4h3v10h-3V4z M5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21c0.58,0,1.14-0.24,1.52-0.65L17,14V4H6.57 C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14z" class="style-scope yt-icon">
//        </path>
//    </svg>
//</button>
//<span>2</span>
//</div>`