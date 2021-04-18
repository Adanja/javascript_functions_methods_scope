// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


function getEmailDomain (email) {
    return email.substring(email.indexOf("@" )+ 1, email.length);
}

console.log(getEmailDomain("adanja-s@novi-education.nl"), getEmailDomain("blabla@chatman.nl"));
console.log(getEmailDomain("jethrosegers@msn.com"));


function getEmail2 (email2) {
    return email2.lastIndexOf( "@");
}

console.log(getEmail2("Adanja-s@hotmail.com"));
/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
function typeOfEmail (mail) {

    if (mail.includes("novi-education")) {
        console.log("Student");
    }
    if (mail.includes("outlook.com")) {
        console.log( "Extern");
    }
    if (mail.includes("novi.nl")) {
        console.log("Medewerker");
    }
    else {
        console.log("Dit adres kennen we niet?!?!?!");
    }
}

typeOfEmail("adanja@novi.nl");

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity (mail) {
    if (mail.includes(",") || (mail.charAt(mail.length -1) === ".") || (mail.charAt(mail.indexOf("@") + 1) === ".")) {
        // console.log("False! Er zit een , of . op het eind.");
        return false;
    }

    if (mail.includes("@")) {
        return true;
    } else {
        console.log("Je email moet een @ bevatten");
    }
    return false;
}

console.log(checkEmailValidity("adanja-s@hotmail.com"));
console.log(checkEmailValidity("peter@h.com"));


// Dit zou ook moeten werken, maar minder compleet
// function  checkEmailValidity (email) {
//     if (email.includes(',')) {
//         return false;
//     }
//
//     if (email.includes('@') && (email.endsWith(".nl")) || (email.endsWith(".com"))) {
//     return true;
//     }
//     return false;
// }
//
// console.log(checkEmailValidity("neekennvi@.nl"));



