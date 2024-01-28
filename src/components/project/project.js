import './project.css'

function projectcard(props){
    return(
        <>
        <div className='projectCard'>
          <div className='projectcardimage'>
            <img src = {props.projectimage}/>
          </div>

          <div className='projectlayer'>
            <a href={props.link} target='_blank' className='text-center inline-block'>View More</a>
          </div>
        </div>
        </>
    )
}

export default projectcard