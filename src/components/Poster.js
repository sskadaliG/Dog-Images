import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

const Poster = () => {
    const breedName = useSelector((store) => store.dog.breedName);
    const [imgUrl, setImgUrl] = useState("");
    const subList = useSelector((store) => store.dog.subBreeds);
    const [posterPath, setPosterPath] = useState("");

    useEffect(() => {
        if (!breedName) return;

        if (
            subList.breed !== "" &&
            subList.subBreed.length > 0 &&
            subList.subBreed.includes(breedName)
        ) {
            setPosterPath(`https://dog.ceo/api/breed/${subList.breed}/${breedName}/images/random`);
        } else {
            setPosterPath(`https://dog.ceo/api/breed/${breedName}/images/random`);
        }
    }, [breedName, subList]);


    useEffect(() => {

        breedName && breedName !== "" &&
            getDogPoster();

    }, [posterPath]);

    const getDogPoster = async () => {

        const data = await fetch(posterPath);
        const json = await data.json();
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