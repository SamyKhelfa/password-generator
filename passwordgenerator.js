const inquirer = require('inquirer')

function setPassword(numberOfChar, isSpecialsCaract = false) {
    let password = ""
    const alphabet = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn"
    const specialsCaract = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn&é#'{([-|è`_ç^à@)]=}+°!:/;.,?"

    for (let i = 0; i < numberOfChar; i++) {
        password += isSpecialsCaract
            ? specialsCaract.charAt(Math.floor(Math.random() * specialsCaract.length))
            : alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    }

    console.log(password)
    //return password
}

function isValidEntry(value, type) {
        if(type === "number") {
            if(TypeOf value === "number") {
                
            }//...

        } else if(type === "yesNo") {
            if(value === "yes" || value === "no"){
                
            } //...
        }

    //value nombre ou yes/no
    //number ou "yes"/"no"
}

let questions = [{
    type: 'input',
    name: 'numberOfCharacters',
    message: "How many characters do you want in your password?",
}]

let questions2 = [{
    type: 'input',
    name: 'bool',
    message: "Would you want some special characters ? [yes - no]",
}]

inquirer.prompt(questions)
    .then(answers => {
        inquirer.prompt(questions2)
            .then(answers2 => {
                const isSpecialsCaract = answers2.bool === 'yes' ? true : false
                setPassword(answers.numberOfCharacters, isSpecialsCaract)

                isValidEntry(answers.numberOfCharacters, "number")
                isValidEntry(answers2.bool, "yesNo")
            })
    })
  
//console.log(setPassword(10))
//console.log(setPassword(20, true))