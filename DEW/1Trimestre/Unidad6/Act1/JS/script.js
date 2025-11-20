document.getElementById("generate").addEventListener("click", function event(event){
    event.preventDefault();
    generate();
});

function generate() {
    /* Mapa base */
    const mapSize = document.getElementById("mapSize").value;
    const maxOcupedArea = document.getElementById("maxOcupedArea").value;
    /* Naturaleza */
    const natMinZones = document.getElementById("natMinZones").value;
    const natMaxZones = document.getElementById("natMaxZones").value;
    const natMaxSize = document.getElementById("natMaxSize").value;
    const natTotalMaxSize = document.getElementById("natTotalMaxSize");
    /* Urbano */
    const urbMinZones = document.getElementById("urbMinZones").value;
    const urbMaxZones = document.getElementById("urbMaxZones").value;
    const urbMaxSize = document.getElementById("urbMaxSize").value;
    const urbTotalMaxSize = document.getElementById("urbTotalMaxSize");
    /* Comercial */
    const comMinZones = document.getElementById("comMinZones").value;
    const comMaxZones = document.getElementById("comMaxZones").value;
    const comMaxSize = document.getElementById("comMaxSize").value;
    const comTotalMaxSize = document.getElementById("comTotalMaxSize");

    if(validator(mapSize,maxOcupedArea,natMinZones,natMaxZones,natMaxSize,natTotalMaxSize,urbMinZones,urbMaxZones,urbMaxSize,urbTotalMaxSize,comMinZones,comMaxZones,comMaxSize,comTotalMaxSize)){
        console.log("Tamaño maximo del mapa -> "+mapSize);
        console.log("Tamaño maximo de areas ocupadas del mapa -> "+maxOcupedArea);
        console.log("Tamaño minimo de zonas de naturaleza del mapa -> "+natMinZones);
        console.log("Tamaño maximo de zonas de naturaleza del mapa -> "+natMaxZones);
    }
}

function validator(mapSize,maxOcupedArea,natMinZones,natMaxZones,natMaxSize,natTotalMaxSize,urbMinZones,urbMaxZones,urbMaxSize,urbTotalMaxSize,comMinZones,comMaxZones,comMaxSize,comTotalMaxSize){
    /* Validador de seccion del mapa */
    if(mapSize>0){
        if(maxOcupedArea>0 && maxOcupedArea<100){
            /* Validador de seccion de naturaleza */
            if(natMinZones>=0){
                if(natMaxZones>0 && natMaxZones>natMinZones){
                    return true;
                }else{
                    alert("Tamaño maximos de zonas de naturaleza incompatible");
                    return false;
                }
            }else{
                alert("Tamaño minimo de zonas de naturaleza incompatible");
                return false;
            }
        }else{
            alert("Tamaño incompatible de areas ocupadas maximas del mapa");
            return false;
        }
    }else{
        alert("Tamaño incompatible de mapa");
        return false;
    }
}