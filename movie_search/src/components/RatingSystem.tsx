import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const RatingSystem = () => {
    return (
        <>
            <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={5} precision={0.5} />
            </Stack>
        </>
    )
}

export default RatingSystem