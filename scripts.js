const amount = document.getElementById("amount")

// Manipulando o input amount para receber somunte números.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})