import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBreedList, setDogsList } from '../utils/dogSlice';

const useDogList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        listDogBreeds();

    }, []);

    const listDogBreeds = async () => {
        const data = await fetch("https://dog.ceo/api/breeds/list/all");
        const json = await data.json();
        const breedList = [];
        for (const [breed, subBreed] of Object.entries(json?.message)) {
            breedList.push({ breed, subBreed });
        };
        dispatch(addBreedList(breedList));

        const list = Object.keys(json?.message);
        dispatch(setDogsList(list));
    }

};

export default useDogList;