import Tab from './Tab';
import { useSelector } from 'react-redux';
import useDogList from '../hooks/useDogList';

const TabList = () => {
    const list = useSelector((store) => store.dog.dogList);

    useDogList();

    return (
        <div className="flex p-4 overflow-x-scroll gap-4">
            {list.map((dog) => <Tab key={dog.index} name={dog} />)}
        </div>
    );
};

export default TabList;