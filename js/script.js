/*Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/

const {createApp} = Vue;

createApp({
    data(){
        return{
            message : "Questo è il tuo animale guida:",
            imagePath : "",
            birthDate: ""
        }
    },
    methods : {
        assignScr : function (){
                        if(this.birthDate > 0 && this.birthDate < 30){
                            if (this.birthDate > 0 && this.birthDate < 10){
                                this.imagePath = "img/pinguhasky.jpg";
                            } else if (this.birthDate >= 10 && this.birthDate < 20){
                                this.imagePath = "img/squavallo.jpg";
                            } else {
                                this.imagePath = "img/tigroniglio.jpg";
                            }
                        }
                    }
    }
}).mount("#app");