const { createSlice } = require("@reduxjs/toolkit");

const dogSlice = createSlice({
    name: "dog",
    initialState: {
        dogList: [],
        breedList: [],
        subBreeds: { breed: "", subBreed: [] },
        breedName: "australian"
    },
    reducers: {
        setDogsList: (state, action) => {
            state.dogList = action.payload;
        },
        addBreedList: (state, action) => {
            state.breedList = action.payload;
        },
        addSubBreeds: (state, action) => {
            state.subBreeds = action.payload;
        },
        addBreedName: (state, action) => {
            state.breedName = action.payload;
        }
    }
});

export default dogSlice.reducer;
export const { setDogsList, addBreedList, addBreedName, addSubBreeds } = dogSlice.actions;