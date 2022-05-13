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
console.log('promessa')