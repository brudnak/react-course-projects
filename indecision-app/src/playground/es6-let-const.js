var nameVar = 'Andrew'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Ruby'
nameLet = 'Jessica'
console.log('letName', nameLet)

const nameConst = 'Russell'
console.log('nameConst', nameConst)

// Block scoping

const fullName = 'Andrew Brudnak'
let firstName

if (fullName) {
    var firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)
