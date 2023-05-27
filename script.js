const mensaje = document.querySelector(".mensaje");

const mensajeModificado = document.querySelector(".mensaje-modificado");

const campoSalida = document.querySelector(".campo-salida");

const btnCopiar = document.querySelector(".btn-copiar");



function btnEncriptar() {
    const textoEncriptado = encriptar(mensaje.value)
    mensajeModificado.value = textoEncriptado
    mensaje.value = ""
    campoSalida.style.display = "none"
    btnCopiar.style.display = "block"
    mensajeModificado.style.display = "block"
}


function encriptar(stringEncriptado) {
    let llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < llaves.length; i++) {
        if(stringEncriptado.includes(llaves[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(llaves[i][0], llaves[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(mensaje.value)
    mensajeModificado.value = textoDesencriptado
    mensaje.value = ""
    campoSalida.style.display = "none"
    btnCopiar.style.display = "block"
    mensajeModificado.style.display = "block"
}

function desencriptar(stringDesencriptado) {
    let llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < llaves.length; i++) {
        if(stringDesencriptado.includes(llaves[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(llaves[i][1], llaves[i][0])
        }
    }
    return stringDesencriptado
}

btnCopiar.addEventListener("click", async () => {
    mensajeModificado.select();
    await navigator.clipboard.writeText(mensajeModificado.value);
})
