
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
            gomb.onclick = function() {
                valasz.innerHTML = "";
                pitagyros();
            };
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

            //Nincs adat megadva, vagy csak egy adat van megadva
            if(Object.values(haromszog).every(e => isNaN(e)))
            {
                valasz.innerHTML = "Nem számolható ki adat!";
                return false;
            }
            

            //a oldal

            if(!isNaN(haromszog.b) && !isNaN(haromszog.c) && isNaN(haromszog.a))
            {
                haromszog.a = Math.sqrt(haromszog.c*haromszog.c - haromszog.b*haromszog.b);
                document.getElementById("valasz").innerHTML = "Az 'a' oldal hossza: " + haromszog.a.toFixed(2) + " cm";
            }   

            //b oldal

            else if(!isNaN(haromszog.a) && !isNaN(haromszog.c) && isNaN(haromszog.b))
            {
                haromszog.b= Math.sqrt(haromszog.c*haromszog.c - haromszog.a*haromszog.a);
                document.getElementById("valasz").innerHTML = "A 'b' oldal hossza: " + haromszog.b.toFixed(2) + " cm";
            }

            //c oldal

            else if(!isNaN(haromszog.a) && !isNaN(haromszog.b) && isNaN(haromszog.c))
            {
                haromszog.c = Math.sqrt(haromszog.a*haromszog.a + haromszog.b*haromszog.b);
                document.getElementById("valasz").innerHTML = "A 'c' oldal hossza: " + haromszog.c.toFixed(2) + " cm";
            }

            
            //Derékszögű háromszög ellenőrzése

            else if(!isNaN(haromszog.a) && !isNaN(haromszog.b) && !isNaN(haromszog.c))
            {
                if(Math.sqrt(haromszog.a*haromszog.a + haromszog.b*haromszog.b) == haromszog.c)
                {
                    document.getElementById("valasz").innerHTML = "Derékszögű háromszög";
                }
                else
                {
                    document.getElementById("valasz").innerHTML = "Nem derékszögű háromszög";
                }
            }
                
                


}
