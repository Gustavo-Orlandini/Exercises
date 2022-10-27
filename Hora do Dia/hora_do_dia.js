function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    
    // var hora = 13
       msg.innerHTML = `Agora são ${hora} horas, ${minutos} minutos e ${segundos} segundos.`

    if (hora >= 0 && hora < 12) {
        img.src = 'photo-manhã.jpg'
        document.body.style.background = '#FFA500'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'photo-tarde.jpg'
        document.body.style.background = '#B22222'

    } else {
        img.src = 'photo-noite.jpg'
        document.body.style.background = '#003366'

    }
}

// esse comando abaixo, vai chamar a função "carregar" e vai ficar 
// chamando atualização a cada 1000 milesegundos, ou seja, 1 seg.
setInterval(carregar, 1000)
