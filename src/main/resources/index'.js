let billetter = [];
document.getElementById("billettSkjema").addEventListener("submit", function(event) {
    event.preventDefault();

    let antall = document.getElementById("antall").value.trim();
    let fornavn = document.getElementById("fornavn").value.trim();
    let etternavn = document.getElementById("etternavn").value.trim();
    let telefon = document.getElementById("telefon").value.trim();
    let email = document.getElementById("email").value.trim();

    if (!antall || !fornavn || !etternavn || !telefon || !email) {
        alert("Alle felt må fylles ut")
        return;
    }

    if (!validatePhoneNumber(telefon) || !validateEmail(email)) {
        alert("Ugyldig telefonnummer eller epostadresse")
        return;
    }

    billetter.push({antall, fornavn, etternavn, telefon, email});
    visAlleBilletter();
    resetInputFields();
});
function slettAlleBilletter(){
    billetter = [];
    visAlleBilletter();
}

function visAlleBilletter(){
    let output = " ";
    billetter.forEach(billett=> {
        output += `<p>Antall: ${billett.antall}, Navn: ${billett.fornavn} ${billett.etternavn}, 
           Telefon: ${Billett.telefon}, E-post: ${billett.email}</p`;});
    document.getElementById("alleBilletter").innerHTML = output;
}

function resetInputFields() {
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("email").value = "";
}

function validatePhoneNumber(phoneNumber){
    let phoneRegex = /^[0-9]{8}$/;
    return phoneRegex.test(phoneNumber);
}

function validateEmail(email){
    let emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
