const juegos = [ 
    {
        nombre: "halo 5: guardians",
        consola: "xbox",
        año: "2015" ,
        genero: "shooter"
    },
    {
        nombre: "gears 5",
        consola: "xbox",
        año: "2018" ,
        genero: "shooter"
    },
    {
        nombre: "firewall zero hour",
        consola: "playstation",
        año: "2018" ,
        genero: "shooter"
    },
    {
        nombre: "kill zone 2",
        consola: "playstation",
        año: "2009" ,
        genero: "shooter"
    },
    {
        nombre: "goldeneye 007",
        consola: "nintendo",
        año: "1997" ,
        genero: "shooter"
    },
    {
        nombre: "splatoon",
        consola: "nintendo",
        año: "2015" ,
        genero: "shooter"
    },
    {
        nombre: "control",
        consola: "xbox",
        año: "2019",
        genero: "aventura"
    },
    {
        nombre: "sea of thieves",
        consola: "xbox",
        año: "2018",
        genero: "aventura"
    },
    {
        nombre: "god of war",
        consola: "playstation",
        año: "2018",
        genero: "aventura"
    },
    {
        nombre: "the last of us",
        consola: "playstation",
        año: "2013",
        genero: "aventura"
    },
    {
        nombre: "mario oddysey",
        consola: "nintendo",
        año: "2017",
        genero: "aventura"
    },
    {
        nombre: "the legend of zelda breath of the wild",
        consola: "nintendo",
        año: "2017",
        genero: "aventura"
    },
    {
        nombre: "starfield",
        consola: "xbox",
        año: "2023",
        genero: "rpg"
    },
    {
        nombre: "fable 2",
        consola: "xbox",
        año: "2018",
        genero: "rpg"
    },
    {
        nombre: "bloodborne",
        consola: "playstation",
        año: "2015",
        genero: "rpg"
    },
    {
        nombre: "ghost of tsushima",
        consola: "playstation",
        año: "2020",
        genero: "rpg"
    },
    {
        nombre: "xenoblade chronicles",
        consola: "nintendo",
        año: "2010",
        genero: "rpg"
    },
    {
        nombre: "chrono trigger",
        consola: "nintendo",
        año: "1995",
        genero: "rpg"
    },
    {
        nombre: "dead or alive 4",
        consola: "xbox",
        año: "2005",
        genero: "pelea"
    },
    {
        nombre: "phantom breaker",
        consola: "xbox",
        año: "2011",
        genero: "pelea"
    },
    {
        nombre: "soulcalibur: broken destiny",
        consola: "playstation",
        año: "2023",
        genero: "pelea"
    },
    {
        nombre: "jojo's bizarre adventure: eyes of heaven",
        consola: "playstation",
        año: "2015",
        genero: "pelea"
    },
    {
        nombre: "pokken tournament dx",
        consola: "nintendo",
        año: "2017",
        genero: "pelea"
    },
    {
        nombre: "super smash bros  ultimate",
        consola: "nintendo",
        año: "2018",
        genero: "pelea"
    }
];

let consola = prompt("Introduce la consola que deseas revisar los juegos");
let genero = prompt("Introduce el género de juego que quieres buscar");

function mostrarJuegos(juegos) {
    juegos.forEach(juego => {
        console.log(juego.nombre + "__" + juego.consola + "__" + juego.genero + "__" + juego.año);
    });
}

function filtrarJuegos() {
    function mostrarJuegos(juegos) {
        juegos.forEach(juego => {
            console.log(juego.nombre + "__" + juego.consola + "__" + juego.genero + "__" + juego.año);
        });
    }

    const resultado = juegos.filter(juego => {
        if (consola && genero) {
            return juego.consola.toLowerCase() === consola.toLowerCase() && juego.genero.toLowerCase() === genero.toLowerCase();
        } else if (consola) {
            return juego.consola.toLowerCase() === consola.toLowerCase();
        } else if (genero) {
            return juego.genero.toLowerCase() === genero.toLowerCase();
        }
        return true;
    });

    if (resultado.length > 0) {
        mostrarJuegos(resultado);
    } else {
        console.error('Sin resultados');
    }
}

filtrarJuegos();