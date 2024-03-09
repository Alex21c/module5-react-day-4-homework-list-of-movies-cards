export default function MovieCard({movieData}){
  // console.log(movieData);
  return (
    <div className="relative w-[80rem] h-[30rem] rounded-2xl overflow-hidden m-[auto] shadow-lg shadow-cyan-600" > 
      <div className="absolute w-[100%] h-[100%]">
        <img className="object-cover w-[100%] h-[100%] opacity-[.7]" src={require(`../Assests/Images/Movies/${movieData.backgroundPoster}`)} alt={`Background poster image for movie : ${movieData.title}`} />
      </div>
      <div className="absolute bg-gradient-to-r from-gray-800 to-gray-950 opacity-[.9] text-gray-300 max-w-[40rem] flex flex-col pb-[1rem] p-[2rem] h-[100%] justify-between rounded-bl-lg">
        <div className="flex gap-[2rem]">
          <div className="min-w-[15rem] max-w-[25rem] h-[17rem]">
            <img className="rounded-md object-fill w-[100%] h-[100%]" src={require(`../Assests/Images/Movies/${movieData.thumbnail}`)} alt={`thumbnail image for movie : ${movieData.title}`} />
          </div>
          <div className="flex flex-col gap-[.8rem]">
            <h2 className="text-[2rem]">{movieData.title}</h2>
            <div className="text-blue-300">
              {movieData.releaseYear}, {movieData.director}
            </div>
            <div className="flex gap-[1rem] items-center">
              <span className="pt-[.2rem] pb-[.2rem] p-[.5rem] border-solid border-2 border-gray-700/[.7] rounded-md">{movieData.runningTime}</span>
              <span>{movieData.genre}</span>
            </div>
          </div>
        </div>

        <p className="text-[1.1rem]">{movieData.description}</p>

        <div className="flex gap-[1.5rem] text-[1.5rem] text-gray-500 cursor-pointer">
          <i className="fa-solid fa-share-nodes hover:text-yellow-500 tarnsition" title='share'></i>
          <i className="fa-sharp fa-solid fa-heart hover:text-red-500 tarnsition" title='like'></i>
          <i className="fa-solid fa-message hover:text-blue-500 tarnsition" title='tweet'></i>
        </div>

      </div>
      

    </div>
    
  );
}