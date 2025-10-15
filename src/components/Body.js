import TabList from './TabList';
import Poster from './Poster';
import useDogList from '../hooks/useDogList';
import { useSelector } from 'react-redux';

const Body = () => {
    useDogList();
    const list = useSelector((store) => store.dog.dogList);
    const subList = useSelector((store) => store.dog.subBreeds);
    const activeBreed = useSelector((store) => store.dog.breedName);

    return (
        <div>
            <TabList list={list} />
            {subList.breed !== "" &&
                subList.subBreed.length > 0 &&
                (subList.subBreed.includes(activeBreed) || subList.breed === activeBreed) &&
                <div>
                    <h4 className="pl-4 font-semibold">Sub-breed</h4>
                    <TabList list={subList.subBreed} />
                </div>}
            <Poster />
        </div>
    )
}

export default Body;