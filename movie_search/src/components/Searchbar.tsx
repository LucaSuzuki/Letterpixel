import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { useEffect, useState } from "react"
import { searchMovies } from "../api/movieService"
import type { Movie } from "../model/movie"
import { useNavigate } from "react-router-dom"

const Searchbar = () => {
    const [value, setValue] = useState<Movie | string | null>(null)
    const [inputValue, setInputValue] = useState("")
    const [options, setOptions] = useState<Movie[]>([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const trimmed = inputValue.trim()
        if (trimmed.length < 2) {
            setOptions([])
            return
        }

        const handle = setTimeout(async () => {
            setLoading(true)
            try {
                const data = await searchMovies(trimmed)
                const movies = (data?.results ?? []).filter(
                    (movie: Movie) => Boolean(movie && movie.id && movie.title)
                )
                const unique = new Map(movies.map((movie: Movie) => [movie.id, movie]))
                setOptions(Array.from(unique.values()))
            } finally {
                setLoading(false)
            }
        }, 300)

        return () => clearTimeout(handle)
    }, [inputValue])

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
            loading={loading}
            value={value}
            options={options}
            getOptionLabel={(option) => (typeof option === "string" ? option : option.title ?? "")}
            isOptionEqualToValue={(option, optionValue) =>
                typeof optionValue !== "string" && option.id === optionValue.id
            }
            onChange={(_, newValue) => {
                if (!newValue) {
                    setValue(null)
                    return
                }
                if (typeof newValue === "string") {
                    setValue(newValue)
                    return
                }
                setValue(newValue)
                navigate(`/movie/${newValue.id}`)
            }}
            onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
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
