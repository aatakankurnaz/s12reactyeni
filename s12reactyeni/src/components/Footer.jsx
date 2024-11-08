export const Footer = () => {
    return (
        <div className=" flex items-center justify-center font-inter dark:bg-[#252128]">
        <div className='w-[60%] h-[70%]  flex flex-col my-20  items-center'>
           <h1 className="text-[#4731D3] font-bold text-5xl  dark:text-[#8F88FF]">Send me a message!</h1>
           <h2 className="mt-8 text-center text-2xl dark:text-white">Got a question or proposal, or just want <br/>
            to say hello? Go ahead.</h2>
           <a href="" className="mt-2 text-[#4731D3] text-xl dark:text-[#8F88FF]">atakankurnaz@gmail.com</a>
            <nav className="flex gap-4 mt-3">
                <a href="">
                    <img src="/twitter 1.png" alt="" className="block dark:hidden"/>
                    <img src="/twitter 1 (1).png" alt="" className="hidden dark:block"/>
                </a>
                <a href="">
                    <img src="/codepen 1.png" alt="" className="block dark:hidden"/>
                    <img src="/codepen 1 (1).png" alt="" className="hidden dark:block"/>
                </a>
                <a href="">
                    <img src="/at-sign 1.png" alt="" className="block dark:hidden"/>
                    <img src="/at-sign 1 (1).png" alt="" className="hidden dark:block"/>
                </a>
                <a href="">
                    <img src="/instagram 1.png" alt="" className="block dark:hidden"/>
                    <img src="/instagram 1 (1).png" alt="" className="hidden dark:block"/>
                </a>
            </nav>
            
            
        </div>

    </div>
    )
}