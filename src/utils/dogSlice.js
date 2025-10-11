const { createSlice } = require("@reduxjs/toolkit");

const dogSlice = createSlice({
    name: "dog",
    initialState: {
        dogList: [],
        dogPoster: "",
        breedName: "australian"
    },
    reducers: {
        setDogsList: (state, action) => {
            state.dogList = action.payload;
        },
        addDogPoster: (state, action) => {
            state.dogList = action.payload;
        },
        addBreedName: (state, action) => {
            state.breedName = action.payload;
        }
    }
});

export default dogSlice.reducer;
export const { setDogsList, addDogPoster, addBreedName } = dogSlice.actions;