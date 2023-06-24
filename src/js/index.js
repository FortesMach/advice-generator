const adviceButton = document.getElementById('advice-generator')
adviceButton.addEventListener('click', () => {
    getIdAndAdvice()
})

async function randomAdvice() {
    const url = 'https://api.adviceslip.com/advice'
    const resposta = await fetch(url)
    return await resposta.json()
}

async function getIdAndAdvice() {
    const api = await randomAdvice()
    const id = api.slip.id
    const advice = api.slip.advice
    document.getElementById('advice-id').textContent = id
    document.getElementById('advice-text').textContent = advice
}


