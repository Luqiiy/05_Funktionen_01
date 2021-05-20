
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

// ausgabeNameParams("Frank" ,"Musterann");
// ausgabeNameParams("Mustermann" , "Frank");
// ausgabeNameParams(prompt("Bitte gib deinen Vorname ein!"), prompt("Bitte gib hier deinen Nachnamen ein!"));

// 
 /***** Funktionen 03a*****/
//   03a. Vorbereitung
//    Postulat: one funktion = one job ( uncle bob)
//    SRP single resonsibility principle

function ausgabeNameParams2(firstName , familyName)
{
//  1. Job string composing
    let gap =" ";
    let outputStr = "Hallo " + firstName + gap + familyName + "!"
    
    //  2.Job : output
    console.log(outputStr);    
}

// ausgabeNameParams2("Frank" ,"Mustermann");

/********** Funktionen 03B */
/** 2. Job : Ausgabe */
// output("Hi");           // Unit-Test TDD
function output(outputStr) 
{
console.log(outputStr);
}






















