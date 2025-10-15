import { useDispatch, useSelector } from 'react-redux';
import { addBreedName, addSubBreeds } from '../utils/dogSlice';
import { useState } from 'react';

const Tab = ({ name }) => {
    const dogBreedList = useSelector((store) => store.dog.breedList);
    const activeBreed = useSelector((store) => store.dog.breedName);
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState("");

    const handleOnclick = () => {
        dispatch(addBreedName(name));
        const subBreed = dogBreedList.filter((object) => (object.breed === name || object.subBreed.includes(name)) && object.subBreed.length > 0);
        subBreed.length > 0 ? dispatch(addSubBreeds({ breed: subBreed[0].breed, subBreed: subBreed[0].subBreed })) : dispatch(addSubBreeds({ breed: "", subBreed: [] }));
        setActiveTab(name);
    };

    return (
        <div>
            <p className={`w-max text-white items-center  bg-gray-600 rounded-xl p-2 px-2 cursor-pointer hover:opacity-80 ${activeTab !== "" && activeTab === activeBreed ? "bg-red-500" : " bg-gray-600"}`} onClick={handleOnclick}>{name}</p>
        </div>
    );
};

export default Tab;