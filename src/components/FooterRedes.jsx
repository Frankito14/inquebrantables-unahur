import LogoInstagram from "./logos/LogoInstagram";
import LogoLinktree from "./logos/LogoLinktree";
import LogoYoutube from "./logos/LogoYoutube";

export default function FooterRedes(){
    return(
        <div className='flex flex-wrap justify-center gap-20 '>
                <a href="https://www.instagram.com/inquebrantables.unahur/" target="_blank">
                    <LogoInstagram class="fill-current w-10 hover:fill-unahur-green transition"></LogoInstagram>
                </a>
                <a href="https://www.youtube.com/channel/UCc8etfYDV-InO9WnTqvfLgw" target="_blank">
                    <LogoYoutube class="fill-current w-10 hover:fill-unahur-green transition"></LogoYoutube>
                </a>
                <a href="https://linktr.ee/inquebrantablesunahur" target="_blank"> 
                    <LogoLinktree class="fill-current w-10 hover:fill-unahur-green transition"></LogoLinktree>
                </a>
        </div>
    )
}