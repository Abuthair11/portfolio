import React from 'react'

const Header = () => {
  return <header ClassName = "w-full h-[80px] flex items-center">
    <div className="container">
        <div className="flex items-center gap-[10px]" >
           <span className="w-[35px] h-[35px] bg-black  text-white text-[18px] font-[500] rounded-full flex items-center justify-center header" >
            M</span>
            <div className="leading-[20px]">
                <h2 className="text-xl text-blue font-[700] ">Abuthair</h2>
                 <p ClassName= "text-blue text-[14px] ">Personal</p>
            </div>

            <div className="menu">
                <ul className='flex items-center gap-10'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Service</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>

  </header>
}

export default Header;
