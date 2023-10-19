import HorizontalLine from "../Lines/HorizontalLine";
import SocialList from '../SocialMedia/SocialList'
import Logo from "../Logo";
import NavLink from "../NavigationBar/NavLink";

export default function Footer({lineWidth}) {
    return (
        <footer className="pb-5 pt-3 bg-gray-true-800 px-5">
            <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-center md:justify-between mx-auto">
                <Logo className=" md:mb-0"/>

            
                <div className="w-full md:w-auto mb-2 md:mb-0">
                    <ul className="font-medium flex md:p-0 rounded-lg flex-row md:space-x-8 md:border-0 bg-gray-true-800 justify-center items-center ">
                        <NavLink to="/" >Home.</NavLink>
                        <NavLink to="/Projects" >Projects.</NavLink>
                        <NavLink to="/About" >About.</NavLink>
                        <NavLink to="/Contact" >Contact.</NavLink>
                    </ul>
                </div>

                <SocialList height="6" width="6" color="gray-true-100"/>
            </div>
            
            <HorizontalLine width={lineWidth}/>

            <div className="max-w-screen-xl flex flex-wrap mx-auto justify-center md:justify-between text-gray-true-100 text-[15px]">
                <p>Learning something new everyday.</p>
                <p>Ⓒ 2023 - Rashed Alaleeli | Made with love</p>

            </div>
        </footer>
    );
}
