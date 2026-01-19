import { RATING_DB_BASE_URL } from "./api";

export async function getRatings() {

    const url = RATING_DB_BASE_URL + "/ratings"
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };

    return fetch(url, options)
        .then(result => result.json())
        .catch(error => console.error(error));
}

export async function postRating({movieId, rating}:{movieId: number, rating: number}) {
    const url = RATING_DB_BASE_URL + "/rating"
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
        },


        body: JSON.stringify({
            movie_id: movieId,
            rating: rating,
        }),
    }

    return fetch(url, options)
        .then(result => result.json())
        .catch(error => console.error(error));
}