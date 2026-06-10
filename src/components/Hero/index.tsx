import Banner from '@/assets/images/banner.jpg';

export const Hero = () => {
    return (
        <div className="container">
            <section className=" relative h-125 rounded-[20px] mb-10 overflow-hidden">
                <img src={Banner} alt="Modelo usando tenis SyntaxeWare" className="w-full h-full object-cover" />

                <div className="absolute w-full bottom-0  flex justify-end items-center text-center px-6 md:px-24 pb-32">
                    <div className=' text-white w-[388px] flex flex-col items-center'>
                        <h2 className='text-xl font-medium leading-normal tracking-wide mb-2.5'>Kryoton One</h2>
                        <h1 className='text-2xl leading-9 tracking-widest mb-10'>Transforme qualquer passo em presença</h1>

                        <div className='flex gap-3.5'>
                            <button>Ver Modelos</button>
                            <button>Comprar</button>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
}