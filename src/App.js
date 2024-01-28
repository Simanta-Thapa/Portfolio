
import './App.css';

import Navbar from './components/navbar/navbar';
import About from './components/about/about.js';
import Servicebox from './components/Skills/Service';
import Projectcard from './components/project/project';
import Form from './components/Form/form';

import img1 from './Image/frontendedit.png'
import project1 from './Image/BBC.png'
import project2 from './Image/lwmprojectimage.png'
import project3 from './Image/projectauredcross.png'
import project4 from './Image/travelandtour.png'  

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>

      <section id="skills" className='pt-20'>
        <div className='container'>
          <div className='skillsheading'>
              <h3 className='text-center text-3xl'>My Skills</h3>
              <div className='skillscontent mt-5'>

              <Servicebox 
              img={img1}
              heading ='Frontend Developer' 
              text='I like to code things from scratch, and enjoy bringing ideas to life in the browse' 
              languageheading='Language I speak:'
              languagedetails='HTML,CSS,Sass,Git'
              devheading='Dev Tools'
list1='Bootstrap'
list2='Tailwind'
list3='Git'
list4='Gihub'


              />

              <Servicebox
                  img={img1}
               heading ='Desginer' 
               text ='I value simple content structure, clean design patterns, and thoughtful interactions.' 
               languageheading='Things i enjoy designing with:'
               languagedetails='UX, UI'
               devheading='Dev Tools'
               list1='Figma'
             

               />

              </div>
          </div>
        </div>
        </section>

        <section id="project" className='pt-20 pb-7'>
           <div className='container'>
              <div className='projectheading'>
                <h3 className='text-center text-3xl'>My Project</h3>
                </div>

              <div className='projectcontent'>
                <Projectcard 
                projectimage ={project1}
                link="https://simanta-thapa.github.io/red-cross-au/"
                />

                <Projectcard 
                projectimage ={project2}
                link=""
                />

<Projectcard 
                projectimage ={project3}
                link=""
                />

<Projectcard 
                projectimage ={project4}
                link=""
              
                />

              </div>

              </div>
         
        </section>

        
      
 
    <Form/>
      
    </div>
  );
}

export default App;
