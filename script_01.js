
/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken


// Funktionsrumpf (body)
function test()
{
    console.log("Moin Hans");
}

// Funktionsaufruf ( call )

//test();


/***** Funktionen 02a *****/
// 2a. Parametrisierung! + Datenübergabe von INNEN

function ausgabeName() 
{
    let firstName = "Deniz";            //--> Variable --> lokal scope
    console.log(" Hallo " + firstName + "!");
}

    //ausgabeName();
    //console.log(firstName);     // Fehler -->Lokal!!!


    /***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUßEN

function ausgabeNameParam(firstName) //Parameter
{
    //wenn firstName leer , dann "nobody"
    if (firstName == undefined || firstName == "") 
    {
        firstName = "nobody"

    }

       console.log(" Hallo " + firstName + "!");
}

// // ausgabeNameParam("Deniz");          // Call + Argument(e)
// ausgabeNameParam("Frank");
// ausgabeNameParam();
// ausgabeNameParam(prompt("gib hier deinen Namen ein!"));

/***** Funktionen 02c ******/

function ausgabeNameParams(firstName , familyName)
{
    // wenn firstName leer, dann "nobody"
    
    console.log("Hallo " + firstName + " " + familyName + "!");    
}

ausgabeNameParams("Frank" ,"Musterann");

ausgabeNameParams(prompt("Bitte gib deinen Vorname ein!"), prompt("Bitte gib hier deinen Nachnamen ein!"));

     
 

























