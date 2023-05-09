const movieCards = [
  {
    name: "The End of Evangelion",
    date: "1997",
    synopsis:
      "La Seele organise un assaut général contre la NERV pour détruire les Eva. La conclusion d'une série d'anime historique.",
    poster: "./img/images2.jpg"
  },
  {
    name: "Dune",
    date: "2020",
    synopsis:
      "Paul Atreides, un jeune homme brillant et doué au destin plus grand que lui-même, doit se rendre sur la planète la plus dangereuse de l'univers afin d'assurer l'avenir de sa famille et de son peuple",
    poster: "./img/images1.jpg"
  },
  {
    name: "Nope",
    date: "2022",
    synopsis:
      "Les habitants d'une vallée perdue du fin fond de la Californie sont témoins d'une découverte terrifiante à caractère surnaturel qui affecte humains et animaux. Les gérants d'un ranch de chevaux tentent de comprendre ce phénomène mystérieux alors que le propriétaire d'un parc à thème tente d'en tirer profit.",
    poster: "./img/images3.jpg"
  },
  {
    name: "Matrix",
    date: "2021",
    synopsis:
      "Pour savoir si sa réalité est une construction physique ou mentale, M. Anderson, alias Neo, devra choisir de suivre une fois de plus le lapin blanc. S'il a appris quelque chose, c'est que ce choix, bien qu'illusion, reste le seul moyen de sortir de la Matrice ou d'y entrer. Neo sait déjà ce qu'il doit faire, mais ce qu'il ne sait pas encore, c'est que la Matrice est plus forte, plus sûre et bien plus dangereuse que jamais.",
    poster: "./img/images4.jpg"
  },
  {
    name: "Les Eternels",
    date: "2021",
    synopsis:
      "Après les événements d'*Avengers : Endgame*, une tragédie imprévue oblige les Éternels à sortir de l'ombre et à se rassembler à nouveau face à l'ennemi le plus ancien de la race humaine : les Déviants.",
    poster: "https://fr.web.img6.acsta.net/pictures/21/10/13/10/33/5985249.jpg"
  },
  {
    name: "Everything []",
    date: "2023",
    synopsis:
      "Evelyn Wang tient une laverie avec son mari, Waymond qui veut divorcer. Evelyn est à bout. C'est alors qu'elle fait la connaissance d'Alpha Waymond. Ce dernier est une version alternative de Waymond. Il lui explique que de nombreux univers parallèles existent, car chaque choix fait engendre la création d'un nouvel univers. Les habitants de l'Alphaverse ont ainsi développé une technologie permettant d'accéder aux compétences, aux souvenirs et au corps de leurs homologues de l'univers parallèle.",
    poster: "./img/images6.jpg"
  }
];


/*NEW*/
var numCard = 0;

/*NEW*/
function cards() {
  movieCards.forEach((movieCards) => {
    let name = movieCards.name;
    let date = movieCards.date;
    let poster = movieCards.poster;
    let synopsis = movieCards.synopsis;
    let id = numCard;

    const card = `
      <div class="card">
      <img class="card-image" src="${poster}" alt="${name}, ${date}, poster"  />
      <div class="card-title">
      <span class="date"></span>
          <h2>${name}</h2>
      <div class="card-stats">
          <div class="btn"><a href="./page.html?filmIndex=${id}">Lire Plus...</a></div>
      </div>
      </div>
      `;

    document.getElementById("cards").innerHTML += card;
    numCard = id + 1;
    ;
  });
}

cards();