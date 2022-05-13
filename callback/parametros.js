/*function enviarEmail(corpo, para){
    console.log(`
        Para: ${para}
        ------------------------------------------
        ${corpo}
        ------------------------------------------
        De: Victoria
    `)
}

enviarEmail('Oi, querida, tudo bem?', 'victoria.scholte@gmail.com')*/


const fs = require('fs')


function enviarEmail(corpo, para, callback) {
    setTimeout(function(){ 
        console.log(`
        Para: ${para}
        ---------------------------------
        ${corpo}
        ---------------------------------
        De:Kessy Costa
        `)
        callback('Ok', 42, '1s')
    }, 1000) //chamando o setTimeout com esse tempo de 1000, que é 1 segundo
}

console.log('Início do envio de e-mail')
enviarEmail('Olá, você recebeu uma mensagem de uma futura Dev', 'kessycosta@gmail.com', (status, amount, time) => {
    console.log(`
    Status: ${status}
    -------------------------------------
    Contatos: ${amount}
    -------------------------------------
    Tempo de envio: ${time}  
    `)
    console.log('Deu tudo certo!')
})

console.log('Aguarde. Seu email foi enviado e vai chegar em segundos.')