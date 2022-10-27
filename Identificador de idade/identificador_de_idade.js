function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0) {
        window.alert('Verifique os dador e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Sua idade é: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            document.body.style.backgroundColor = '#5555FF'

            if (idade <= 0) {
                // esperma
                img.setAttribute('src', 'esperma.jpg')

            } else if (idade < 2) {
                // bebe
                img.setAttribute('src', 'bebe.jpg')    

            } else if (idade < 12) {
                // criança
                img.setAttribute('src', 'homem_crianca.jpg')

            } else if (idade < 22) {
                // jovem
                img.setAttribute('src', 'homem_jovem.jpg')    

            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'homem_adulto.jpg')

            } else if (idade < 110) {
                //idoso
                img.setAttribute('src', 'homem_velho.jpg')

            } else {
                //cemitério
                img.setAttribute('src', 'cemiterio.jpg')
            }
                
        } else {
            genero = 'Mulher'
            document.body.style.backgroundColor = '#FF5555'
            if (idade <= 0) {
                // esperma
                img.setAttribute('src', 'esperma.jpg')

            } else if (idade < 2) {
                // bebe
                img.setAttribute('src', 'bebe.jpg')    

            } else if (idade < 12) {
                // criança
                img.setAttribute('src', 'mulher_crianca.jpg')

            } else if (idade < 22) {
                // jovem
                img.setAttribute('src', 'mulher_jovem.jpg')    

            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'mulher_adulta.jpg')

            } else if (idade < 110) {
                //idoso
                img.setAttribute('src', 'mulher_velha.jpg')

            } else {
                //cemitério
                img.setAttribute('src', 'cemiterio.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) 
        //appendChild acrescenta mais um "filho" a "res" na chamada de ação

    }

}