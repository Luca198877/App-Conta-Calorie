let f =  document.getElementById('form');
let resetCampi =document.getElementById('resetta');
       
         function CercaVuoti()
         {
             for(var i=0; i<f.length-1; i++)
             {
                 if(f[i].value=="")
                 return false
             }
 
             return true
         }

         var fabbisognoCalorico = 0;

         function calcolaCalorie(event) {
            event.preventDefault(); // Previene l'invio del modulo
        
            let campiVuoti = false; // Variabile per controllare se ci sono campi vuoti
        
            // Controllo dei campi e alert per quelli vuoti
            if (f.eta.value === "") {
                alert("Per favore, inserisci la tua età.");
                campiVuoti = true;
            }
            if (f.peso.value === "") {
                alert("Per favore, inserisci il tuo peso.");
                campiVuoti = true;
            }
            if (f.altezza.value === "") {
                alert("Per favore, inserisci la tua altezza.");
                campiVuoti = true;
            }
            if (f.sesso.value === "") {
                alert("Per favore, seleziona il tuo sesso.");
                campiVuoti = true;
            }
        
            // Se ci sono campi vuoti, non procedere con il calcolo
            if (campiVuoti) {
                return;
            }
        
            const eta = parseInt(f.eta.value);
            const peso = parseFloat(f.peso.value);
            const altezza = parseFloat(f.altezza.value);
            const sesso = f.sesso.value;
        
            //let fabbisognoCalorico = 0;
        
            // Calcolo del Metabolismo Basale in base al sesso
            if (sesso === "uomo") {
                fabbisognoCalorico = 66.5 + (13.8 * peso) + (5 * altezza) - (6.8 * eta);
            } else if (sesso === "donna") {
                fabbisognoCalorico = 655.1 + (9.6 * peso) + (1.9 * altezza) - (4.7 * eta);
            } else {
                alert("Seleziona un sesso valido.");
                return;
            }
        
            // Fattore di attività fisica (puoi modificarlo in base al livello di attività)
            const fattoreAttivita = 1.55; // Moderatamente attivo
            fabbisognoCalorico *= fattoreAttivita;

            fabbisognoCalorico = Math.round(fabbisognoCalorico);
        
            // Mostra il risultato
            document.getElementById('risultato').innerHTML = `<p>Il tuo fabbisogno calorico giornaliero è di<strong> ${fabbisognoCalorico} kcal.</strong></p><a href ="app.html" class="">Prosegui</a>`;
            document.getElementById('risultato').style.display = 'block';
            document.getElementById('risultato').classList.add('risultato-attivo');

            localStorage.setItem('fabbisognoCalorico', fabbisognoCalorico);
            console.log(localStorage.getItem('fabbisognoCalorico'));
            
        }
        
        // Aggiungi l'event listener per il submit del modulo
        f.addEventListener('submit', calcolaCalorie);

        function reset (){
            for(var i=0; i<f.length; i++){
                 f[i].value ="";
            }
            f.sesso.selectedIndex = 0; 
        }
        resetCampi.addEventListener("click",reset)

        // Salva fabbisognoCalorico nel localStorage
        
