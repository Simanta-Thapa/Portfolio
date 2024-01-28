import './form.css'

function form(){
    return(
        <>
        <section id="form" className='pt-10'>
       <div className="container">
        <h2 className='text-center text-3xl text-white mb-5'>Contact Me</h2>
<div className="formdiv">
    {/* <form action="https://formspree.io/f/mqkreejq" method="POST">
        <div className="upperinput">
            <div className="inputgroup">
                <input type="text" id="name" placeholder="Enter Your Name" required/>

            </div>

            <div className="inputgroup">
                <input type="email" id="email" placeholder="Enter Your email" required/>

            </div>

            <textarea name="message" required>

            </textarea>
            <input type="submit" value="send"/>
        </div>
    </form> */}

     <form action="https://api.web3forms.com/submit" method="POST" class="form flex flex-col gap-8 mx-auto">
                        <input type="hidden" name="access_key" value="e612d510-ee96-4600-b026-8f8a55d595ef"/>

                      
                      <div class="upperpartinput flex justify-between gap-2">
                        <div class="inputgroup w-full">
                            <input type="text" name="name" placeholder="Enter Your Name"  className = " w-full bg-transparent border border-white p-3 rounded-2xl" required/>
                        </div>              
                        
                        <div class="inputgroup w-full">
                            <input type="email" name="email" placeholder="Enter Your Email" className = " w-full bg-transparent border border-white p-3 rounded-2xl" required/>
                        </div>
                      </div>



<div className="message">
    <textarea name="message" placeholder="Enter Your Message" className='bg-transparent border border-white p-3 rounded-2xl' required>

    </textarea>
</div>


    <button type="submit" className=' bg-transparent border border-white p-3 rounded-2xl'>Submit Form</button>

                    </form>

</div>
       </div>
        </section>
        </>
    )
}


export default form