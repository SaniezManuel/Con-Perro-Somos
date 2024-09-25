import Image from "next/image";
import logo from "./resources/imgs/texto-blanco.png"
import bigLogo from "./resources/imgs/logo-bg-blanco-color.png"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PodcastsIcon from '@mui/icons-material/Podcasts';

import perroDefault from "./resources/perroDefault.jpg"

export default function Home() {
  return (
    <main className="bg-main">
      <div className="bg-detail-dark rounded-b-[40px] max-w-fit mx-auto flex">
          <a href="#main">
          <Image
          src={logo}
          width={100}
          alt="main-logo"
          className="ml-[50px] mr-[50px]"

          />
          </a>
          <ul className="text-white text-center flex items-center font-bold space-x-20 mr-[50px]">
              <li><a href="#SobreMi">SOBRE MI</a></li>
              <li><a>PODCAST</a></li>
              <li><a>ACADEMIA ONLINE</a></li>
              <li><a>BLOG</a></li>
              <li><a>LOGIN</a></li>
          </ul>
      </div>
      <div id="main" className="flex flex-col w-[900px] mx-auto mt-[100px]">
        <Image
        src={bigLogo}
        width={350}
        alt="LOGO"
        className="flex items-center justify-center mx-auto"
        />
        <p className="text-white text-bold text-center text-[70px]">Lorem ipsum dolor sit amet</p>

      <div className="flex text-white mx-auto pt-10">
            <a className="pr-2"><WhatsAppIcon/> 11 123456783</a>
            <p>|</p>
            <a className="pr-2 pl-2"><EmailIcon/> mail@conperrosomos.com.ar</a>
            <p>|</p>
            <div className="pl-2"> 
            <a><InstagramIcon/></a>
            <a><FacebookIcon/></a>
            <a><XIcon/></a>
            <a><PodcastsIcon/></a> 
            </div>
        </div>
          <div id="SobreMi" className=" mt-[5300px]">
          <h1 className="text-white text-[40px] text-bold text-center">Sobre Mi</h1>
          <div className="grid grid-cols-2 grid-rows-1 gap-4s items-center">
            <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Image
            src={perroDefault}
            width={500}
            alt=""
            className=""
            />
          </div>

          </div>
       
        </div>

     
    
  </main>
  
    
  );
}
