export default function QuotesSection({quote}){
  // console.log(quote);
  return (
    <div className='individualQuote shadow-xl rounded-md ml-[auto] mr-[auto] m-[2rem] flex gap-[2rem] p-[2rem] bg-slate-200 max-w-[70rem] '>
      <div class='flex flex-col gap-[.2rem]'>
        <div className="shadow-md  w-[15rem] h-[15rem] rounded-lg overflow-hidden">
          <img className="object-fill w-[100%] h-[100%]" src={ require(`../Assests/Images/Quotes/${quote.authorPhotograph}`)} alt={`Photograph ${quote.author}`} />
        </div>
        <div className="font-semibold bg-blue-800 text-white pt-[.5rem] pb-[.5rem] p-[1rem] text-center">{quote.author}</div>
      </div>

      <div className="wrapperBlockQuoteAndInterpretation w-[50rem]">
        <blockquote>
          <p className="relative">
            <i className="absolute fa-sharp fa-solid fa-quote-left text-green-800 text-[3rem] top-[-2rem]"></i>
            <span className="text-[1.5rem] pl-[3rem] pr-[1rem] text-blue-800 font-semibold">{quote.quote}</span>
            <i class="absolute fa-sharp fa-solid fa-quote-right text-red-800 text-[1.5rem]"></i>
            </p>
        </blockquote>
        <div>
          <p className="text-[1.3rem]">
            <strong className="text-slate-500">Interpretation: </strong>
            <span className="italic text-slate-500">{quote.interpretation}</span>
            </p>
        </div>
      </div>
    </div>
  );
}