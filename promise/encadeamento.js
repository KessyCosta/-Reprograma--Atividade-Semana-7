function soAceitaPares(numero) {
    const promise = new Promise ((resolve, reject) => {
        if (numero % 2 == 0) {
            const resultado = 'É par!'
            resolve(resultado)
        } else {
            reject(new Error('Você passou um número ímpar!'))
        }
    })
    return promise
}
soAceitaPares(2)
.then(result => console.log('Promessa cumprida!' + result))
.catch(error => console.log('Promessa não cumprida.' + error))