class Edificio {
    constructor(calle, numero, codigo_postal) {
        this.calle = calle;
        this.numero = numero;
        this.codigo_postal = codigo_postal;
        this.plantas_del_edificio = [];
        /*Cada vez que se crea un edificio que muestre automáticamente un mensaje del estilo:
            construido nuevo edificio en calle: <xxxxxx>, nº: <xx>, CP: <xxxxx>. 
        */
        console.log("construido nuevo edificio en calle:" +this.calle + ", nº: " +this.numero +", CP: " +this.codigo_postal+".");
    }

    /* agregarPlantasYPuertas(numplantas, puertas) 
    // Se le pasa el número de plantas que queremos crear en el piso y el número de puertas por planta. 
    // Cada vez que se llame a este método, añadirá el número de plantas y puertas indicadas en los parámetros, 
    // a las que ya están creadas en el edificio.
    */
    agregarPlantasYPuertas(numero_plantas, numero_puertas){
        for(let i=1; i<=numero_plantas; i++){
            for(let j=1; j<=numero_puertas; j++){
                if(this.plantas_del_edificio.find(p => p.planta === i && p.puerta === j)){
                    console.log(`La planta ${i}, puerta ${j} ya existe en este edificio.`);
                    continue;
                }
                this.plantas_del_edificio.push({planta: i, puerta: j, propietario: null});
                console.log(`Agregada planta ${i}, puerta ${j} al edificio.`);
            }
        }
    }

    /* modificarNumero(numero) 
    // Se le pasa el nuevo número del edificio para que lo actualice.
    */
    modificarNumero(numero){
        this.numero = numero;
    }

    /* modificarCalle(calle) 
    // Se le pasa el nuevo nombre de la calle para que lo actualice.
    */
    modificarCalle(calle){
        this.calle = calle;
    }

    /* modificarCodigoPostal(codigo) 
    // Se le pasa el nuevo número de código postal del edificio.
    */
    modificarCodigoPostal(codigo_postal){
        this.codigo_postal = codigo_postal;
    }

    /* imprimeCalle 
    // Devuelve el nombre de la calle del edificio.
    */
    imprimeCalle(){
        console.log(this.calle);
    }

    /* imprimeNumero 
    // Devuelve el número del edificio.
    */
    imprimeNumero(){
        console.log(this.numero);
    }

    /* imprimeCodigoPostal 
    // Devuelve el código postal del edificio.
    */
    imprimeCodigoPostal(){
        console.log(this.codigo_postal);
    }

    /* agregarPropietario(nombre,planta,puerta) 
    // Se le pasa un nombre de propietario, un número de planta y un número de puerta y lo asignará como propietario de ese piso.
    */
    agregarPropietario(nombre, planta, puerta){
        const propiedad = this.plantas_del_edificio.find(p => p.planta === planta && p.puerta === puerta);
        if(propiedad){
            if(!propiedad.propietario){
                propiedad.propietario = nombre;
                /*Cada vez que se añada un propietario a un piso de un edificio que muestre un mensaje del estilo:
                    <xxxxxxxx> es ahora el propietario de la puerta <x> de la planta <x>. 
                */
                console.log(`${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.`);
            }
            else{
                console.log(`La planta ${planta}, puerta ${puerta} ya tiene propietario: ${propiedad.propietario}.`);
            }  
        } else {
            console.log(`La planta ${planta}, puerta ${puerta} no existe en este edificio.`);
        }
    }

    /* imprimePlantas 
    // Recorrerá el edificio e imprimirá todos los propietarios de cada puerta.
    */
    imprimePlantas(){
        console.log(this.plantas_del_edificio);
    }
}

/* 
Instanciamos 3 objetos edificioA, edificioB y edificioC con estos datos:

Construido nuevo edificio en calle: Garcia Prieto, nº: 58, CP: 15706.
Construido nuevo edificio en calle: Camino Caneiro, nº: 29, CP: 32004.
Construido nuevo edificio en calle: San Clemente, nº: s/n, CP: 15705.

El código postal del edificio A es: 15706.
La calle del edificio C es: San Clemente.
El edificio B está situado en la calle Camino Caneiro número 29.
*/

const edificioA = new Edificio("Garcia Prieto", 58, "15706");
const edificioB = new Edificio("Camino Caneiro", 29, "32004");
const edificioC = new Edificio("San Clemente", "s/n", "15705");

/* Agregamos 2 plantas y 3 puertas por planta al edificio A… */

edificioA.agregarPlantasYPuertas(2, 3);

/* 
Agregamos 4 propietarios al edificio A…

Jose Antonio Lopez es ahora el propietario de la puerta 1 de la planta 1.
Luisa Martinez es ahora el propietario de la puerta 2 de la planta 1.
Marta Castellón es ahora el propietario de la puerta 3 de la planta 1.
Antonio Perea es ahora el propietario de la puerta 2 de la planta 2.
*/

edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
edificioA.agregarPropietario("Luisa Martinez", 1, 2);
edificioA.agregarPropietario("Marta Castellón", 1, 3);
edificioA.agregarPropietario("Antonio Perea", 2, 2);

/*
Listado de propietarios del edificio calle García Prieto número 58

Propietario del piso 1 de la planta 1: Jose Antonio Lopez.
Propietario del piso 2 de la planta 1: Luisa Martinez.
Propietario del piso 3 de la planta 1: Marta Castellón.
Propietario del piso 1 de la planta 2:
Propietario del piso 2 de la planta 2: Antonio Perea.
Propietario del piso 3 de la planta 2:
*/

edificioA.imprimePlantas();

/* 
Agregamos 1 planta más al edificio A…

Agregamos 1 propietario más al edificio A planta 3, puerta 2… 

Pedro Mejide es ahora el propietario de la puerta 2 de la planta 3.
*/

edificioA.agregarPlantasYPuertas(3,2);

edificioA.agregarPropietario("Pedro Mejide", 3, 2);

/* 
Listado de propietarios del edificio calle García Prieto número 58

Propietario del piso 1 de la planta 1: Jose Antonio Lopez.
Propietario del piso 2 de la planta 1: Luisa Martinez.
Propietario del piso 3 de la planta 1: Marta Castellón.
Propietario del piso 1 de la planta 2:
Propietario del piso 2 de la planta 2: Antonio Perea.
Propietario del piso 3 de la planta 2:
Propietario del piso 1 de la planta 3:
Propietario del piso 2 de la planta 3: Pedro Mejide. 
*/

edificioA.imprimePlantas();