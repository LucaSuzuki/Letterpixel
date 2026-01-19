import { AUTHORIZATION, MOVIE_DB_BASE_URL } from "./api";

export async function getMovies(page: number) {

    const url = MOVIE_DB_BASE_URL + "/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=" + page + "&sort_by=popularity.desc"
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: AUTHORIZATION
        }
    };

    return fetch(url, options)
        .then(result => result.json())
        .catch(error => console.error(error));
}

export async function getRatedMovies(ids: number[]) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: AUTHORIZATION
        }
    }


    const promises = ids.map(id => {
        const url = MOVIE_DB_BASE_URL + "/movie/" + id
        return fetch(url, options).then(res => res.json())
    })

 
    const movies = await Promise.all(promises)

    return movies
}


export async function getCast(id: number) {
    const cast = MOVIE_DB_BASE_URL + "/movie/" + id + "/credits?language=pt-BR"
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: AUTHORIZATION
        }
    };

    const data = await fetch(cast, options)
        .then(result => result.json())
        .catch(error => console.error(error));

    const actors = data.cast.slice(0, 7)

    return actors
}

export async function getMovieById(id: number) {
    const url = MOVIE_DB_BASE_URL + "/movie/" + id + "?language=pt-BR"
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: AUTHORIZATION,
        },
    }

    return fetch(url, options)
        .then((result) => result.json())
        .catch((error) => console.error(error))
}

export async function searchMovies(query: string, page = 1) {
    const url =
        MOVIE_DB_BASE_URL +
        "/search/movie?include_adult=false&language=pt-BR&page=" +
        page +
        "&query=" +
        encodeURIComponent(query)
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: AUTHORIZATION,
        },
    }

    return fetch(url, options)
        .then((result) => result.json())
        .catch((error) => console.error(error))
}
