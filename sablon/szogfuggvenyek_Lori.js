function szogfuggvenyekBetolt()
        {
            const megjelenit = document.getElementById("megjelenit");
            megjelenit.innerHTML = "";

            const azonositok = [{adat:"a",szoveg:"a oldal"},{adat:"b",szoveg:"b oldal"},{adat:"c",szoveg:"c oldal"},{adat:"alfa",szoveg:"Alfa szög"},
            {adat:"beta",szoveg:"Béta szög"},{adat:"gamma",szoveg:"Gamma szög"}];

            
            let kep = document.createElement("img")
            kep.src = "harom.png"
            kep.style.width = "20%"
            kep.style.height = "20%"
            megjelenit.appendChild(kep)

            let sortor = document.createElement("br")
            megjelenit.appendChild(sortor)

            azonositok.forEach(e => {
                let input = document.createElement("input")
                input.id = e.adat;
                input.placeholder = e.szoveg;
                megjelenit.appendChild(input)
                let sortor = document.createElement("br")
                megjelenit.appendChild(sortor)
            })

            const gomb = document.createElement("button");
            gomb.onclick = szogfuggvenyek;
            gomb.innerHTML = "Kiszámol"
            megjelenit.appendChild(gomb);

            sortor = document.createElement("br")
            megjelenit.appendChild(sortor)

            const span = document.createElement("span");
            span.id = "valasz"
            megjelenit.appendChild(span);

        }

        function szogfuggvenyek()
        {
            let lehetHaromszog = false
            const valasz = document.getElementById("valasz")
            valasz.innerHTML = ""
            haromszog = {};
            const a = document.getElementById("a").value
            const b = document.getElementById("b").value
            const c = document.getElementById("c").value
            const alfa = document.getElementById("alfa").value
            const beta = document.getElementById("beta").value
            const gamma = document.getElementById("gamma").value

            haromszog = {a:parseFloat(a),
                b:parseFloat(b),
                c:parseFloat(c),
                alfa:parseFloat(alfa),
                beta:parseFloat(beta),
                gamma:parseFloat(gamma)
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



            //Két szög
            if(!isNaN(haromszog.alfa) && !isNaN(haromszog.beta))
            {
                console.log(haromszog.alfa,haromszog.beta)

                console.log(180.0-(haromszog.alfa+haromszog.beta))
                valasz.innerHTML = `Gamma: ${180.0-(haromszog.alfa+haromszog.beta)}°`;
                console.log("Helló")
            }
            else if(!isNaN(haromszog.beta) && !isNaN(haromszog.gamma))
            {
                valasz.innerHTML = `Alfa: ${180.0-(haromszog.beta+haromszog.gamma)}°`;
            }
            else if(!isNaN(haromszog.alfa) && !isNaN(haromszog.gamma))
            {
                valasz.innerHTML = `Béta: ${180.0-(haromszog.alfa+haromszog.gamma)}°`;
            }

            //Három oldal
            if(!isNaN(haromszog.a)&& !isNaN(haromszog.b) && !isNaN(haromszog.c))
            {
                if((haromszog.a+haromszog.b > haromszog.c && haromszog.c >= haromszog.b && haromszog.c >= haromszog.a)||
                (haromszog.b+haromszog.c > haromszog.a && haromszog.a >= haromszog.b && haromszog.a >= haromszog.c) ||
                (haromszog.a + haromszog.c > haromszog.b && haromszog.b >= haromszog.c && haromszog.b >= haromszog.a))
                {
                    lehetHaromszog = true;
                    valasz.innerHTML = "Lehet háromszög!";
                }
                /*else if(haromszog[0] == haromszog[1] && haromszog[0]== haromszog[2])
                {
                    leheteHaromszog = true;
                    valasz.innerHTML = "Lehet háromszög!\nAlfa = 60°\nBéta = 60°\nGamma = 60°"
                }*/
                else
                {
                    lehetHaromszog = false;
                    valasz.innerHTML = "Nem lehet ilyen háromszög!";
                    return false;
                }

                if(haromszog.a == haromszog.b && haromszog.b == haromszog.c)
                {
                    valasz.innerHTML = "Alfa: 60°\nBéta: 60°\nGamma: 60°";
                }

                //c2+a2+b2/-2ab  =  cos gamma
                //cos gamma = a2+b2 - 2ab * cos gamma
                //c2 = a2+b2 - 2ab * cos gamma


                let gamma = Math.acos((haromszog.c**2-haromszog.a**2-haromszog.b**2) / (-2*haromszog.a*haromszog.b));
                let beta = Math.acos((haromszog.b**2-haromszog.a**2-haromszog.c**2) / (-2*haromszog.a*haromszog.c));
                let alfa = Math.acos((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*haromszog.b*haromszog.c));

                let alfaFok = Math.floor(alfa*(180/Math.PI))
                let betaFok = Math.floor(beta*(180/Math.PI))
                let gammaFok = Math.floor(gamma*(180/Math.PI))

                valasz.innerHTML = "\nAlfa: "+alfaFok+"° \nBéta: "+betaFok+"° \nGamma: "+gammaFok+"° ";


            }

            //Három oldal három szög
            if(lehetHaromszog && !isNaN(haromszog.alfa) && !isNaN(haromszog.beta))
            {
                if(Math.round(Math.cos(haromszog.alfa*(Math.PI/180)),2) == Math.round((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*(haromszog.a*haromszog.b)),2)&&
                Math.round(Math.cos(haromszog.beta*(Math.PI/180)),2) == Math.round((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*(haromszog.a*haromszog.b)),2)&&
                Math.round(Math.cos(haromszog.gamma*(Math.PI/180)),2) == Math.round((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*(haromszog.a*haromszog.b)),2))
                {
                    valasz.innerHTML = "Lehet ezekkel a szögekkel háromszög!\n"

                }
                else
                {
                    let gamma = Math.acos((haromszog.c**2-haromszog.a**2-haromszog.b**2) / (-2*haromszog.a*haromszog.b));
                    let beta = Math.acos((haromszog.b**2-haromszog.a**2-haromszog.c**2) / (-2*haromszog.a*haromszog.c));
                    let alfa = Math.acos((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*haromszog.b*haromszog.c));

                    let alfaFok = Math.floor(alfa*(180/Math.PI))
                    let betaFok = Math.floor(beta*(180/Math.PI))
                    let gammaFok = Math.floor(gamma*(180/Math.PI))
                    
                    console.log(Math.round(Math.cos(haromszog.alfa*(Math.PI/180)),2),(haromszog.a**2.0-haromszog.b**2.0-haromszog.c**2.0) / (-2.0*(haromszog.a*haromszog.b)))
                
                    valasz.innerHTML = "Nem lehet ilyen szöggekkel háromszög!\nA háromszög helyes adatai a három oldalból számítva:\nAlfa: "+alfaFok+"°\nBéta: "+betaFok+"°\nGamma: "+gammaFok+"°";

            }
            console.log("3 oldal 3 szög")
        
        }

        //Három oldal két szög
        //cos(alfa)= a²-b²-c²/(-2ab)
        else if(lehetHaromszog && !isNaN(haromszog.alfa) && !isNaN(haromszog.beta))
            {
                if(Math.round(Math.cos(haromszog.alfa*(Math.PI/180)),2) == Math.round((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*(haromszog.a*haromszog.b)),2)&&
                Math.round(Math.cos(haromszog.beta*(Math.PI/180)),2) == Math.round((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*(haromszog.a*haromszog.b)),2))
                {

                    let gamma = Math.acos((haromszog.c**2-haromszog.a**2-haromszog.b**2) / (-2*haromszog.a*haromszog.b));

                    let gammaFok = Math.floor(gamma*(180/Math.PI))
                    
                    valasz.innerHTML = "Lehet háromszög! Gamma: "+gammaFok+"°";

                }
                else
                {
                    let gamma = Math.acos((haromszog.c**2-haromszog.a**2-haromszog.b**2) / (-2*haromszog.a*haromszog.b));
                    let beta = Math.acos((haromszog.b**2-haromszog.a**2-haromszog.c**2) / (-2*haromszog.a*haromszog.c));
                    let alfa = Math.acos((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*haromszog.b*haromszog.c));

                    let alfaFok = Math.floor(alfa*(180/Math.PI))
                    let betaFok = Math.floor(beta*(180/Math.PI))
                    let gammaFok = Math.floor(gamma*(180/Math.PI))
                    
                    console.log(Math.round(Math.cos(haromszog.alfa*(Math.PI/180)),2),(haromszog.a**2.0-haromszog.b**2.0-haromszog.c**2.0) / (-2.0*(haromszog.a*haromszog.b)))
                
                    valasz.innerHTML = "Nem lehet ilyen alfa szöggel háromszög!\nA háromszög helyes adatai a három oldalból számítva:\nAlfa: "+alfaFok+"°\nBéta: "+betaFok+"°\nGamma: "+gammaFok+"°";

            }
            console.log("3 oldal 2 szög alfa béta")
        
        }

        //Három oldal két szög béta gamma
        //cos(alfa)= a²-b²-c²/(-2ab)
        else if(lehetHaromszog && !isNaN(haromszog.beta) && !isNaN(haromszog.gamma))
            {
                if(Math.round(Math.cos(haromszog.beta*(Math.PI/180)),2) == Math.round((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*(haromszog.a*haromszog.b)),2)&&
                Math.round(Math.cos(haromszog.gamma*(Math.PI/180)),2) == Math.round((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*(haromszog.a*haromszog.b)),2))
                {

                    let alfa = Math.acos((haromszog.a**2-haromszog.a**2-haromszog.b**2) / (-2*haromszog.b*haromszog.c));

                    let alfaFok = Math.floor(alfa*(180/Math.PI))
                    
                    valasz.innerHTML = "Lehet háromszög! Alfa: "+alfaFok+"°";

                }
                else
                {
                    let gamma = Math.acos((haromszog.c**2-haromszog.a**2-haromszog.b**2) / (-2*haromszog.a*haromszog.b));
                    let beta = Math.acos((haromszog.b**2-haromszog.a**2-haromszog.c**2) / (-2*haromszog.a*haromszog.c));
                    let alfa = Math.acos((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*haromszog.b*haromszog.c));

                    let alfaFok = Math.floor(alfa*(180/Math.PI))
                    let betaFok = Math.floor(beta*(180/Math.PI))
                    let gammaFok = Math.floor(gamma*(180/Math.PI))
                    
                    console.log(Math.round(Math.cos(haromszog.alfa*(Math.PI/180)),2),(haromszog.a**2.0-haromszog.b**2.0-haromszog.c**2.0) / (-2.0*(haromszog.a*haromszog.b)))
                
                    valasz.innerHTML = "Nem lehet ilyen alfa szöggel háromszög!\nA háromszög helyes adatai a három oldalból számítva:\nAlfa: "+alfaFok+"°\nBéta: "+betaFok+"°\nGamma: "+gammaFok+"°";

            }
            console.log("3 oldal 2 szög béta gamma")
        
        }

        //Három oldal két szög alfa gamma
        //cos(alfa)= a²-b²-c²/(-2ab)
        else if(lehetHaromszog && !isNaN(haromszog.alfa) && !isNaN(haromszog.gamma))
            {
                if(Math.round(Math.cos(haromszog.alfa*(Math.PI/180)),2) == Math.round((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*(haromszog.a*haromszog.b)),2)&&
                Math.round(Math.cos(haromszog.gamma*(Math.PI/180)),2) == Math.round((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*(haromszog.a*haromszog.b)),2))
                {

                    let beta = Math.acos((haromszog.b**2-haromszog.a**2-haromszog.b**2) / (-2*haromszog.a*haromszog.c));

                    let betaFok = Math.floor(beta*(180/Math.PI))
                    
                    valasz.innerHTML = "Lehet háromszög! Béta: "+betaFok+"°";

                }
                else
                {
                    let gamma = Math.acos((haromszog.c**2-haromszog.a**2-haromszog.b**2) / (-2*haromszog.a*haromszog.b));
                    let beta = Math.acos((haromszog.b**2-haromszog.a**2-haromszog.c**2) / (-2*haromszog.a*haromszog.c));
                    let alfa = Math.acos((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*haromszog.b*haromszog.c));

                    let alfaFok = Math.floor(alfa*(180/Math.PI))
                    let betaFok = Math.floor(beta*(180/Math.PI))
                    let gammaFok = Math.floor(gamma*(180/Math.PI))
                    
                    console.log(Math.round(Math.cos(haromszog.alfa*(Math.PI/180)),2),(haromszog.a**2.0-haromszog.b**2.0-haromszog.c**2.0) / (-2.0*(haromszog.a*haromszog.b)))
                
                    valasz.innerHTML = "Nem lehet ilyen alfa szöggel háromszög!\nA háromszög helyes adatai a három oldalból számítva:\nAlfa: "+alfaFok+"°\nBéta: "+betaFok+"°\nGamma: "+gammaFok+"°";

            }
            console.log("3 oldal 2 szög alfa gamma")
        
        }


            
            //Három oldal egy szög
            //cos(alfa)= a²-b²-c²/(-2ab)
            else if(lehetHaromszog && !isNaN(haromszog.alfa))
            {
                if(Math.round(Math.cos(haromszog.alfa*(Math.PI/180)),2) == Math.round((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*(haromszog.a*haromszog.b)),2))
                {

                    let gamma = Math.acos((haromszog.c**2-haromszog.a**2-haromszog.b**2) / (-2*haromszog.a*haromszog.b));
                    let beta = Math.acos((haromszog.b**2-haromszog.a**2-haromszog.c**2) / (-2*haromszog.a*haromszog.c));

                    let betaFok = Math.floor(beta*(180/Math.PI))
                    let gammaFok = Math.floor(gamma*(180/Math.PI))
                    
                    valasz.innerHTML = "Lehet háromszög!\nBéta: "+betaFok+"°\nGamma: "+gammaFok+"°";

                }
                else
                {
                    let gamma = Math.acos((haromszog.c**2-haromszog.a**2-haromszog.b**2) / (-2*haromszog.a*haromszog.b));
                    let beta = Math.acos((haromszog.b**2-haromszog.a**2-haromszog.c**2) / (-2*haromszog.a*haromszog.c));
                    let alfa = Math.acos((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*haromszog.b*haromszog.c));

                    let alfaFok = Math.floor(alfa*(180/Math.PI))
                    let betaFok = Math.floor(beta*(180/Math.PI))
                    let gammaFok = Math.floor(gamma*(180/Math.PI))
                    
                    console.log(Math.round(Math.cos(haromszog.alfa*(Math.PI/180)),2),(haromszog.a**2.0-haromszog.b**2.0-haromszog.c**2.0) / (-2.0*(haromszog.a*haromszog.b)))
                
                    valasz.innerHTML = "Nem lehet ilyen alfa szöggel háromszög!\nA háromszög helyes adatai a három oldalból számítva:\nAlfa: "+alfaFok+"°\nBéta: "+betaFok+"°\nGamma: "+gammaFok+"°";

            }
            console.log("3 oldal 1 szög alfa")
        }
        else if(lehetHaromszog && !isNaN(haromszog.beta))
            {
                if(Math.round(Math.cos(haromszog.beta*(Math.PI/180)),2) == Math.round((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*(haromszog.a*haromszog.b)),2))
                {

                    let alfa = Math.acos((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*haromszog.a*haromszog.b));
                    let gamma = Math.acos((haromszog.c**2-haromszog.a**2-haromszog.b**2) / (-2*haromszog.a*haromszog.b));

                    let alfaFok = Math.floor(beta*(180/Math.PI))
                    let gammaFok = Math.floor(gamma*(180/Math.PI))
                    
                    valasz.innerHTML = "Lehet háromszög!\nAlfa: "+alfaFok+"°\nGamma: "+gammaFok+"°";

                }
                else
                {
                    let gamma = Math.acos((haromszog.c**2-haromszog.a**2-haromszog.b**2) / (-2*haromszog.a*haromszog.b));
                    let beta = Math.acos((haromszog.b**2-haromszog.a**2-haromszog.c**2) / (-2*haromszog.a*haromszog.c));
                    let alfa = Math.acos((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*haromszog.b*haromszog.c));

                    let alfaFok = Math.floor(alfa*(180/Math.PI))
                    let betaFok = Math.floor(beta*(180/Math.PI))
                    let gammaFok = Math.floor(gamma*(180/Math.PI))
                    
                    console.log(Math.round(Math.cos(haromszog.alfa*(Math.PI/180)),2),(haromszog.a**2.0-haromszog.b**2.0-haromszog.c**2.0) / (-2.0*(haromszog.a*haromszog.b)))
                
                    valasz.innerHTML = "Nem lehet ilyen alfa szöggel háromszög!\nA háromszög helyes adatai a három oldalból számítva:\nAlfa: "+alfaFok+"°\nBéta: "+betaFok+"°\nGamma: "+gammaFok+"°";

            }
            console.log("3 oldal 1 szög béta")
        }

        else if(lehetHaromszog && !isNaN(haromszog.gamma))
            {
                if(Math.round(Math.cos(haromszog.gamma*(Math.PI/180)),2) == Math.round((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*(haromszog.a*haromszog.b)),2))
                {

                    let alfa = Math.acos((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*haromszog.a*haromszog.b));
                    let beta = Math.acos((haromszog.b**2-haromszog.a**2-haromszog.c**2) / (-2*haromszog.a*haromszog.c));

                    let alfaFok = Math.floor(beta*(180/Math.PI))
                    let betaFok = Math.floor(beta*(180/Math.PI))
                    
                    valasz.innerHTML = "Lehet háromszög!\nAlfa: "+alfaFok+"°\nBéta: "+betaFok+"°";

                }
                else
                {
                    let gamma = Math.acos((haromszog.c**2-haromszog.a**2-haromszog.b**2) / (-2*haromszog.a*haromszog.b));
                    let beta = Math.acos((haromszog.b**2-haromszog.a**2-haromszog.c**2) / (-2*haromszog.a*haromszog.c));
                    let alfa = Math.acos((haromszog.a**2-haromszog.b**2-haromszog.c**2) / (-2*haromszog.b*haromszog.c));

                    let alfaFok = Math.floor(alfa*(180/Math.PI))
                    let betaFok = Math.floor(beta*(180/Math.PI))
                    let gammaFok = Math.floor(gamma*(180/Math.PI))
                    
                    console.log(Math.round(Math.cos(haromszog.alfa*(Math.PI/180)),2),(haromszog.a**2.0-haromszog.b**2.0-haromszog.c**2.0) / (-2.0*(haromszog.a*haromszog.b)))
                
                    valasz.innerHTML = "Nem lehet ilyen alfa szöggel háromszög!\nA háromszög helyes adatai a három oldalból számítva:\nAlfa: "+alfaFok+"°\nBéta: "+betaFok+"°\nGamma: "+gammaFok+"°";

            }
            console.log("3 oldal 1 szög gamma")
        }

        



        //Két oldal és közbezárt szög
        else if(!isNaN(haromszog.a) && !isNaN(haromszog.b) && !isNaN(haromszog.gamma))
        {

            /*//c2 = a2+b2 - 2ab * cos gamma

            let c = Math.sqrt(haromszog.a**2 + haromszog.b**2 - 2*haromszog.a*haromszog.b) * Math.cos(haromszog.gamma*(Math.PI/180))

            // a / sin alfa = c / sin gamma
            // a = c / sin gamma * sin alfa
            // a * sin gamma = c * sin alfa
            // a * sin gamma / c = sin alfa

            let alfa = Math.asin((haromszog.a*Math.sin(haromszog.gamma*(Math.PI/180))) / c)*(180/Math.PI);

            // b / sin beta = c / sin gamma
            // b = c / sin gamma * sin beta
            // b * sin gamma = c * sin beta
            // b * sin gamma / c = sin beta

            let beta = Math.asin((haromszog.b*Math.sin(haromszog.gamma*(Math.PI/180))) / c)*(180/Math.PI);

            valasz.innerHTML = "c oldal: "+c+"\nAlfa: "+alfa+"°\nBéta: "+beta+"°";*/
            const c = Math.sqrt(haromszog.a * haromszog.a + haromszog.b * haromszog.b - 2 * haromszog.a * haromszog.b * Math.cos(haromszog.gamma));

            // szögek
            const alpha = Math.asin((a * Math.sin(gamma)) / c);
            const beta = Math.PI - alpha - gamma;

        }

        else if(!isNaN(haromszog.b) && !isNaN(haromszog.c) && !isNaN(haromszog.alfa))
        {

            //c2 = a2+b2 - 2ab * cos gamma

            let a = Math.sqrt( haromszog.b**2 + haromszog.c**2 - 2*haromszog.b*haromszog.c * (Math.cos(haromszog.alfa*(Math.PI/180))))


            let gamma = Math.floor(Math.acos((haromszog.c*Math.sin(haromszog.alfa*(Math.PI/180))) / a)*(180/Math.PI));


            let beta = Math.floor(Math.acos((haromszog.b*Math.sin(haromszog.alfa*(Math.PI/180))) / a)*(180/Math.PI));

            valasz.innerHTML = "a oldal: "+a+"\nBéta: "+beta+"°\nGamma: "+gamma+"°";
        }

        else if(!isNaN(haromszog.a) && !isNaN(haromszog.c) && !isNaN(haromszog.beta))
        {

            //c2 = a2+b2 - 2ab * cos gamma

            let b = Math.sqrt(haromszog.a**2 + haromszog.c**2 - 2*haromszog.a*haromszog.b) * Math.cos(haromszog.beta*(Math.PI/180))


            let alfa = Math.acos((haromszog.c*Math.sin(haromszog.beta*(Math.PI/180))) / b)*(180/Math.PI);


            let beta = Math.floor(Math.acos((haromszog.b*Math.sin(haromszog.beta*(Math.PI/180))) / b)*(180/Math.PI));

            valasz.innerHTML = "b oldal: "+b+"\nAlfa: "+alfa+"°\nBéta: "+beta+"°";

            console.log("huhuu")
        }





            
        }