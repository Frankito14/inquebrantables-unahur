import FooterInfo from "./FooterInfo";

import FooterImage from '../assets/images/footer2.png'
import FooterImage1 from '../assets/images/footer_p1.png'
import FooterImage2 from '../assets/images/footer_p2.png'
import FooterImage3 from '../assets/images/footer_p3.png'
import FooterRedes from "./FooterRedes";




export default function Footer() {
    return (
        <footer className="bg-white text-gray-600 text-center">
            <h3 className="font-semibold p-5">Nuestras redes</h3>
            <FooterRedes></FooterRedes>
            <hr className="mt-5"/>
            <div className="flex flex-wrap gap-5 justify-evenly items-center">
                <FooterInfo></FooterInfo>
                <div>
                    <img className="w-96 h-full mx-auto mt-3" src={FooterImage}></img>
                </div>
            </div>
        
            {/* <div className="mt-2 flex flex-wrap justify-around gap-5">
                <img className="w-24 h-full" src={FooterImage1}></img>
                <img className="w-52 h-full" src={FooterImage2}></img>
                <img className="w-32 h-full" src={FooterImage3}></img>
            </div> */}
        </footer>
    )
}