/* CONSEGNA:
Descrizione:
 - Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
 - Cambiare il colore del testo cliccando su dei bottoni
Bonus:
1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
2. Cambiare la classe del testo scrivendola dentro a un input ma il cambio deve avvenire solo quando viene premuto invio */

const app = new Vue({
    el: '#app',
    data: {
        message: 'ciao vue! ',
        message2: 'farai sclerare, vero?',
        color: ''
    },
    methods: {
        colorChange(classe){
            this.color = classe;
        }
    }
})