import Swal from "sweetalert2"

export const errorConvert = () => {
    Swal.fire({
        title:'Error en el Formulario',
        icon: "error",
        text:"Error al ingresar los datos en la seccion de referencias, por favor asegurese de utilizar ',' para separar las referencias",
        timer: 7000,
        timerProgressBar: true

    })
}

export const errorUnknow = () => {
    Swal.fire({
        title:'Error desconocido',
        icon: "error",
        text:"Error al ejecutar el programa",
        timer: 5000,
        timerProgressBar: true
    })
}

export const errorDiferentLongs = () => {
    Swal.fire({
        title:'Error con el numero de referencias',
        icon: "error",
        text:"El número de referencias es distinto a la cantidad de referencias ingresadas!",
        timer: 5000,
        timerProgressBar: true
    })
}