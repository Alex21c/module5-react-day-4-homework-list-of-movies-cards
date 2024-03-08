export default function Testimonial({testimonialData}){
  // console.log('data is' + testimonialData)
  return (
    <div className='flex flex-col gap-[1rem]'>
      <p className='bg-slate-100 p-[1rem] rounded-md text-slate-600'>{testimonialData.testimonial}</p>
      <div className='flex gap-[1rem] items-center'>
        <div>
          <img className='w-[4rem]' src={testimonialData.personProfilePicture} alt={testimonialData.personName + " profile picture"} />
        </div>
        <div>
          <h3 className='font-bold'>{testimonialData.personName}</h3>
          <span>{testimonialData.personDesignation}</span>
        </div>
      </div>
    </div>
  );
}