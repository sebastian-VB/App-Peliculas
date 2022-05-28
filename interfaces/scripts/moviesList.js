
import { objectInfo } from "./getLettersAvatarUser.js";
import {objectInfoAPI, getListMovies} from "../../data/connection/consumeApiTMDB.js";
import {getGenre} from "./other/genre.js";

let imageURL = `https://www.themoviedb.org/t/p/w220_and_h330_face/`;
let arrayMovieGenre = [];
let pages = 1;
let dataLM;

let sizeTotalArray, sizePage = 20, newSizeArray, index = 0, maxIndex = 0;
let btn = '';
let arrayMovieAux = [];

await loadInfo();

async function loadInfo(){
    showInfoHeader();

    if(getGenre().id == 1){
        document.getElementById('genreTitle').innerHTML = `Género: ${getGenre().name}`;
        showListMovie(objectInfoAPI.dataListMovie);
    }
    else if(getGenre().id != 1){
        document.getElementById('genreTitle').innerHTML = `Género: ${getGenre().name}`;
        await listMovieGenre();
    }
}

function showInfoHeader () {

    document.getElementById('namePerson').innerHTML = objectInfo.personInfo.nameP;
    document.getElementById('userPerson').innerHTML = objectInfo.personInfo.userP;
    
    document.getElementById('lettersAvatar').innerHTML = objectInfo.getLettersName();
    
}

document.getElementById('btn-s').addEventListener('click', async ()=>{
    if(getGenre().id == 1){
        if(pages < 500){
            pages++;
            dataLM = await getListMovies(pages);
            if(dataLM != null){
                showListMovie(dataLM.results);
            }
        }
    }
    else if(getGenre().id != 1){
        if(btn == 'btnP'){
            index += 20;
        }
        showNextMovies();
    }
});

document.getElementById('btn-a').addEventListener('click', async()=>{
    if(getGenre().id == 1){
        if(pages > 1){
            pages--;
            dataLM = await getListMovies(pages);
            if(dataLM != null){
                showListMovie(dataLM.results); 
            }
        }
    }
    else if(getGenre().id != 1){
        if(btn == 'btnN'){
            index -= 20;
        }
        showPreviousMovies();
    }
});

async function listMovieGenre(){
    console.log(getGenre());
    let page = 1;
    let data;
    while(page <= 500){
        data = await getListMovies(page);
        data.results.forEach(movie =>{
            movie.genre_ids.forEach(id =>{
                if(id == getGenre().id){
                    arrayMovieGenre.push(movie);
                }
            })
        });
        page++;
    }

    console.log(arrayMovieGenre);
    sizeTotalArray = arrayMovieGenre.length;
    newSizeArray = sizeTotalArray;
    showNextMovies();
}

function showNextMovies(){
    
    newSizeArray -= sizePage;
    if(newSizeArray > 0){
        if(sizePage > newSizeArray){
            sizePage = newSizeArray;
        }
        arrayMovieAux = [];
        for(let i = 0; i<sizePage; i++){
            arrayMovieAux.push(arrayMovieGenre[index]);
            index++;
        }
        showListMovie(arrayMovieAux);
    }
    btn = 'btnN';
    // console.log(`INDX: ${index}`);
}

function showPreviousMovies(){

    maxIndex = index;
    if(maxIndex >= 20){
        index -= 20;
        if(index >= 0){
            arrayMovieAux = [];
            for(let i = index; i<maxIndex; i++){
                arrayMovieAux.push(arrayMovieGenre[i]);
            }
            showListMovie(arrayMovieAux);
        }
    }
    btn = 'btnP';
    // console.log(`MINDX: ${maxIndex}, INDX: ${index}`);
}

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


