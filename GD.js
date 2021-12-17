var pronoun = ['the','our'];
var adj = ['great','big'];
var noun=['jogger','racoon'];
for (let  primera of pronoun){
    for (let segunda of adj){
        for (let tercera of noun){
            tercera=primera+segunda+tercera+'.com'
            console.log(tercera)
        }
    }
}

