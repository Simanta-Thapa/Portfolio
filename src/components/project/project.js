import './project.css'

function projectcard(props){
    return(
        <>
        <div className='projectCard'>
          <div className='projectcardimage'>
            <img src = {props.projectimage}/>
          </div>

          <div className='projectlayer'>
            <a href={props.link} target='_blank' className='mx-5 mt-5 text-white inline-block text-4xl'>View More</a>
          </div>
        </div>
        </>
    )
}

export default projectcard