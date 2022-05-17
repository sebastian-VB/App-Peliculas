
import { getData, personInfo } from "../../data/session/local-storage.js";

getData();

export function getLettersName(){

    let letters = '';
    let namePerson = personInfo.nameP;
    let indexSpace = 0;

    letters = namePerson.substring(0,1);

    for(let i=1; i<namePerson.length; i++){

        let caracterName = namePerson.substring(i, i+1);

        if( caracterName == ' '){
            indexSpace = i;
            break;
        }

    }

    letters += namePerson.substring(indexSpace+1, indexSpace+2); 

    return letters.toUpperCase();
}

export const person = personInfo;