document.querySelector('.year-selector button').addEventListener('click', () => {
    const selectedYear = document.querySelector('.year-selector select').value;
    alert(`Ano-calendário ${selectedYear} selecionado.`);
});

// Função para os botões na seção de pagamento
document.querySelectorAll('.payment-section button').forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonLabel = event.target.innerText;
        alert(`Botão "${buttonLabel}" clicado.`);
    });
});
