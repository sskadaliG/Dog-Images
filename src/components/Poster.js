import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

const Poster = () => {
    const breed = useSelector((store) => store.dog.breedName);
    const [imgUrl, setImgUrl] = useState("");

    useEffect(() => {
        breed && breed !== "" &&
            getDogPoster();
    }, [breed]);

    const getDogPoster = async () => {
        const data = await fetch("https://dog.ceo/api/breed/" + breed + "/images/random");
        const json = await data.json();
        console.log(json.message)
        setImgUrl(json?.message);
    }

    return (
        <div className="p-4 h-96 w-96 mx-auto my-16 items-center flex">
            {imgUrl && imgUrl !== "" ? <img className="rounded-lg w-full h-full" src={imgUrl} alt="dog-breed-image"></img> :
                <p className="rounded-lg w-full h-full bg-gray-200"></p>}
        </div>
    )
}

export default Poster;