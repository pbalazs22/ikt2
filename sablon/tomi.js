
//Pitagyros-tétel
/*
function szamol(a, b, c) {
    return Math.sqrt(a*a + b*b) === c;
}

*/

function pitagyrosBetolt()
{
    const megjelenit = document.getElementById("megjelenit");
    megjelenit.innerHTML = "";

    let sortor = document.createElement("br")
        megjelenit.appendChild(sortor);

    const azonositok = [{adat:"a",szoveg:"a oldal"},{adat:"b",szoveg:"b oldal"},{adat:"c",szoveg:"c oldal"}];

    let kep = document.createElement("img")
    kep.src = "pitagyros.jpg"
    kep.style.width = "180px"
    kep.style.height = "200px"
    megjelenit.appendChild(kep);
    megjelenit.appendChild(sortor);

    azonositok.forEach(e => {
                let input = document.createElement("input")
                input.id = e.adat;
                input.placeholder = e.szoveg;
                megjelenit.appendChild(input)
                let sortor = document.createElement("br")
                megjelenit.appendChild(sortor)
    });

    const gomb = document.createElement("button");
            gomb.onclick = pitagyros;
            gomb.innerHTML = "Kiszámol"
            megjelenit.appendChild(gomb);

            sortor = document.createElement("br")
            megjelenit.appendChild(sortor)

            const span = document.createElement("span");
            span.id = "valasz"
            megjelenit.appendChild(span);
}

function pitagyros()
{
        const valasz = document.getElementById("valasz")
            valasz.innerHTML = ""
            haromszog = {};
            const a = document.getElementById("a").value
            const b = document.getElementById("b").value
            const c = document.getElementById("c").value

            haromszog = {a:parseFloat(a),
                b:parseFloat(b),
                c:parseFloat(c)
            };

            console.log(haromszog)

            //Nincs adat megadva
            if(Object.values(haromszog).every(e => isNaN(e)))
            {
                valasz.innerHTML = "Nem számolható ki adat!";
                return false;
            }

            //Egy adat van megadva
            if(Object.values(haromszog).filter(e => isNaN(e)).length == 5)
            {
                valasz.innerHTML = "Nem számolható ki adat!";
                return false;
            }
}
