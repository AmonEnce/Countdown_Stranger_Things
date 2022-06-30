const formatarDigito = (digito) => `0${digito}`.slice(-2);

const tempoRestante=()=>{
    const dataEvento = new Date('2022-07-01 04:00:00');
    const dataHoje = Date.now();
    
    return Math.floor((dataEvento - dataHoje) / 1000);
}

var segundos = document.getElementById('segundos');
    var minutos = document.getElementById('minutos');
    var horas = document.getElementById('horas');
    var dias = document.getElementById('dias');

    var qtdSegundos = tempoRestante() % 60;
    var qtdMinutos = Math.floor((tempoRestante() % (60 * 60)) / 60);
    var qtdHoras = Math.floor((tempoRestante() % (60 * 60 * 24)) / (60 * 60));
    var qtdDias = Math.floor(tempoRestante() / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);


const atualizar = (tempo)=>{
     segundos = document.getElementById('segundos');
     minutos = document.getElementById('minutos');
     horas = document.getElementById('horas');
     dias = document.getElementById('dias');

     qtdSegundos = tempo % 60;
     qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
     qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
     qtdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
}

const contagemRegressiva = (tempo)=>{
    const pararContagem = ()=> clearInterval(id);
    const contar = () =>{
        if(tempo == 0){
            pararContagem();
        };
        atualizar(tempo);
        tempo--;
    }
    const id = setInterval(contar,1000);
}


contagemRegressiva(tempoRestante());

var count = 0;
const alterarImagem = ()=>{
    const img = setInterval(function(){
      count++;
        var imagens = [];
        imagens[0] = "url('img/bg.jpg')"
        imagens[1] = "url('img/bg1.jpg')"
        imagens[2] = "url('img/bg2.jpg')"
        imagens[3] = "url('img/bg3.jpg')"

        if(count > 3){
            count = 0;
        }

        document.getElementById('corpo').style.backgroundImage = imagens[count]

    },5000);
}

alterarImagem();