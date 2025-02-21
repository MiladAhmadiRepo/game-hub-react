// @flow
import {ReactNode} from "react";

type Props = {
    children:ReactNode
};
export const GameCardContainer = ({children}: Props) => {
    return (
        <div className=" max-w-sm m-5 border border-gray-800 rounded-sm shadow-sm animate-pulsedark:border-gray-700">
            {children}
        </div>
    );
};