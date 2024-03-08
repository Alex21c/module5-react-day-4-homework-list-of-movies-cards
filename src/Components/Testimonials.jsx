import Testimonial  from "./Testimonial";
import person1ProfileImg from '../Assests/Images/ProfilePictures/person1.png';
import person2ProfileImg from '../Assests/Images/ProfilePictures/person2.png';
import person3ProfileImg from '../Assests/Images/ProfilePictures/person3.png';
import person4ProfileImg from '../Assests/Images/ProfilePictures/person4.png';
import person5ProfileImg from '../Assests/Images/ProfilePictures/person5.png';
import person6ProfileImg from '../Assests/Images/ProfilePictures/person6.png';
import person7ProfileImg from '../Assests/Images/ProfilePictures/person7.png';
import person8ProfileImg from '../Assests/Images/ProfilePictures/person8.png';
import person9ProfileImg from '../Assests/Images/ProfilePictures/person9.png';

export default function Testimonials(){
  let testimonailsData = [
    {
      personName: 'Alex21C',
      personDesignation: 'Developer at Google',
      personProfilePicture: person3ProfileImg,
      testimonial: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim fuga voluptas facilis molestiae maxime odio maiores pariatur, dicta sit ducimus laboriosam deserunt, saepe cumque voluptatem."
    },
    {
      personName: 'Gladis Lennon',
      personDesignation: 'Head of SEO',
      personProfilePicture: person2ProfileImg,
      testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."
    },
    {
      personName: 'Andrew',
      personDesignation: 'BankNifty Trader',
      personProfilePicture: person4ProfileImg,
      testimonial: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum."
    },
    {
      personName: 'Cassendra',
      personDesignation: 'Real Estate Investor',
      personProfilePicture: person8ProfileImg,
      testimonial: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima."
    },
    {
      personName: 'Abhishek kumar',
      personDesignation: 'MERN Stack Developer',
      personProfilePicture: person9ProfileImg,
      testimonial: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quia corporis recusandae at amet nihil ut! Necessitatibus doloremque consectetur dolorem vitae doloribus aut expedita ab, facilis nostrum, molestias, repudiandae id incidunt earum minus harum quisquam."
    },    
    {
      personName: 'Cassendra',
      personDesignation: 'Traveller',
      personProfilePicture: person5ProfileImg,
      testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing."
    },    
    {
      personName: 'Blue Queen',
      personDesignation: 'Porsche Driver',
      personProfilePicture: person6ProfileImg,
      testimonial: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, consequuntur! Expedita ea suscipit modi laudantium vel dolores! Asperiores, repudiandae?"
    },    

  ];

  return(
    <section id='Testimonials' className='grid grid-cols-3 gap-[2rem] p-[3rem] w-[80%] m-[auto] '>
      <h2 className='displayNone'>Testimonials</h2>
      
      {testimonailsData.map(
        (testimonialData, idx) =><Testimonial key={idx} testimonialData={testimonialData} />)
      }

    </section>
  );
}