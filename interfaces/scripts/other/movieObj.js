
export function saveMovie(movie){

    const movieObj = {
        movieObject : movie
    };

    localStorage.setItem("movieOb", JSON.stringify(movieObj));
}

export function getMovie(){

    if(localStorage.getItem("movieOb")){
        return JSON.parse(localStorage.getItem("movieOb"));
    }
}