document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DAS NOTIFICAÇÕES (TOAST) ---
    const toastElement = document.getElementById('notificacaoToast');
    const toast = new bootstrap.Toast(toastElement);
    
    // --- MANIPULAÇÃO DO FORMULÁRIO DE CADASTRO ---
    const formCadastro = document.getElementById('form-cadastro');

    if (formCadastro) {
        formCadastro.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const toastBody = toastElement.querySelector('.toast-body');
            toastBody.textContent = 'Cadastro realizado com sucesso! Em breve você receberá nossas novidades.';
            toast.show();

            formCadastro.reset();
        });
    }

    // --- MANIPULAÇÃO DO FORMULÁRIO DE AGENDAMENTO ---
    const formAgendamento = document.getElementById('form-agendamento');

    if (formAgendamento) {
        formAgendamento.addEventListener('submit', function(event) {
            event.preventDefault();

            const dataAgendada = document.getElementById('inputData').value;
            const horaAgendada = document.getElementById('inputHorario').value;

            const toastBody = toastElement.querySelector('.toast-body');
            toastBody.textContent = `Agendamento confirmado para o dia ${dataAgendada} às ${horaAgendada}. Obrigado!`;
            toast.show();

            formAgendamento.reset();
        });
    }
});