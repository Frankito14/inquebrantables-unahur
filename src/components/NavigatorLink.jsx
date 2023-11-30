import { NavLink } from "react-router-dom";

export default function NavigatorLink(props){
    return(
        <div className="w-screen flex flex-nowrap justify-center text-center p-2 hover:bg-gray-800">
            <NavLink className="w-44" to={props.route}>{props.name}</NavLink>
            <img className="ml-2 w-4 inline" src={props.logo}></img>
        </div>
    )
}