import './Hero.css'
export default function Main(){
  return (
      <section id='hero' className='heroSection relative'>
        <div id='letUsFindYourFood' className='opacity-[.8] hover:opacity-[1] transition absolute top-[5rem] left-[5rem] w-[30rem] p-[3rem] bg-orange-400 text-center flex flex-col  gap-[1rem] rounded-md'>
          <h2 className='flex flex-col leading-[2.8rem]'><span className='font-extrabold text-[2.5rem]'>Let us find your</span><span className='font-extrabold text-[2.5rem] text-red-600'>Forever Food.</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
          <div className='flex gap-[.5rem] items-center justify-center'>
            <a href="#" className="bg-red-600 hover:bg-red-700 pl-[2rem] pr-[2rem]  p-[.5rem] rounded-sm text-white">Search Now</a>
            <a href="#" className="bg-slate-50 hover:bg-slate-200 pl-[2rem] pr-[2rem]  p-[.5rem] rounded-sm text-red-600">Know more</a>
          </div>
        </div>
      </section>
  );
}