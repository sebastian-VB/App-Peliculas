
import { objectInfo } from "./getLettersAvatarUser.js";
import {objectInfoAPI} from "../../data/connection/consumeApiTMDB.js";
import {colorsCard} from "./other/colors.js";
import { saveGenre } from "./other/genre.js";

const arrayGneresMovies = [];
const allM = { id: 1, name: "Todos" };

window.selectGenre = selectGenre;

let index = 0;

function loadInfo (){
    showInfoHeader();
    showGenresMovies();
}

const showInfoHeader = ()=>{

    document.getElementById('namePerson').innerHTML = objectInfo.personInfo.nameP;
    document.getElementById('userPerson').innerHTML = objectInfo.personInfo.userP;
    
    document.getElementById('lettersAvatar').innerHTML = objectInfo.getLettersName();
    
}


function selectGenre (idGM){
    
    arrayGneresMovies.forEach(genre =>{
        if(genre.id == idGM){
            console.log(`${idGM}: ${genre.name}`);
            saveGenre(genre.id, genre.name);
            location.assign('../public/moviesList.html');
        }
    });
}

const showGenresMovies = ()=>{

    let genres = `
        <div class="main__card" style="background-color: ${colorsCard[0]};">
            <div class="main__card-genre">
                Todos
            </div>
            <div class="main__card-layer" id="btnAll" onclick="selectGenre(${1})">
                <img src="../img/bxs-movie.svg">
                <p>Ver ahora</p>
            </div>
        </div>
    `;

    arrayGneresMovies[0] = allM;

    objectInfoAPI.dataGenres.forEach(genre => {
        index++;
        genres += `
        <div class="main__card" style="background-color: ${colorsCard[index]};">
            <div class="main__card-genre">
                ${genre.name}
            </div>
            <div class="main__card-layer" id="btnGenres" onclick="selectGenre(${genre.id})">
                <img src="../img/bxs-movie.svg">
                <p>Ver ahora</p>
            </div>
        </div>
        `;
        arrayGneresMovies.push(genre);
    });

    document.getElementById('genresM').innerHTML = genres; 
    

}

loadInfo();