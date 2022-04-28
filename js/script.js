// Viene fornito un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe



//Array di oggetti con nome team
const team = [
    //Oggetti che rappresentano membri del team
    {
        //Le chiavi dei membri del team sono: name, role, image
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];


  //MILESTONE 1

  //Stampo le proprietà su console con FOR IN
  for (let i = 0; i < team.length; i++) {
      const currentElement = team[i];
      for (let key in currentElement) {
          console.log(currentElement[key]);
      }


      //MILESTONE 2

    //Crea una variabile e richiama l'id "teams" dell'HTML su JS
    //const memberTeams = document.getElementById("teams");
    //Stampa le proprietà e le informazioni su HTML sottoforma di stringa
    //memberTeams.innerHTML +=  `
    //<br> ${"Nome :"} ${currentElement.name}
    // <br> ${"Ruolo :"} ${currentElement.role}
    // <br> ${"Foto :"}  ${currentElement.image}`;
      

    // BONUS 1:
    // trasformare la stringa foto in una immagine effettiva
    // BONUS 2:
    // organizzare i singoli membri in card/schede
    // BONUS 3:
    // Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.


    //BONUS 1
    //Richiama classe dall'html dichiarandola come variabile
    let memberTeams = document.querySelector(".team-container"); //-->Crea un elemento DIV per HTML dando una classe CSS denominata "team-container" 
    //BONUS 2
      // organizza i singoli membri in cards
    memberTeams.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img
                src="img/${currentElement.image}"
                alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>${currentElement.name}</h3>
            <p>${currentElement.role}</p>
        </div>
    </div>
    `
}

//BONUS 3
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.


    // Preleva il bottone dall'htmll tramite classe id
    const btnAdd = document.getElementById("add-member");
        // Aggiungi click al bottone add
        btnAdd.addEventListener("click", function() {
             // Prendere dati dentro l'input del form creando delle variabili
             let addName = document.getElementById("name").value;
             let addRole = document.getElementById("role").value;
             let addPhoto = document.getElementById("image").value;

             // Crea un oggetto che definisce i nuovi dati aggiunti nell'input form
             const newMember = {
                 name: addName,
                 role: addRole,
                 image: addPhoto
            }

             // Salva i dati nel nuovo oggetto creato
             team.push(newMember);
             console.log(team);

             //Dopo aver inserito il nuovo membro, bisogna pulire il contenitore dei membri
             newMember.innerHTML = "";

             // Mostra la nuova card nella pagina

                //Inserisci ciclo FOR per mostrare nella pagina il nuovo membro
                addNewMemberTeam()
                
        }
    );


// // FUNCTIONS
// function addNewMemberTeam() {
//     elementFirst = [];
//     for (let i = 0; i < elementFirst.length; i++) {
//         const elementSecond = elementFirst[i];
//         for (let key in elementSecond) {
//             console.log(elementSecond[key]);
//         }
        
//     }
// }

  

  


 