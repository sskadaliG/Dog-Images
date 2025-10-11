import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDogsList } from '../utils/dogSlice';

const useDogList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        listDogBreeds();

    }, []);

    const listDogBreeds = async () => {
        const data = await fetch("https://dog.ceo/api/breeds/list/all");
        const json = await data.json();
        const list = Object.keys(json?.message);
        dispatch(setDogsList(list));
    };
};

export default useDogList;