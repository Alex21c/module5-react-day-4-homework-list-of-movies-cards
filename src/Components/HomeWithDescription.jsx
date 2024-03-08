import kindOfVilla from "./../Assests/Images/kindOfVilla.png";

export default function HomeWithDescription(){
  return (
    <section id='HomeWithDescription' className='grid grid-cols-2 m-[7rem] w-[70%] p-[2rem] bg-slate-100 gap-[4rem] items-center ml-[auto] mr-[auto]'>
        <div class='wrapperBigBeautifulHouse w-[40rem] h-[40rem]  translate-x-[-10rem]'>
          <img className='rounded-md w-[100%] h-[100%] object-cover ' src={kindOfVilla} alt="Big beautiful house" />
        </div>
        
        <div className='translate-x-[-0rem] flex flex-col gap-[1rem]'>
          <h2 className='font-bold text-[1.8rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
          <p className='text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
          <a href="#" className="max-w-[10rem] text-center font-normal text-white bg-indigo-600 hover:bg-transparent border border-solid border-indigo-600 transition	 hover:text-indigo-600 hover:font-medium pl-[1rem] pr-[1rem]  p-[.5rem] rounded-md">Get in Touch</a>
        </div>
        
    </section>
  );
}