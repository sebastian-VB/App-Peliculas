
export let personInfo;

export function saveData(userP, nameP){

    const userPerson = {
        userP: userP,
        nameP: nameP
    }

    localStorage.setItem("person", JSON.stringify(userPerson));

}

export function getData(){

    if(localStorage.getItem("person")){
        personInfo = JSON.parse(localStorage.getItem("person"));
    }
    else{
        console.log('No se ha enceontado informacion');
    }
}

export function deleteData(){

    localStorage.removeItem("person");
}