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

  //Stampo le proprietà su console
  for (let i = 0; i < team.length; i++) {
      const currentElement = team[i];
      for (let key in currentElement) {
          console.log(currentElement[key]);
      }

      
      //MILESTONE 2

    //Crea una variabile e richiama l'id "teams" dell'HTML su JS
    const memberTeams = document.getElementById("teams");
    //Stampa le proprietà e le informazioni su HTML sottoforma di stringa
    memberTeams.innerHTML +=  `<br> ${"Nome :"} ${currentElement.name} <br> ${"Ruolo :"} ${currentElement.role} <br> ${"Foto :"}  ${currentElement.image}`

  }

  
