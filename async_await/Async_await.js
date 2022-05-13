//tarefa de casa: fazer igual esse e buscar usuário
//async_await é uma forma de substituir ...
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

/* function buscarUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: 'Kessy', language: 'English'},
                {name: 'Pedro', language: 'Português'},
                {name: 'Bruno', language: 'Russo'}

            ])
        }, 3000)
    })
} */

/*async function principal() {
    let usuarios = await buscarUsuario()
    console.log(usuarios)
    console.log('Deu certo!')
}
principal() */

/* console.log('Início')
pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        enviarEmail('Oi!', email).then(() => {
            console.log('E-mail enviado, para o usuário com a ID: ' + id )
        }).catch(err => {
            console.log(err)
        })
    })
}) */

async function principal() { //cumprindo a primeira promessa. Pedindo para pegar meu Id e guardar nessa variável Id
    let id = await pegarId()
    let email = await buscarEmailNoBanco(id)
    enviarEmail('Você recebeu o email de uma Deva!' + email).then(() => {
        console.log('Email enviado!')
        
    }).catch((err) => {
        console.log((err))
    })
}
principal()
