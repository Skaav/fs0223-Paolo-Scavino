/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando 
  solamente i primi 2 caratteri della prima e gli ultimi 3 della seconda. 
  Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
{
  function concat(v1, v2) {
    let minuscolo = v1.slice(0, 2) + v2.slice(-3);
    let maiuscolo = minuscolo.toUpperCase();
    return maiuscolo;
  }
  console.log(concat("paolo", "scavino"));
}

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un 
  valore random compreso tra 0 e 100 (incluso).
*/
{
  let numeriRandomici = [];
  function giveMeRandom(n) {
    for (g = 0; g < n; g++)
      numeriRandomici.push(Math.floor(Math.random() * 100) + 1);
    return numeriRandomici;
  }
  console.log(giveMeRandom(10));

  /* ESERCIZIO 3
    Scrivi una funzione per ricavare solamente i valori PARI da un array 
    composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
  */
  let soloPari = numeriRandomici.filter(n => n % 2 == 0)
  console.log(soloPari);

  /* ESERCIZIO 4
    Scrivi una funzione per sommare i numeri contenuti in un array
  */
  let somma = 0;
  numeriRandomici.forEach(s => somma += s);
  console.log(somma);

  let sum = 0;
  function sNumeri(numeriRandomici) {
    for (i = 0; i < numeriRandomici.length; i++)
      sum += numeriRandomici[i];
    return sum;
  }
  sNumeri(numeriRandomici)
  console.log(sum);

  /* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
  */
  let sommaNumeri = numeriRandomici.reduce((h, k) => h + k)
  console.log(sommaNumeri);

  /* ESERCIZIO 6
    Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, 
    ritorni un secondo array con tutti i valori del precedente incrementati di n
  */
  let n = 2;
  let increMento = numeriRandomici.map(x => x + n);
  console.log(increMento);
}

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente 
  le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
{
  let arrayStringhe = ['muffin', 'pizza', 'patatine',];

  let arrayForEach = [];
  arrayStringhe.forEach(i => arrayForEach.push(i.length));
  console.log(arrayForEach);

  let arrayMap = arrayStringhe.map(x => x.length);
  console.log(arrayMap);
}

/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
{
  let numeriDispari = [];
  function dispari() {
    for (i = 0; i < 100; i++) {
      if (i % 2 != 0) {
        numeriDispari.push(i)
      }
    }
    return numeriDispari;
  }
  console.log(dispari());
}
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
let filmVecchio = movies.reduce(function (p, g) {
  if (p.Year > g.Year) {
    return g;
  } else {
    return p;
  }
})
console.log(filmVecchio);

/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
function nFilm() {
  return movies.length;
}
console.log(nFilm());
/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
let film = [];
for (i = 0; i < movies.length; i++)
  film.push(movies[i].Title);
console.log(film);
/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
let filmNuovo = [];
movies.filter(function (p) {
  if (p.Year >= '2000') {
    filmNuovo.push(p);
  }
}
)
/*
movies.filter(function(movie){
  return movie.Year >= 2000
})
*/
console.log(filmNuovo);
/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
let id = "tt4154796";
let search = movies.filter(function (c) {
  return c.imdbID == id;
})

console.log(search);
/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film 
  contenuti nell'array fornito.
*/

function sAnni() {
  return movies.reduce(function (p, c) {
    return p + Number(c.Year);
  }, 0)
}
console.log(sAnni());