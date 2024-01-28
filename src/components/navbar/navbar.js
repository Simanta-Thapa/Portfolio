// import React from 'react';
import './navbar.css'




function Navbar(){


    // function show(){
    //     // document.getElementById("navbar-listcontent").classList.toggle('show');
        
    //     var x = document.getElementById("bars");
        
    //     console.log(x)
    //     if(x){
    //         document.getElementById("navbar-listcontent").classList.add("show")
    //         alert("hello")
    //     }
    // }

    // $(".fa-bars").click(function(){
    //     $('#navbar-listcontent').addClass("show")
    // })

    

    // function hide(){
    // // document.getElementById("navbar-listcontent").classList.toggle('hide');
    // var y = document.getElementById("navbar-listcontent");
    // if(y){
    //     y.classList.add("show")
    // }

    
    return(
        <>
<header>


        <nav className="mobilenavbar">
        <div className="container">
            <div className='navbarcontent flex'>

            <div className="logo">
                <h3>Simanta Thapa</h3>
             </div>

            <div className='navbarlistcontent' id="navbar-listcontent"> 
              <ol className='mobilelist'>
           <li><a href="#">Home</a></li>
           <li><a href="#about">about</a></li>
           <li><a href="#skills">skills</a></li>
           <li><a href="#project">project</a></li>
           <li><a href="#form">Contact</a></li>

              </ol>
              <i className="fa-solid fa-xmark" 

              onClick={()=>{
                   const x=document.querySelector("#navbar-listcontent");
                   x.classList.remove("show")
              }}>

              </i>
            </div>

             <div className="toggle">
                  <i className="fa-solid fa-bars" id ="bars" 
                  
                  onClick={()=>{
                    const x=document.querySelector("#navbar-listcontent");
                    x.classList.add("show")
                  }}>
                </i>

                </div>
            </div>
          
        </div>

        </nav>

        <nav className='laptopnavbar'>
          <div className='container'>
            <div className='laptopnavbarcontent flex justify-between'>

              <div className='laptopnavbarcontentlogo'>
                <h3>Smanta Thapa</h3>
              </div>

              <div className='laptopnavbarlinks'>
                <ol className='laptopnavbarlist flex gap-7'>
                  <li className='laptopnavbaritem'><a href="#">Home</a></li>
                  <li className='laptopnavbaritem'><a href="#about">about</a></li>
                  <li className='laptopnavbaritem'><a href="#skills">skills</a></li>
                  <li className='laptopnavbaritem'><a href="#project">project</a></li>
                  <li><a href="#form">Contact</a></li>

                </ol>

              </div>
              </div>

          </div>
          </nav>

        </header>
        </>
    )
}

export default Navbar