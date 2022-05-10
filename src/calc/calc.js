// item.id é o id do item que estamos trabalhando
// j é a semana

export const calculate = (items) => {

    const newItems = JSON.parse(JSON.stringify(items));

    newItems.forEach((item) => {
        if(item.pai !== -1) { // Se não for a própria lapiseira atribui as entradas como saída do pai
            for(let j = 0;j<8;j++) {
                item.entradas[j] = newItems[item.pai].saida[j] * item.quantidadeReceita;
            }
        }
        if(item.calcular) {
            if(item.duplicado !== -1) { // Verifica se o item a ser calculado é duplicado, se for soma as entradas da duplicata q ja apareceu.
                for(let j = 0;j<8;j++) {
                    item.entradas[j] = item.entradas[j] + newItems[item.duplicado].entradas[j];
                }
            } // Cálculos da semana 1 - diferente porque nesse caso lidamos com o estoque inicial
            if(item.estoqueInicial - item.entradas[0] >= item.estoqueSegurança) {
                item.estoqueProjetado[0] = item.estoqueInicial - item.entradas[0];
            }
            else {
                item.estoqueProjetado[0] = -1;
                // Pensar se lança excessão ou como tratar, porque se o lead time for maior que 1 semana não tem como fazer, 
                //adicionar recebimentos programados seria complexo, uma alternativa e deixar zerar e se faltar peça deixar como na prova q era faltante mesmo e segue
                // Talvez essa validação seja válida até mesmo para semanas iniciais, se o Lead time maior que o prazo de semanas.
            }
            for(let j = 1;j<8 ;j++){ // Cálculos para as demais semanas
                const resultEstoqueProjetado = item.estoqueProjetado[j-1] === -1 ? 0 - item.entradas[j] : item.estoqueProjetado[j-1] - item.entradas[j];
                if(resultEstoqueProjetado >= item.estoqueSegurança){
                    item.estoqueProjetado[j] = resultEstoqueProjetado;
                }
                else {
                    try{
                        let aux = 1 // Variável para saber qual será o multiplicador do lote mínimo
                        while((item.tamanhoLote * aux) +  resultEstoqueProjetado < item.estoqueSegurança){
                            aux++;
                        } // Tenta atribuir para a semana que deve ser pedido se ela existir
                        if (j - item.leadTime >= 0){
                            item.saida[j - item.leadTime] = item.tamanhoLote * aux;
                            item.recebimentosProgramados[j] = item.tamanhoLote * aux;
                            item.estoqueProjetado[j] = (item.tamanhoLote * aux) + resultEstoqueProjetado;
                        }
                        else{
                            item.estoqueProjetado[j] = -1;
                        }
                    } catch (e) {
                        item.estoqueProjetado[j] = -1;
                        // Pensar em como informar que o lead time é maior que o tempo que se tem para produzir, ou se vamos zerar o estoque como na prova
                    }
                }
            }
        }
    });

    let itemsPrint = [];
    for(let i = 0; i<23;i++){
        if (newItems[i].calcular){
            itemsPrint[i] = newItems[i];
        }
    }
    return itemsPrint;
}
