import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/products/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className='container'>
            <h1 className='text-black'>Ola</h1>
            <p className='text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt a et cum ea incidunt eum possimus ex facilis! Sapiente voluptate ea sunt eius odio ipsa ex id quas officiis quae.</p>
            <p className='text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt a et cum ea incidunt eum possimus ex facilis! Sapiente voluptate ea sunt eius odio ipsa ex id quas officiis quae.</p>
            <p className='text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt a et cum ea incidunt eum possimus ex facilis! Sapiente voluptate ea sunt eius odio ipsa ex id quas officiis quae.</p>
            <p className='text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt a et cum ea incidunt eum possimus ex facilis! Sapiente voluptate ea sunt eius odio ipsa ex id quas officiis quae.</p>
            <p className='text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt a et cum ea incidunt eum possimus ex facilis! Sapiente voluptate ea sunt eius odio ipsa ex id quas officiis quae.</p>

        </div>
    )
}
