
import { objectInfo } from "./getLettersAvatarUser.js";
import {getMovie} from "../scripts/other/movieObj.js";
import {objectInfoAPI, getCastMovie} from "../../data/connection/consumeApiTMDB.js";

let imageURL_poster = `https://www.themoviedb.org/t/p/w220_and_h330_face`;
let imageURL_backgroud = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces`;
let imageURL_actor  = `https://www.themoviedb.org/t/p/w138_and_h175_face`;
let imageURL_noImage = `https://www.eatgreenearth.com/wp-content/themes/eatgreen/images/no-image.jpg`;
let movie;


loadInfo();

function loadInfo(){
    showInfoHeader();
    showInfoMovie();
}

function showInfoHeader () {

    document.getElementById('namePerson').innerHTML = objectInfo.personInfo.nameP;
    document.getElementById('userPerson').innerHTML = objectInfo.personInfo.userP;
    
    document.getElementById('lettersAvatar').innerHTML = objectInfo.getLettersName();
    
}

function showGenres (listGenres){

    let genres;
    let i=0;

    listGenres.forEach(genreId => {
        
        objectInfoAPI.dataGenres.forEach(gid =>{

            if(genreId == gid.id){
                if(i==0){
                    genres = gid.name;
                }
                else{
                    genres += ', ' + gid.name;
                }
                i++;
            }
        });
    });
    // console.log(genres);
    return genres;
}

async function showInfoMovie(){

    if(getMovie().movieObject != null){

        movie = getMovie().movieObject;

        document.getElementById('backgroud_img').src = `${imageURL_backgroud}${movie.backdrop_path}`;
        document.getElementById('poster_img').src = `${imageURL_poster}${movie.poster_path}`
        document.getElementById('title').innerHTML = `${movie.title} ( ${movie.original_title} )`;
        document.getElementById('vote').innerHTML = `${(movie.vote_average*10)}%`;
        document.getElementById('overview').innerHTML = movie.overview;
        document.getElementById('genres').innerHTML = showGenres(movie.genre_ids);

        const castMovie  = await getCastMovie(movie.id);
        showCast(castMovie);
    }
    console.log(movie);
}

function showCast(castMovie){
    console.log(castMovie.cast);

    let personMovie = '';
    let profile_path = '';

    castMovie.cast.forEach(person =>{
        if(person.profile_path != null){
            profile_path = `${imageURL_actor}${person.profile_path}`;
        }
        else{
            profile_path = imageURL_noImage;
        }
        personMovie+= `
        <div class="main__cast-container-actor">
            <div class="container-img">
                <img class="img" src="${profile_path}">
            </div>
            <h2 class="name">${person.name}</h2>
            <h4 class="character">${person.character}</h4>
        </div>
        `;
    });

    document.getElementById('carousel').innerHTML = personMovie;
}



