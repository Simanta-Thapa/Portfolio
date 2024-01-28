import './skills.css'




function Servicebox(props){
    return(
        <>

      <div className='servicecard p-4'>

           <div className='servicecardimage mt-2'>
             <img src={props.img}/>
           </div>

           <div className='servicecardtext text-center mt-2'>
            <h3 className='text-3xl text-white font-bold mb-3 mt-2'>{props.heading}</h3>
            <p className='text-white mb-3 mt-2'>{props.text}</p>
            <p className='mb-3 mt-2'>{props.languageheading}</p>
            <p className='text-white mb-3 mt-2'>{props.languagedetails}</p>
           </div>

           <div className='servicecardtools'>
             <h4>{props.devheading}</h4>
             <ol className='text-center'>
                <li className='mt-2'>{props.list1}</li>
                <li className='mt-2'>{props.list2}</li>
                <li className='mt-2'>{props.list3}</li>
                <li className='mt-2'>{props.list4}</li>   
             </ol>
           </div>
      </div>

        </>
    )
}


export default Servicebox