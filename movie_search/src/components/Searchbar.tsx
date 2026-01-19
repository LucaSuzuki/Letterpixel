import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { useState } from "react"

const movies = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Dark Knight", year: 2008 },
    { title: "Pulp Fiction", year: 1994 },
]

const Searchbar = () => {
    const [value, setValue] = useState<string | null>(null)

    return (
        <Autocomplete
            sx={{ width: 400 }}
            slotProps={{
                listbox: {
                    sx: {
                        display: "block",
                        "& li": {
                            display: "block",
                            width: "100%",
                        },
                    },
                },
            }}
            freeSolo
            value={value}
            options={movies.map((option) => option.title)}
            onChange={(_, newValue) => setValue(newValue)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    sx={{
                        input: { color: "aliceblue" },
                        label: { color: "gray" },
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "green",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#88E788",
                            },
                        },
                    }}
                    label="Pesquise um filme"
                    variant="outlined"
                />
            )}
        />
    )
}

export default Searchbar