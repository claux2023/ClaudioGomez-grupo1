import hadware from '../../img/hadware.mp4'
export default function Video() {
    return(
        <div className='w-full h-[90vh] top-[90px]'>
        <video 
        className='object-cover h-full w-full absolute -z-10'
        src={hadware}
        autoPlay
        loop
        muted
        />
        <div className=' w-full h-[80%] flex flex-col justify-center items-center text-white px-4 text-center '>
            <h1 className='py-2 text-3xl font-bold'>bienvenido</h1>
            <p className='text-xl py-4 mt-10'>"Descubre nuestra página web, donde encontrarás todo lo que necesitas en tecnología para ti y tu familia. Ofrecemos una amplia gama de productos para todas tus necesidades, desde dispositivos electrónicos hasta accesorios que mejoran tu vida diaria"</p>
            <button className="m2 bg-blue-700 p-2 mt-7 cursor-pointer rounded-xl hover:scale-105 duration-500">contacto</button>
        </div>
    </div>
)
}
