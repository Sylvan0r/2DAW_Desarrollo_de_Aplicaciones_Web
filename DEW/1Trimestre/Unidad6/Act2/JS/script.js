/* Sección de arrays de objetos */
let datos = [];
let experiencia = [];
let proyectos = [];

/* Seccion del objeto de datos de usuario */
var datosUsuario = new Object();
datosUsuario.nombre = "Adriano Martín Lorenzo";
datosUsuario.email = "adfor409@gmail.com";
datosUsuario.telefono = "621038879";
datosUsuario.bio = "¡Buenas! Soy Adriano Martín Lorenzo, un programador que le gusta afrontar nuevos retos y aprender cosas nuevas cada día. Me encanta la tecnología y todo lo relacionado con las tecnologias en general.";
datosUsuario.foto = "IMG/placeholder.png";
datosUsuario.habilidades = ["HTML", "CSS", "JavaScript", "Mysql", "Java"];
datos.push(datosUsuario);

document.getElementById("portName").innerHTML = datosUsuario.nombre;
document.getElementById("bio").innerHTML = datosUsuario.bio;
document.getElementById("profilePic").src = datosUsuario.foto;

/* Seccion del objeto de experiencia laboral */
var experienciaLaboral1 = new Object();
experienciaLaboral1.img = "https://media.licdn.com/dms/image/v2/C4D0BAQGgM2oQNJjAXQ/company-logo_200_200/company-logo_200_200/0/1639180183380?e=2147483647&v=beta&t=B5uPylE0aL6A-pCb-t8mI29ciay6xwXU_9s00-jBL3g";
experienciaLaboral1.empresa = "Robootics";
experienciaLaboral1.puesto = "Practicas";
experienciaLaboral1.fechaInicio = "Enero 2020";
experienciaLaboral1.fechaFin = "Diciembre 2021";
experienciaLaboral1.tecnologias = ["HTML", "CSS", "JavaScript", "Java"];
experiencia.push(experienciaLaboral1);

for(const exp of experiencia){
    document.getElementById("experienceList").innerHTML = "<img src='"+exp.img+"'>" + "<br>" +
                                                        "Empresa: " + exp.empresa + "<br>" +
                                                        "Puesto: " + exp.puesto + "<br>" +
                                                        "Fecha de inicio: " + exp.fechaInicio + "<br>" +
                                                        "Fecha de fin: " + exp.fechaFin + "<br>" +
                                                        "Tecnologías: " + exp.tecnologias.join(", ") + "<br><br>";
}

/* Seccion de proyectos trabajados */
var proyecto1 = new Object();
proyecto1.nombre = "Portafolio Personal";
proyecto1.descripcion = "Desarrollé un portafolio personal para mostrar mis proyectos y habilidades como desarrollador web.";
proyecto1.tecnologias = ["HTML", "CSS", "JavaScript"];
proyecto1.enlace = "";
proyectos.push(proyecto1);