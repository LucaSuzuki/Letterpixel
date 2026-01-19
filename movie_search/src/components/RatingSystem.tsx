import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { postRating } from '../api/ratingService';
import type { Movie } from '../model/movie';

const RatingSystem = ({movie}: {movie: Movie}) => {
    function onRating(rate: number){
        postRating({movieId: movie.id, rating: rate})
    }
    return (
        <>
            <Stack spacing={1}>
                <Rating onChange={(event, value: number | null) => !!value && onRating(value)}
                    sx={{
                        "& .MuiRating-iconEmpty": {
                            color: "#ffffff",
                        }
                    }}
                    name="half-rating" defaultValue={movie.movie_rating || 0} precision={0.5} />
            </Stack>
        </>
    )
}

export default RatingSystem