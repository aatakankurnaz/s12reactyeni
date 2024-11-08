import Form from 'react-bootstrap/Form';

export const Main = () => {
    return (
        <div className="h-screen bg-gradient-to-r from-[#4731D3] from-60% to-[#CBF281] flex items-center justify-center ">
            <div className='w-[60%] h-[60%] mb-[15%] '>

                <header className=' h-[15%] flex justify-between items-center'>
                    <h1 className='text-[#CBF281] font-inter font-bold tracking-wider'>atakan</h1>
                    <div className='flex self-start gap-40'>
                        <button className='text-[#CBF281] font-inter font-bold tracking-wider'>TÜRKÇE'YE GEÇ</button>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="DARK MODE"
                                className='text-[#4731D3] font-inter font-bold tracking-wider custom-switch'
                            />
                        </Form>
                    </div>
                </header>
                <div className='w-full h-full flex'>
                    <div className='grow-[1]  flex flex-col gap-10 justify-center'>
                        <h1 className='text-6xl text-[#CBF281] font-inter'>I am a Frontend<br />
                            Developer...</h1>
                        <p className='text-3xl text-white font-inter'>...who likes to craft solid and scalable frontend <br /> products with great user experiences.</p>
                        <nav className='flex gap-3'> 
                            <a href="" className=' px-2 py-2 bg-white rounded-md flex gap-2 no-underline items-center'>
                                <img src="/github-mark.png" alt="" className='w-8 h-8'/>
                                <p className='m-0 font-inter  text-[#3730A3]'>Github</p>
                            </a>
                            <a href="" className=' px-2 py-2 bg-white rounded-md flex gap-2 no-underline items-center'>
                                <img src="/LI-In-Bug.png" alt="" className='w-8 h-8'/>
                                <p className='m-0 font-inter  text-[#3730A3]'>Linkedin</p>
                            </a>

                        </nav>
                    </div>
                    <div className='grow-[1]  flex justify-center '>
                        <img src="/107975 -1.JPG" alt="sds" className='h-[85%] -radius rounded-2xl' />
                    </div>
                </div>
            </div>

        </div>
    )
}

{/* <div className=' pt-10 max-w-7x flex flex-col items-center'>
            <header className='flex'>
                <h1>Atakan</h1>
                <div className='flex'>
                <button>TÜRKÇE'YE GEÇ</button>
                <Form>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Check this switch"
                    />
                </Form>
                </div>
            </header>
            </div> */}