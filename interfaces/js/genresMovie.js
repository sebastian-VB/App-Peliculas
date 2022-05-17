
import { getLettersName, person } from "./getLettersAvatarUser.js";

loadInfo();

function loadInfo (){
    getInfoHeader();
}

function getInfoHeader(){

    document.getElementById('namePerson').innerHTML = person.nameP;
    document.getElementById('userPerson').innerHTML = person.userP;

    document.getElementById('lettersAvatar').innerHTML = getLettersName();
}
