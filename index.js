const textEntrie = document.querySelector('.text');
const messageUser = document.querySelector('.message');




function buttonEncrypt() {

    const encrypText = encrypt(textEntrie.value)
    messageUser.value = encrypText;
    textEntrie.value = '';
    messageUser.style.backgroundImage = 'none';

}

function encrypt(encryptString) {
    const warning = /^[a-z]+(?: [a-z]+)*$/;//checar

    let letterChange = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    // encryptString= encryptString.toLowerCase()
    let messageAlert = 'No se ha ingresado ningún mensaje'
    if (warning.test(encryptString)) {

        for (let i = 0; i < letterChange.length; i++) {
            if (encryptString.includes(letterChange[i][0])) {
                encryptString = encryptString.replaceAll(letterChange[i][0], letterChange[i][1])

            }

        }
        return encryptString;
    } else if (textEntrie.value === '') {
        alert('🔮🪄¡boom! Aún no escribes nada')
    } else {
        alert('⚯ Recuerda que no debes ingresar🧹 mayúsculas🗲 ni caracteres especiales ❾¾')
        textEntrie.value = '';

        messageAlert = ''


    }

    message.textContent = messageAlert;
}

function copyMessage() {
    messageUser.select();
    messageUser.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(messageUser.value);
    messageUser.value = '';
    messageUser.style.backgroundImage = 'url(imagenes/Rrrrrrr-ghghghghgh!.gif)';


}

function buttonDecrypt() {
    const decrypText = decrypt(textEntrie.value)
    messageUser.value = decrypText;
    messageUser.style.backgroundImage = 'none';

}


function decrypt(encryptedString) {
    let letterChange = [
        ['ufat', 'u'],
        ['ober', 'o'],
        ['ai', 'a'],
        ['imes', 'i'],
        ['enter', 'e']
    ];
    for (let i = 0; i < letterChange.length; i++) {
        encryptedString = encryptedString.replaceAll(letterChange[i][0], letterChange[i][1]);
    }


    return encryptedString;
}








