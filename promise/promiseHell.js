function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(9)
        }, 2000)
    })
}

function buscarEmailNoBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('kessydev@gmail.com')
        }, 2000)    
    })
}

function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let deuErro = false;
            if (!deuErro){
                resolve({time:2, to:'kessydev@gmail.com'})
            } else {
                reject('Sua caixa de correio eletrônico está cheia.')
            }
        }, 2000)    
    })
}
console.log('Início')
pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        enviarEmail('Oi!', email).then(() => {
            console.log('E-mail enviado, para o usuário com a ID: ' + id )
        }).catch(err => {
            console.log(err)
        })
    })
})
console.log('Deu certo!Rodou!')