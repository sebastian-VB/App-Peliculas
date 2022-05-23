
const partURL = 'https://api.themoviedb.org/3/';

let data;
let dataListM;

const loadingGenresMovies = async ()=>{

    try{
        const answer = await fetch(`${partURL}genre/movie/list?api_key=3d06cb63991df2c2b2e0c31ec5c593bc&language=es-Es`);
        
        if(answer.status == 200){
            data = await answer.json();
        }   
    }
    catch(error){

    }

}

await loadingGenresMovies();

const getListMovies = async() =>{

    try{
        const answer = await fetch(`${partURL}movie/popular?api_key=3d06cb63991df2c2b2e0c31ec5c593bc&language=es-ES&page=1`);
        
        if(answer.status == 200){
            dataListM = await answer.json();
        }

    }
    catch(error){

    }
}

await getListMovies();

export const objectInfoAPI = {
    dataGenres: data.genres,
    dataListMovie: dataListM.results,
}
