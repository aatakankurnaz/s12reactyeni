export const Profile = () => {
    return (
        <div className="h-[70vh] bg-[#4731D3] flex items-center justify-center ">
            <div className='w-[60%] h-[70%]  flex flex-col gap-5'>
                <h1 className="text-[#CBF281] font-Inter text-5xl font-bold">Profile</h1>
                <div className="flex">
                    <div className=" grow-[0.1] flex flex-col gap-3">
                        <h2 className="text-[#FFFFFF] font-Inter">Basic Information</h2>
                        <div className="flex gap-2">
                            <div className="flex flex-col gap-3">
                                <p className="text-[#CBF281] font-semibold">Doğum Tarihi</p>
                                <p className="text-[#CBF281] font-semibold">İkamet Şehri</p>
                                <p className="text-[#CBF281] font-semibold">Eğitim <br />Durumu</p>
                                <p className="text-[#CBF281] font-semibold">Tercih Ettiği <br />Rol</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-white font-semibold">18.07.1994</p>
                                <p className="text-white font-semibold">İstanbul</p>
                                <p className="text-white font-semibold">Kocaeli Ünv. Kamu Yönetimi <br />Lisans, 2018</p>
                                <p className="text-white font-semibold">Frontend, UI</p>
                            </div>
                        </div>
                    </div>
                    <div className=" grow-[0.3] flex justify-center">
                        <img src="/107975 -1.JPG" alt="" className="h-80 w-80 rounded-xl drop-shadow-lg" />
                    </div>
                    <div className=" grow-[1] flex flex-col gap-3">
                        <h2 className="text-[#FFFFFF] font-Inter">About Me</h2>
                        <div className="flex flex-col gap-3">
                            <p className="text-white font-Inter">Lorem ipsum, dolor sit amet <br />consectetur adipisicing elit.<br /> Veniam aut, odit laborum aliquam <br />
                                voluptatum nisi mollitia.</p>
                            <p className="text-white font-Inter">Mnima accusamus ratione soluta <br />
                                aperiam sit voluptate? Dicta quod <br />
                                deserunt quam temporibus <br />
                                cumque magnam! </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}