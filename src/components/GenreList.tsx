// @flow
import useGenre from "../hook/UseGenre.ts";

export const GenreList = () => {
    const {data}=useGenre();
    return (
        <ul>
            {data.map(item=> <li key={item.id}>{item.name} </li>)}
        </ul>
    );
};