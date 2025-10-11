import { useDispatch } from 'react-redux';
import { addBreedName } from '../utils/dogSlice';

const Tab = ({ name }) => {
    const dispatch = useDispatch();

    const handleOnclick = () => {
        dispatch(addBreedName(name))
    };

    return (
        <div>
            <p className="w-max bg-gray-600 text-white items-center rounded-xl p-2 px-2 cursor-pointer hover:opacity-80" onClick={handleOnclick}>{name}</p>
        </div>
    );
};

export default Tab;