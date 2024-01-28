import './about.css';
import image from '../../Image/Portfoliosecond.png'


function About(){
    return(
        <>
        <section id="about" className='pt-20'>
            <div className="container">

                <div className="aboutmeheading">
                 <h3 className='text-center text-3xl text-white mb-3'>About Me</h3>
                </div>
                
                <div className='aboutmecontent gap-5'>

                <div className="aboutmetext mt-10">
        <p className='text-2xl text-center text-white'>
        "Hey, I'm Simanta Thapa, a front-end developer eager for an internship.
         Check out my portfolio with four standout projects highlighting my knack for creating visually stunning and user-friendly experiences. 
        Ready to collaborate and turn innovative designs into reality!
        </p>
      </div>

      <div className='aboutmeimage mx-auto'>
        <img src={image}/>
      </div>
                </div>
     
            </div>
        </section>
        </>
    )
}


export default About