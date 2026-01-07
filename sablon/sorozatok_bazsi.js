function sorozatBetolt() {
    const megjelenit = document.getElementById("megjelenit");
    megjelenit.innerHTML = "";

    // Képlet
    const formula = document.createElement("div");
    formula.innerHTML = "a<sub>n</sub> = a<sub>1</sub> + (n - 1) · d";
    megjelenit.appendChild(formula);

    let sortor = document.createElement("br");
    megjelenit.appendChild(sortor);

    // Inputok
    const azonositok = [
        { id: "a1", szoveg: "Első tag (a₁)" },
        { id: "n",  szoveg: "Tagok száma (n)" },
        { id: "d",  szoveg: "Differencia (d)" }
    ];

    azonositok.forEach(e => {
        let input = document.createElement("input");
        input.id = e.id;
        input.type = "number";
        input.placeholder = e.szoveg;
        megjelenit.appendChild(input);

        let br = document.createElement("br");
        megjelenit.appendChild(br);
    });

    sortor = document.createElement("br");
    megjelenit.appendChild(sortor);

    // Gomb
    const gomb = document.createElement("button");
    gomb.innerHTML = "Számol";
    gomb.onclick = sorozatSzamol;
    megjelenit.appendChild(gomb);

    sortor = document.createElement("br");
    megjelenit.appendChild(sortor);

    // Eredmény
    const span = document.createElement("span");
    span.id = "sorozatValasz";
    megjelenit.appendChild(span);
}

function sorozatSzamol() {
    const valasz = document.getElementById("sorozatValasz");
    valasz.innerHTML = "";

    const a1 = parseFloat(document.getElementById("a1").value);
    const n  = parseInt(document.getElementById("n").value);
    const d  = parseFloat(document.getElementById("d").value);



    const an = a1 + (n - 1) * d;
    const Sn = (n / 2) * (2 * a1 + (n - 1) * d);

    valasz.innerHTML =
        `a<sub>${n}</sub> = ${an}<br>S<sub>${n}</sub> = ${Sn}`;
}
