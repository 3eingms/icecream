const fun = () =>{
    const inputChange = document.getElementById('name').value 
    const icecream = document.getElementById('select').value
    const result = document.getElementById('result')

    result.innerHTML = `${inputChange} selected ${icecream} flavour.`
}