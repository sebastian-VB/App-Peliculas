
import { objectInfo } from "./getLettersAvatarUser.js";
import {objectInfoAPI, getListMovies} from "../../data/connection/consumeApiTMDB.js";

let imageURL = `https://www.themoviedb.org/t/p/w220_and_h330_face/`;
// let arrayPrube = [];
let pages = 1;
let dataLM;

loadInfo();

function loadInfo(){
    showInfoHeader();
    showListMovie(objectInfoAPI.dataListMovie);
}

function showInfoHeader () {

    document.getElementById('namePerson').innerHTML = objectInfo.personInfo.nameP;
    document.getElementById('userPerson').innerHTML = objectInfo.personInfo.userP;
    
    document.getElementById('lettersAvatar').innerHTML = objectInfo.getLettersName();
    
}

document.getElementById('btn-s').addEventListener('click', async ()=>{
    if(pages < 1000){
        pages++;
        dataLM = await getListMovies(pages);
        if(dataLM != null){
            showListMovie(dataLM.results);
        }
    }
});

document.getElementById('btn-a').addEventListener('click', async()=>{
    if(pages > 1){
        pages--;
        dataLM = await getListMovies(pages);
        if(dataLM != null){
            showListMovie(dataLM.results); 
        }
    }
    
});

function showListMovie (movieList){

    let movies = '';
    movieList.forEach(movie =>{
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



// objectInfoAPI.dataListMovie.forEach(movie =>{
    
//     movie.genre_ids.forEach(id =>{
//         if(id == 28){
//             arrayPrube.push(movie);
//         }
//     })
// });

// console.log(objectInfoAPI.dataListMovie);
// console.log(arrayPrube);