import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addDogPoster } from '../utils/dogSlice';

const useDogPoster = ({ breed }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        getDogPoster();
    }, [breed]);

    const getDogPoster = async () => {
        const data = await fetch("https://dog.ceo/api/breed/" + breed + "/images/random");
        const json = await data.json();
        dispatch((addDogPoster(json?.message)));
    };
};

export default useDogPoster;