# ahorcado

## components

### App

    - Tiene la palabra a adivinar
    - Chequea la letra RECIBIDA
    - Si la letra es correcta, la envía a Word e informa a Letter
    - Si la envía es incorrecta, pinta una linea en Hangman
    - Indica si el jugador ha perdido (todas las lineas del svg han sido mostradas)
    - Indica si el jugador ha ganado (todas las letras de la palabra han sido adivinadas)

### Hangman

    - Renderiza el svg de Hangman
    - RECIBE una función que cambiará la clase a la linea del svg si la letra es incorrecta

### Word

    - Renderiza espacios como letras tenga la palabra a adivinar
    - RECIBE una letra correcta y la renderiza

### Letter

    - Renderiza todas las letras del abecedario
    - ENVIA el valor de la letra pulsada
    - RECIBE una función que hara cambiar la letra de color si la letra es correcta o no
