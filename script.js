
const inputTarefa = document.getElementById('input-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaTarefas = document.getElementById('lista-tarefas');
const contadorTarefas = document.getElementById('contador-tarefas');
const btnLimparTudo = document.getElementById('btn-limpar-tudo');
const mensagemVazia = document.getElementById('mensagem-vazia');


function atualizarInterface() {
    const totalTarefas = listaTarefas.children.length;
    contadorTarefas.textContent = `Total: ${totalTarefas} tarefa(s)`;

    if (totalTarefas === 0) {
        mensagemVazia.style.display = 'block';
    } else {
        mensagemVazia.style.display = 'none';
    }
}


function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    
    const li = document.createElement('li');
    const spanTexto = document.createElement('span');
    spanTexto.textContent = textoTarefa;

    const divAcoes = document.createElement('div');
    divAcoes.classList.add('acoes');

    const btnConcluir = document.createElement('button');
    btnConcluir.textContent = 'Concluir';
    btnConcluir.classList.add('btn-concluir');

    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir';
    btnExcluir.classList.add('btn-perigo');

    
    btnConcluir.addEventListener('click', function() {
        li.classList.toggle('concluida');
    });

    
    btnExcluir.addEventListener('click', function() {
        li.remove();
        atualizarInterface();
    });

    
    divAcoes.appendChild(btnConcluir);
    divAcoes.appendChild(btnExcluir);

    li.appendChild(spanTexto);
    li.appendChild(divAcoes);

    
    listaTarefas.appendChild(li);

    
    inputTarefa.value = '';
    inputTarefa.focus();
    atualizarInterface();
}


btnAdicionar.addEventListener('click', adicionarTarefa);


inputTarefa.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});


btnLimparTudo.addEventListener('click', function() {
    if (listaTarefas.children.length > 0) {
        if (confirm('Tem certeza de que deseja excluir todas as tarefas?')) {
            listaTarefas.innerHTML = '';
            atualizarInterface();
        }
    }
});


atualizarInterface();