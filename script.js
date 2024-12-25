const pesquisa = document.querySelector('.pesquisa')
const botao = document.querySelector('.botao')
const qrcode = document.querySelector('.qrcode img')
const qrcodeContainer = document.querySelector('.qrcode')

function gerador(){
    let qrValue = pesquisa.value
    if(!qrValue){
        alert('Digite alguma URL ou Texto!')
        pesquisa.focus()
        return
    }
    qrcode.src = `https:api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`
    qrcode.addEventListener('load', () => {
        qrcodeContainer.classList.add('active')
    })
}

botao.addEventListener('click', gerador)

pesquisa.addEventListener('keyup', () => {
    if(!pesquisa.value) {
        qrcodeContainer.classList.remove('active')
    }
})
