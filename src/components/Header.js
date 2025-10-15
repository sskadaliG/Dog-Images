import Search from './Search';
import Body from './Body';
import { DOG_IMG } from '../utils/constants'

const Header = () => {
    return (
        <div>
            <div className="flex justify-between items-center p-4 border-b-2 border-gray-200">
                <h1 className="text-red-600 font-extrabold">Dog Breeds</h1>
                <Search />
                <img className="w-20 rounded-full" src={DOG_IMG} alt="dog-image"></img>
            </div>
            <div className="p-4">
                <Body />
            </div>
        </div>
    )
}

export default Header