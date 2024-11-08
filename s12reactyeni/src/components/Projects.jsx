export const Projects = () => {
    return (
        <div className=" bg-[#CBF281] flex flex-col items-center justify-center border">
            <div className='w-[60%] h-[60%] border mt-20'>
                <h1 className="text-[#4731D3] font-Inter text-5xl font-bold">Projects</h1>

            </div>


            <div className='w-[60%] h-[60%] border flex mt-10 bg-white rounded-xl drop-shadow-lg'>
                <div>
                    <img src="/figma.png" alt="" className="w-[400px] h-[350px] rounded-l-xl" />
                </div>
                <div>
                    <div className="ml-20 py-10">
                        <h1 className="text-[#4338CA] font-Inter">Pizza</h1>
                        <p className="font-Inter">A simple, customizable, minimal setup cookie plugin that allows your <br />
                            users to select which cookies to accept or decline. This was created<br />
                            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM<br />
                            package and the git repository makes any type of customization to
                            <br />
                            code and themes possible.</p>
                        <div className="flex gap-2">
                            <button className="border px-4 py-1 rounded-2xl  text-white bg-[#4731D3]">react</button>
                            <button className="border px-4 py-1 rounded-2xl text-white bg-[#4731D3]">redux</button>
                            <button className="border px-4 py-1 rounded-2xl text-white bg-[#4731D3]">vercel</button>
                        </div>
                        <nav className="mt-3 flex gap-4">
                            <a href="" className="text-[#120B39] font-bold">View Site</a>
                            <a href="" className="text-[#120B39] font-bold">GitHub</a>
                        </nav>
                    </div>
                </div>
            </div>
            
            <div className='w-[60%] h-[60%] border flex mt-10 bg-white rounded-xl drop-shadow-lg mb-20'>
                <div>
                    <img src="/figma.png" alt="" className="w-[400px] h-[350px] rounded-l-xl" />
                </div>
                <div>
                    <div className="ml-20 py-10">
                        <h1 className="text-[#4338CA] font-Inter">Pizza</h1>
                        <p className="font-Inter">A simple, customizable, minimal setup cookie plugin that allows your <br />
                            users to select which cookies to accept or decline. This was created<br />
                            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM<br />
                            package and the git repository makes any type of customization to
                            <br />
                            code and themes possible.</p>
                        <div className="flex gap-2">
                            <button className="border px-4 py-1 rounded-2xl  text-white bg-[#4731D3]">react</button>
                            <button className="border px-4 py-1 rounded-2xl text-white bg-[#4731D3]">redux</button>
                            <button className="border px-4 py-1 rounded-2xl text-white bg-[#4731D3]">vercel</button>
                        </div>
                        <nav className="mt-3 flex gap-4">
                            <a href="" className="text-[#120B39] font-bold">View Site</a>
                            <a href="" className="text-[#120B39] font-bold">GitHub</a>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    )
}