
const getMoviesByName = async (title) => {
    const result = await fetch("https://www.omdbapi.com/?t=tt3896198&apikey=1bb201e4");
    const {Search} = await result.json();
    console.log(movies);
    return Search;
}


const getMoviesById = async () => {
    const result = await fetch('');
    const json = await result.json();
    console.log(json);
}


// below is called export by name
export { getMoviesByName, getMoviesById};