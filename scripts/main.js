function areaCirculo(raio) {
    return Math.round(3.14159265 * (raio * raio));
    // return 'ainda não resolvido';
}

function fahrenheitParaCelsius(graus) {
    return Math.round((graus - 32) * 5/9);
}

function maiorNumero(n1, n2) {
    return Math.max(n1, n2);
}

function sinal(n1) {
    if(n1 === 0) {
        return 0;
    }
    return n1/Math.abs(n1);
}

function inteirosEntre(n1, n2) {
    let maior = Math.max(n1, n2);
    let menor = Math.min(n1, n2);

    let colecao = new Array();
    let counter = 0;
    for(let i = menor; i < maior; i++) {
        colecao[counter] = i;
        counter++;
    }
    return colecao;
}

/* Não mexa em nada aqui embaixo, pois pode dar problema... */

function checkEqual(exercise, n_answers) {
    for(let i = 1; i <= n_answers; i++) {
        let correct = document.getElementById('ex_' + exercise + '_correct_' + i);
        let answered = document.getElementById('ex_' + exercise + '_answer_' + i);
        if(correct.textContent === answered.textContent) {
            answered.bgColor = '#7ECC49';
        } else {
            answered.bgColor = '#FF8D85';
        }
    }
    
}

document.getElementById('ex_1_answer_1').textContent = areaCirculo(10);
document.getElementById('ex_1_answer_2').textContent = areaCirculo(2);
document.getElementById('ex_1_answer_3').textContent = areaCirculo(3);
document.getElementById('ex_1_answer_4').textContent = areaCirculo(4);
document.getElementById('ex_1_answer_5').textContent = areaCirculo(5);
checkEqual(1, 5);

document.getElementById('ex_2_answer_1').textContent = fahrenheitParaCelsius(100);
document.getElementById('ex_2_answer_2').textContent = fahrenheitParaCelsius(0);
document.getElementById('ex_2_answer_3').textContent = fahrenheitParaCelsius(-273);
checkEqual(2, 3);

document.getElementById('ex_3_answer_1').textContent = maiorNumero(1, 2);
document.getElementById('ex_3_answer_2').textContent = maiorNumero(2, 1);
document.getElementById('ex_3_answer_3').textContent = maiorNumero(0, 0);
checkEqual(3, 3);

document.getElementById('ex_4_answer_1').textContent = sinal(0);
document.getElementById('ex_4_answer_2').textContent = sinal(-123);
document.getElementById('ex_4_answer_3').textContent = sinal(365);
checkEqual(4, 3);

document.getElementById('ex_5_answer_1').textContent = inteirosEntre(0, 10);
document.getElementById('ex_5_answer_2').textContent = inteirosEntre(0, 11);
document.getElementById('ex_5_answer_3').textContent = inteirosEntre(0, 5);
document.getElementById('ex_5_answer_4').textContent = inteirosEntre(10, 0);
document.getElementById('ex_5_answer_5').textContent = inteirosEntre(-5, 5);
document.getElementById('ex_5_answer_6').textContent = inteirosEntre(-7, 7);
document.getElementById('ex_5_answer_7').textContent = inteirosEntre(-1, 1);
document.getElementById('ex_5_answer_8').textContent = inteirosEntre(1, -1);
checkEqual(5, 8);