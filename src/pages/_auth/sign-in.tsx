import { createFileRoute, Link } from '@tanstack/react-router'
import { LoginForm } from '../../components/LoginForm'
import { Logo } from '../../components/Logo'
import GoogleIcon from '@/assets/images/google-icon.png'
import { Separator } from '../../components/Separador'

export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className='text-black bg-[#f5f5f5] h-screen w-full flex justify-center items-center p-5'>
      <div className='w-[450px] bg-white rounded-[18px] p-10 shadow-md'>
        <div className='flex flex-col'>
          <Logo />

          <h2 className='font-bold text-[21-px] mb-2'>Sign in</h2>

          <p className='mb-3.5'>How would you like to continue?</p>

          <button className=' w-full flex item-center justify-center gap-2 border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition cursor-pointer'>
            <img src={GoogleIcon} alt="Google icon" className='w-5 h-5' />
            <span className='text-sm font-medium text-black'>Sign in with Google</span>
          </button>

          <Separator />

          < LoginForm />

          <p className='mt-3.5'>
            Don't have an account? <Link to="/sign-up" className='ml-1 text-[#5433EB] hover:underline'>Sign up</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
