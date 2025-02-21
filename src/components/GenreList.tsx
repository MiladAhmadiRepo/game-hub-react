// @flow
import useGenre from "../hook/UseGenre.ts";
import getCroppedImageUrl from "../services/image-url.ts";

export const GenreList = () => {
    const {data}=useGenre();
    return (
        <ul className="" >
            {data.map(item=> <li key={item.id}>
                <div className="flex flex-row  ml-3 mt-3 justify-items-center mb-1">
                    <img className="rounded-sm  w-[30px] h-[30px] " src={getCroppedImageUrl(item.image_background)} alt=""/>
                    <h6 className="ml-2 mr-2"   >{item.name}</h6>

                </div>
            </li>)}
        </ul>
    );
};