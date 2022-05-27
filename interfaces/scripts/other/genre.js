
export function saveGenre(idG, genreM){

    const genreMovie = {
        id: idG,
        name: genreM
    }

    localStorage.setItem("genre", JSON.stringify(genreMovie));
}

export function getGenre(){

    if(localStorage.getItem("genre")){
        return JSON.parse(localStorage.getItem("genre"));
    }
}