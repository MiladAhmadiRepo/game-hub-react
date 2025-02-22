// @flow
import useGenre from "../hook/UseGenre.ts";
import getCroppedImageUrl from "../services/image-url.ts";
import CustomSpinner from "./CustomSpinner.tsx";

export const GenreList = () => {
    const {data,isLoading,error}=useGenre();
    if(error) return null
    if(isLoading) return <CustomSpinner></CustomSpinner>
    return (
        <ul className="" >
            {data.map(item=> <li key={item.id}>
                <div className="flex flex-row  mt-3 mb-1 justify-items-center ">
                    <img className="rounded-sm  w-[30px] h-[30px] " src={getCroppedImageUrl(item.image_background)} alt=""/>
                    <h6 className="ml-2 mr-2"   >{item.name}</h6>

                </div>
            </li>)}
        </ul>
    );
};