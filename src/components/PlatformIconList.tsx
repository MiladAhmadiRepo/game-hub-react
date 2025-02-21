import {Platform} from "../hook/UseGames.ts";
import {FaApple, FaWindows, FaAndroid, FaLinux, FaPlaystation, FaXbox} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";


type Props = {
    platforms: Platform[];
};

export function PlatformIconList({platforms}: Props) {
    const styleIcon  = { color: "gray"}

    const iconMap: { [key: string]: object } = {
        "playstation": <FaPlaystation  style={styleIcon} size={20} key={"playstation"}/>,
        "xbox": <FaXbox style={styleIcon} size={20} key={"xbox"}/>,
        "pc": <FaWindows style={styleIcon} size={20} key={"pc"}/>,
        "ios": <MdPhoneIphone style={styleIcon} size={20} key={"ios"}/>,
        "android": <FaAndroid style={styleIcon} size={20} key={"android"}/>,
        "linux": <FaLinux style={styleIcon} size={20} key={"linux"}/>,
        "nintendo": <SiNintendo style={styleIcon} size={20} key={"nintendo"}/>,
        "web": <BsGlobe style={styleIcon} size={20} key={"web"}/>,
        "macOS": <FaApple style={styleIcon} size={20} key={"macOS"}/>
    };
    return (
        <div className="flex flex-row space-x-2   ">
            {
                platforms.map((platform) => {
                    return iconMap[platform.slug] as any
                })
            }
        </div>
    )
};