// ===================================================================================
// INÍCIO DO CÓDIGO JAVASCRIPT - Fundamentos de Sistemas Web
// ===================================================================================

// Passo 1: Adicionar um alerta de verificação.
// Se este alerta aparecer quando você carrega a página, significa que o arquivo 'script.js'
// foi encontrado e está sendo executado. Se ele NÃO aparecer, o problema é o carregamento do arquivo.
alert('AVISO DE TESTE: O arquivo script.js foi carregado com sucesso!');

// O evento 'DOMContentLoaded' garante que nosso JavaScript só vai rodar
// depois que toda a estrutura HTML da página estiver pronta.
document.addEventListener('DOMContentLoaded', function() {

    // Usaremos o console do navegador para nos dar mais informações.
    // Para ver o console, aperte a tecla F12 no seu navegador e clique na aba "Console".
    console.log("DOM completamente carregado. Adicionando os 'ouvintes' de eventos aos formulários.");

    // --- MANIPULAÇÃO DO FORMULÁRIO DE CADASTRO ---

    const formCadastro = document.getElementById('form-cadastro');

    // Verificação no console para garantir que o formulário foi encontrado
    if (formCadastro) {
        console.log("Formulário de cadastro encontrado com sucesso.");
        formCadastro.addEventListener('submit', function(event) {
            console.log("Botão 'Cadastrar' clicado. O envio do formulário foi interceptado.");
            
            // Impede o comportamento padrão de recarregar a página
            event.preventDefault(); 

            // Mensagem de sucesso para o usuário
            alert('Cadastro realizado com sucesso! Em breve você receberá nossas novidades.');

            // Limpa os campos do formulário
            formCadastro.reset();
            console.log("Formulário de cadastro limpo.");
        });
    } else {
        // Se o formulário não for encontrado, esta mensagem aparecerá no console (F12)
        console.error("ERRO: Formulário de cadastro com id 'form-cadastro' não foi encontrado!");
    }


    // --- MANIPULAÇÃO DO FORMULÁRIO DE AGENDAMENTO ---

    const formAgendamento = document.getElementById('form-agendamento');

    // Verificação no console para garantir que o formulário foi encontrado
    if (formAgendamento) {
        console.log("Formulário de agendamento encontrado com sucesso.");
        formAgendamento.addEventListener('submit', function(event) {
            console.log("Botão 'Agendar' clicado. O envio do formulário foi interceptado.");

            // Impede o recarregamento da página
            event.preventDefault();

            const dataAgendada = document.getElementById('inputData').value;
            const horaAgendada = document.getElementById('inputHorario').value;

            // Mensagem de confirmação personalizada
            alert(`Agendamento confirmado para o dia ${dataAgendada} às ${horaAgendada}. Obrigado!`);

            // Limpa o formulário
            formAgendamento.reset();
            console.log("Formulário de agendamento limpo.");
        });
    } else {
        // Se o formulário não for encontrado, esta mensagem aparecerá no console (F12)
        console.error("ERRO: Formulário de agendamento com id 'form-agendamento' não foi encontrado!");
    }

});