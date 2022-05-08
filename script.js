"use strict"

// pirmas variantas
do {
    var prekesKaina = prompt("Įveskite prekės kainą")
    prekesKaina = Number(prekesKaina)
} while (isNaN(prekesKaina) || prekesKaina <= 0)

var pristatymas = confirm("Ar reikalingas pristaytmas į namus?")

if (pristatymas == false) {
    console.log("Prekės kaina: " + prekesKaina.toFixed(2) + " €")
    console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
}

// ir antras variantas

else {
    var miestas = prompt("Į kurį miestą reiks pristatyti?")
    while (isNaN(miestas) == false) {
        var miestas = prompt("Įveskite miestą dar kartą")
    }

    var pristatymoIslaidos = 20

    var bendraSuma = prekesKaina + pristatymoIslaidos

    console.log("Prekės kaina: " + prekesKaina.toFixed(2) + " €")
    console.log("Pristatymas: " + pristatymoIslaidos.toFixed(2) + " €")
    console.log("Iš viso: " + bendraSuma.toFixed(2) + " €")
    console.log("Prekės pristatymas į " + miestas + " per 1-3 dienas")
}

