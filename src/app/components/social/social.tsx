import { GitIcon } from "../icons/git-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";
import "./social.scss"
export function Social(){
    return(
        <div className="social">
            <a href=""><InstaIcon/></a>
            <a href=""><GitIcon/></a>
            <a href=""><LinkedinIcon/></a>
            <a href=""><TwitterIcon/></a>
        </div>
    )
}