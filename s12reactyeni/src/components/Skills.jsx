export const Skills = () => {
    return (
        <>
            <div className=" flex items-center justify-center  font-inter dark:bg-[#252128]">
                <div className='w-[60%] h-[70%]  flex my-20'>
                    <div className="grow-[1]">
                        <h1 className="font-extrabold tracking-wider text-[#4832D3] dark:text-[#CBF281]">Skills</h1>
                    </div>
                    <div className="grow-[1] flex flex-col gap-10">
                        <div className="flex items-center gap-4">
                            <img src="/logo-javascript.svg" alt="" className="w-28 h-28 rounded-md drop-shadow-xl "/>
                            <p className="m-0 text-[#777777] text-xl dark:text-white">JAVASCRIPT</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src="/react-1.svg" alt="" className="w-28 h-28 rounded-md drop-shadow-xl "/>
                            <p className="m-0 text-[#777777] text-xl dark:text-white">REACT</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src="/redux.png" alt="" className="w-28 h-28 rounded-md drop-shadow-xl "/>
                            <p className="m-0 text-[#777777] text-xl dark:text-white">REDUX</p>
                        </div>
                    </div>
                    <div className="grow-[1] flex flex-col gap-10">
                        <div className="flex items-center gap-4">
                            <img src="/node.png" alt="" className="w-28 h-28 rounded-md drop-shadow-xl "/>
                            <p className="m-0 text-[#777777] text-xl dark:text-white">NODE</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src="/vscode.svg" alt="" className="w-28 h-28 rounded-md drop-shadow-xl "/>
                            <p className="m-0 text-[#777777] text-xl dark:text-white">VS CODE</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <img src="/figma.png" alt="" className="w-28 h-28 rounded-md drop-shadow-xl "/>
                            <p className="m-0 text-[#777777] text-xl dark:text-white">FIGMA</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}