
const partURL = 'https://api.themoviedb.org/3/';

let data;
let dataListM;
let dataCastMovie = [];

const loadingGenresMovies = async ()=>{

    try{
        const answer = await fetch(`${partURL}genre/movie/list?api_key=3d06cb63991df2c2b2e0c31ec5c593bc&language=es-Es`);
        
        if(answer.status == 200){
            data = await answer.json();
        }
        else if(answer.status == 401){
            console.log('error en la peticion');
        }   
        else if(answer.status == 404){
            console.log('generos no existen');
        }   
    }
    catch(error){
        console.log(error);
    }

}

await loadingGenresMovies();

export async function getListMovies (page){

    try{
        const answer = await fetch(`${partURL}movie/popular?api_key=3d06cb63991df2c2b2e0c31ec5c593bc&language=es-ES&page=${page}`);
        
        if(answer.status == 200){
            return dataListM = await answer.json();
        }
        else if(answer.status == 401){
            console.log('error en la peticion');
            return null;
        }
        else if(answer.status == 404){
            console.log('pelicula no existe');
            return null;
        }
        else{
            return null;
        }

    }
    catch(error){
        console.log(error);
    }

}

await getListMovies(1);

export async function getCastMovie(movieID){

    try{

        const answer = await fetch(`${partURL}movie/${movieID}/credits?api_key=3d06cb63991df2c2b2e0c31ec5c593bc&language=en-US`);

        if(answer.status == 200){
            return dataCastMovie = await answer.json();
        }
        else if(answer.status == 401){
            console.log('error en la peticion');
            return null;
        }   
        else if(answer.status == 404){
            console.log('actores no existen');
            return null;
        } 
    }
    catch(error){
        console.log(error);
    }
}

// await getCastMovie(634649);

export const objectInfoAPI = {
    dataGenres: data.genres,
    dataListMovie: dataListM.results,
}
