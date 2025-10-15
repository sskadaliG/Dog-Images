import Tab from './Tab';

const TabList = ({ list }) => {

    return (
        <div className="flex p-4 overflow-x-scroll gap-4">
            {list.map((dog) => <Tab key={dog.index} name={dog} />)}
        </div>
    );
};

export default TabList;