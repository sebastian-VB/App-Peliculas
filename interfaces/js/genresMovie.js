
import { objectInfo } from "./getLettersAvatarUser.js";
import {objectInfoAPI} from "../../data/api/consumeApiTMDB.js";

window.selectGenre = selectGenre;

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
        <div class="main__card">
            <div class="main__card-genre">
                Todos
            </div>
            <div class="main__card-layer" id="btnAll" onclick="selectGenre(${1})">
                <img src="../img/bxs-movie.svg">
                <p>Ver ahora</p>
            </div>
        </div>
    `;

    objectInfoAPI.dataGenres.forEach(genre => {
        genres += `
        <div class="main__card">
            <div class="main__card-genre">
                ${genre.name}
            </div>
            <div class="main__card-layer" id="btnGenres" onclick="selectGenre(${genre.id})" >
                <img src="../img/bxs-movie.svg">
                <p>Ver ahora</p>
            </div>
        </div>
    `;
    });

    document.getElementById('genresM').innerHTML = genres;   
    
}

loadInfo();