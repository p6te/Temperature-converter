const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')


const swap = () => {
    if(one.textContent === '°C'){
        one.textContent = '°F'
        two.textContent = '°C'
    } else {
        one.textContent = '°C'
        two.textContent = '°F'
    }
}

const inverter = () => {
    if(one.textContent === '°C'){
        let CF = ((converter.value * 1.8) + 32).toFixed(1)
        result.textContent = `${converter.value} °C to ${CF} °F`
        converter.value = ''
    } else {
        let FC = ((converter.value - 32)/1.8).toFixed(1)
        result.textContent = `${converter.value} °F to ${FC} °C`
        converter.value = ''
    }
}

const reset = () => {
    result.textContent = ''
}

changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', inverter)
resetBtn.addEventListener('click', reset)





