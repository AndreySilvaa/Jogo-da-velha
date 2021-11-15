var pos = []
var jogando
var comeca
var x
var o
var cpuj 

function verifica(){
    if(pos[1].innerText == 'X' && pos[2].innerText == 'X' && pos[3].innerText == 'X' || pos[4].innerText == 'X' && pos[5].innerText == 'X' && pos[6].innerText == 'X' || pos[7].innerText == 'X' && pos[8].innerText == 'X' && pos[9].innerText == 'X' || pos[1].innerText == 'X' && pos[4].innerText == 'X' && pos[7].innerText == 'X' || pos[2].innerText == 'X' && pos[5].innerText == 'X' && pos[8].innerText == 'X' || pos[3].innerText == 'X' && pos[6].innerText == 'X' && pos[9].innerText == 'X' || pos[1].innerText == 'X' && pos[5].innerText == 'X' && pos[9].innerText == 'X' || pos[3].innerText == 'X' && pos[5].innerText == 'X' && pos[7].innerText == 'X'){
        alert('Jogo finalizado \nJOGADOR VENCEDOR!')
        jogando = false
    } else if(pos[1].innerText == 'O' && pos[2].innerText == 'O' && pos[3].innerText == 'O' || pos[4].innerText == 'O' && pos[5].innerText == 'O' && pos[6].innerText == 'O' || pos[7].innerText == 'O' && pos[8].innerText == 'O' && pos[9].innerText == 'O' || pos[1].innerText == 'O' && pos[4].innerText == 'O' && pos[7].innerText == 'O' || pos[2].innerText == 'O' && pos[5].innerText == 'O' && pos[8].innerText == 'O' || pos[3].innerText == 'O' && pos[6].innerText == 'O' && pos[9].innerText == 'O' || pos[1].innerText == 'O' && pos[5].innerText == 'O' && pos[9].innerText == 'O' || pos[3].innerText == 'O' && pos[5].innerText == 'O' && pos[7].innerText == 'O'){
        alert('Jogo finalizado \nCOMPUTADOR VENCEDOR!')
        jogando = false
    } else if(pos[1].innerText != '' && pos[2].innerText != '' && pos[3].innerText != '' && pos[4].innerText != '' && pos[5].innerText != '' && pos[6].innerText != '' && pos[7].innerText != '' && pos[8].innerText != '' && pos[9].innerText != ''){
        alert('EMPATE!!!')
    }
}

function jogadaCPU(cpup, evitap){
    
    if(cpup == evitap || cpup == 0 || pos[cpup].innerText != ''){
        cpuj = Math.round(Math.random()*9)
        jogadaCPU(cpuj, evitap)
    } else {
        //ATAQUE
        if(pos[1].innerText == 'O' && pos[2].innerText == 'O' && pos[3].innerText == ''){
            pos[3].innerText = 'O'
        } else if(pos[1].innerText == 'O' && pos[2].innerText == '' && pos[3].innerText == 'O'){
            pos[2].innerText = 'O'
        } else if(pos[1].innerText == '' && pos[2].innerText == 'O' && pos[3].innerText == 'O'){
            pos[1].innerText = 'O'
        } else if(pos[4].innerText == 'O' && pos[5].innerText == 'O' && pos[6].innerText == ''){
            pos[6].innerText = 'O'
        } else if(pos[4].innerText == 'O' && pos[5].innerText == '' && pos[6].innerText == 'O'){
            pos[5].innerText = 'O'
        } else if(pos[4].innerText == '' && pos[5].innerText == 'O' && pos[6].innerText == 'O'){
            pos[4].innerText = 'O'
        } else if(pos[7].innerText == 'O' && pos[8].innerText == 'O' && pos[9].innerText == '') {
            pos[9].innerText = 'O'
        } else if(pos[7].innerText == 'O' && pos[8].innerText == '' && pos[9].innerText == 'O'){
            pos[8].innerText = 'O'
        } else if(pos[7].innerText == '' && pos[8].innerText == 'O' && pos[9].innerText == 'O'){
            pos[7].innerText = 'O'
        } else if(pos[1].innerText == 'O' && pos[4].innerText == 'O' && pos[7].innerText == ''){
            pos[7].innerText = 'O'
        } else if(pos[1].innerText == 'O' && pos[4].innerText == '' && pos[7].innerText == 'O'){
            pos[4].innerText = 'O'
        } else if(pos[1].innerText == '' && pos[4].innerText == 'O' && pos[7].innerText == 'O'){
            pos[1].innerText = 'O'
        } else if(pos[2].innerText == 'O' && pos[5].innerText == 'O' && pos[8].innerText == ''){
            pos[8].innerText = 'O'
        } else if(pos[2].innerText == 'O' && pos[5].innerText == '' && pos[8].innerText == 'O'){
            pos[5].innerText = 'O'
        } else if(pos[2].innerText == '' && pos[5].innerText == 'O' && pos[8].innerText == 'O'){
            pos[2].innerText = 'O'
        } else if(pos[3].innerText == 'O' && pos[6].innerText == 'O' && pos[9].innerText == ''){
            pos[9].innerText = 'O'
        } else if(pos[3].innerText == 'O' && pos[6].innerText == '' && pos[9].innerText == 'O'){
            pos[6].innerText = 'O'
        } else if(pos[3].innerText == '' && pos[6].innerText == 'O' && pos[9].innerText == 'O'){
            pos[3].innerText = 'O'
        } else if(pos[1].innerText == 'O' && pos[5].innerText == 'O' && pos[9].innerText == ''){
            pos[9].innerText = 'O'
        } else if(pos[1].innerText == 'O' && pos[5].innerText == '' && pos[9].innerText == 'O'){
            pos[5].innerText = 'O'
        } else if(pos[1].innerText == '' && pos[5].innerText == 'O' && pos[9].innerText == 'O'){
            pos[1].innerText = 'O'
        } else if(pos[3].innerText == 'O' && pos[5].innerText == 'O' && pos[7].innerText == ''){
            pos[7].innerText = 'O'
        } else if(pos[3].innerText == 'O' && pos[5].innerText == '' && pos[7].innerText == 'O'){
            pos[5].innerText = 'O'
        } else if(pos[3].innerText == '' && pos[5].innerText == 'O' && pos[7].innerText == 'O'){
            pos[3].innerText = 'O'
        }
        //DEFESA
        if(pos[1].innerText == 'X' && pos[2].innerText == 'X' && pos[3].innerText == ''){
            pos[3].innerText = 'O'
        } else if(pos[1].innerText == 'X' && pos[2].innerText == '' && pos[3].innerText == 'X'){
            pos[2].innerText = 'O'
        } else if(pos[1].innerText == '' && pos[2].innerText == 'X' && pos[3].innerText == 'X'){
            pos[1].innerText = 'O'
        } else if(pos[4].innerText == 'X' && pos[5].innerText == 'X' && pos[6].innerText == ''){
            pos[6].innerText = 'O'
        } else if(pos[4].innerText == 'X' && pos[5].innerText == '' && pos[6].innerText == 'X'){
            pos[5].innerText = 'O'
        } else if(pos[4].innerText == '' && pos[5].innerText == 'X' && pos[6].innerText == 'X'){
            pos[4].innerText = 'O'
        } else if(pos[7].innerText == 'X' && pos[8].innerText == 'X' && pos[9].innerText == '') {
            pos[9].innerText = 'O'
        } else if(pos[7].innerText == 'X' && pos[8].innerText == '' && pos[9].innerText == 'X'){
            pos[8].innerText = 'O'
        } else if(pos[7].innerText == '' && pos[8].innerText == 'X' && pos[9].innerText == 'X'){
            pos[7].innerText = 'O'
        } else if(pos[1].innerText == 'X' && pos[4].innerText == 'X' && pos[7].innerText == ''){
            pos[7].innerText = 'O'
        } else if(pos[1].innerText == 'X' && pos[4].innerText == '' && pos[7].innerText == 'X'){
            pos[4].innerText = 'O'
        } else if(pos[1].innerText == '' && pos[4].innerText == 'X' && pos[7].innerText == 'X'){
            pos[1].innerText = 'O'
        } else if(pos[2].innerText == 'X' && pos[5].innerText == 'X' && pos[8].innerText == ''){
            pos[8].innerText = 'O'
        } else if(pos[2].innerText == 'X' && pos[5].innerText == '' && pos[8].innerText == 'X'){
            pos[5].innerText = 'O'
        } else if(pos[2].innerText == '' && pos[5].innerText == 'X' && pos[8].innerText == 'X'){
            pos[2].innerText = 'O'
        } else if(pos[3].innerText == 'X' && pos[6].innerText == 'X' && pos[9].innerText == ''){
            pos[9].innerText = 'O'
        } else if(pos[3].innerText == 'X' && pos[6].innerText == '' && pos[9].innerText == 'X'){
            pos[6].innerText = 'O'
        } else if(pos[3].innerText == '' && pos[6].innerText == 'X' && pos[9].innerText == 'X'){
            pos[3].innerText = 'O'
        } else if(pos[1].innerText == 'X' && pos[5].innerText == 'X' && pos[9].innerText == ''){
            pos[9].innerText = 'O'
        } else if(pos[1].innerText == 'X' && pos[5].innerText == '' && pos[9].innerText == 'X'){
            pos[5].innerText = 'O'
        } else if(pos[1].innerText == '' && pos[5].innerText == 'X' && pos[9].innerText == 'X'){
            pos[1].innerText = 'O'
        } else if(pos[3].innerText == 'X' && pos[5].innerText == 'X' && pos[7].innerText == ''){
            pos[7].innerText = 'O'
        } else if(pos[3].innerText == 'X' && pos[5].innerText == '' && pos[7].innerText == 'X'){
            pos[5].innerText = 'O'
        } else if(pos[3].innerText == '' && pos[5].innerText == 'X' && pos[7].innerText == 'X'){
            pos[3].innerText = 'O'
        } else {
            pos[cpup].innerText = 'O'
        }
        //pos[cpup].innerText = 'O'
    }

    x = 1
}

function joga(p){
    if(jogando == false){
        alert('Jogo finalizado.')
    } else{
        if(x == 1){
            if(pos[p].innerText != ''){
                alert('Jogada inválida.')
            } else{
                pos[p].innerText = "X"
                x = 0
                verifica()
                if(jogando == true){
                    cpuj = Math.round(Math.random()*9)
                    jogadaCPU(cpuj, p)
                    verifica()
                }
                
            }
        }
    }
}

function inicia(p){
    jogando = true
    comeca = Math.round(Math.random()*1)

    for(var c=1;c < 10; c++){
        pos[c] = document.getElementById("dv"+c)
        pos[c].innerText = ''
    }

    if(comeca == 1){
        x = comeca
        document.getElementById('dvcomeca').innerText = 'Quem começa: Jogador'
    } else {
        document.getElementById('dvcomeca').innerText = 'Quem começa: CPU'
        cpuj = Math.round(Math.random()*9)
        jogadaCPU(cpuj, 0)
    }
}


window.addEventListener('load', inicia)