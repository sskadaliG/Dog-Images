import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDogsList } from '../utils/dogSlice';

const Search = () => {
    const list = useSelector((store) => store.dog.dogList);

    const [searchText, setSearchText] = useState("");

    const dispatch = useDispatch();

    const handleSearch = () => {
        const filtered = list.filter((dog) => dog.includes(searchText));
        dispatch(setDogsList(filtered));
        setSearchText("");
    }

    return (
        <div className="flex gap-2 h-10">
            <input className="w-96 border border-gray-300 rounded-3xl p-4" placeholder="Enter the dog breed" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
            <button className="w-24 bg-red-500 rounded-3xl p-2 cursor-pointer hover:opacity-80" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search;