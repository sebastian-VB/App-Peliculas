
import { objectInfo } from "./getLettersAvatarUser.js";
import {objectInfoAPI} from "../../data/connection/consumeApiTMDB.js";

let imageURL = `https://www.themoviedb.org/t/p/w220_and_h330_face/`;

function loadInfo(){
    showInfoHeader();
    showListMovie();
}

const showInfoHeader = ()=>{

    document.getElementById('namePerson').innerHTML = objectInfo.personInfo.nameP;
    document.getElementById('userPerson').innerHTML = objectInfo.personInfo.userP;
    
    document.getElementById('lettersAvatar').innerHTML = objectInfo.getLettersName();
    
}

const showListMovie = ()=>{

    let movies = '';

    objectInfoAPI.dataListMovie.forEach(movie =>{
        movies += `
        <div class="main__container-card">
            <figure class="main__container-card-picture">
                <img class="img" src="${imageURL}${movie.poster_path}">
            </figure>
            <div class="main__container-card-letters">
                <h2 class="title">${movie.original_title}</h2>
                <h4 class="date">${movie.release_date}</h4>
            </div>
        </div>
        `;
    });

    document.getElementById('container-movies').innerHTML = movies;
}

console.log(objectInfoAPI.dataListMovie);

loadInfo();