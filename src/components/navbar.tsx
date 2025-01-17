import  logo from '../assets/Logo/logo.webp';
import ColorModeSwitch from "./ColorModeSwitch.tsx";


export function Navbar( ) {
    return (
        <div className="flex flex-row justify-between px-3 items-center">
            <img src={logo} alt="Logo" className="w-14 h-14"/>

            <div><ColorModeSwitch></ColorModeSwitch></div>

        </div>
    );
};