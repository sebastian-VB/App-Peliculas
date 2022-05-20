
import { objectInfo } from "./getLettersAvatarUser.js";
import {objectInfoAPI} from "../../data/connection/consumeApiTMDB.js";
import {colorsCard, colorLetter} from "./other/colors.js";

window.selectGenre = selectGenre;

let index = 0;

function loadInfo (){
    showInfoHeader();
    showGenresMovies();

    selectGenre();
    
}

const showInfoHeader = ()=>{

    document.getElementById('namePerson').innerHTML = objectInfo.personInfo.nameP;
    document.getElementById('userPerson').innerHTML = objectInfo.personInfo.userP;
    
    document.getElementById('lettersAvatar').innerHTML = objectInfo.getLettersName();
    
}

function selectGenre (idGM){
    console.log(idGM);
}

const showGenresMovies = ()=>{

    let genres = `
        <div class="main__card" style="background-color: ${colorsCard[0]};">
            <div class="main__card-genre" style="color: ${colorLetter}">
                Todos
            </div>
            <div class="main__card-layer" id="btnAll" onclick="selectGenre(${1})">
                <img src="../img/bxs-movie.svg">
                <p>Ver ahora</p>
            </div>
        </div>
    `;

    objectInfoAPI.dataGenres.forEach(genre => {
        index++;
        genres += `
        <div class="main__card" style="background-color: ${colorsCard[index]};">
            <div class="main__card-genre" style="color: ${colorLetter}">
                ${genre.name}
            </div>
            <div class="main__card-layer" id="btnGenres" onclick="selectGenre(${genre.id})">
                <img src="../img/bxs-movie.svg">
                <p>Ver ahora</p>
            </div>
        </div>
    `;
    });

    document.getElementById('genresM').innerHTML = genres;   
    
}

loadInfo();