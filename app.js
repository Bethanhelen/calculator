let opr = prompt('Please enter operator you want to perform' +'                                               ' + 'e.g +,-,/,*')

let num1 = parseInt(prompt('Enter first number:'))

let num2 = parseInt(prompt('Enter second number:'))

if(opr === '+')
{
    alert(`Result is ${num1 + num2}`)
}
else if(opr === '-')
{
    alert(`Result is ${num1 - num2}`)
}
else if(opr === '*')
{
    alert(`Result is ${num1 * num2}`)
}
else if(opr === '/')
{
    alert(`Result is ${num1 / num2}`)
}
else
{
    alert('invalid symbol.. Try again')
}