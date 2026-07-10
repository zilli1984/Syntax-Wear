import Banner from '@/assets/images/banner.jpg';
import { Button } from '../Button';

export const Hero = () => { 
    return (
        <div className="container">
            <section className='relative h-135 sm:h-125 rounded-[20px] mb-5'>
                <img src={Banner} alt="Homem sentado com os tênis da SyntaxWear" className='w-full h-full object-cover object-[30%_center] rounded-[20px]'/>

                <div className='absolute w-full bottom-30 sm:bottom-35 flex justify-center sm:justify-end items-center text-center px-6 lg:px-30'>
                    <div className='flex flex-col items-center text-white w-80 xl:w-96'>
                        <h2 className='text-xl font-medium leading-normal tracking-wider mb-2.5'>Krypton One</h2>
                        <h1 className='text-2xl leading-9 tracking-widest mb-10'>Transforme qualquer passo em presença</h1>

                        <div className='flex gap-3.5'>
                            <Button variant="secondary" size="sm">Ver modelos</Button>
                            <Button>Comprar</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}