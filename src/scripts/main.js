AOS.init();

const dataDoEvento = new Date ("oct 04, 2023 22:00:00");
const timesTempdoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timesTempAtual = agora.getTime();

    const tempAteEvento = timesTempdoEvento - timesTempAtual;

    const diasemMS = 1000 * 60 * 60 * 24;
    const horaemMS =  1000 * 60 * 60 ;
    const minutoemMS = 1000 * 60;

    const diasAteEvento = Math.floor(tempAteEvento / diasemMS);
    const horasAteEvento = Math.floor((tempAteEvento % diasemMS) / horaemMS);
    const minutosAteEvento = Math.floor((tempAteEvento % horaemMS) / minutoemMS);
    const segundosAteEvento = Math.floor((tempAteEvento % minutoemMS) / 1000);

    document.getElementById("contador").innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if(tempAteEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "evento expirado";
    }

}, 1000);