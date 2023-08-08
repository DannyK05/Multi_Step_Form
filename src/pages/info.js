import Button from '../components/button';
import Nav from '../components/nav.js'
function Info(){
    return(
        <>
        <Nav/>
       <main>
        <form method='get'>
            <label><p>Name</p>
                <input type='text' required/>
            </label>
            <label><p>Email</p>
                <input type='email' required/>
            </label>
            <label><p>Phone number</p>
                <input type='phone' required/>
            </label>
        </form>
        <div>
            <Button name='Next Step'/> 
        </div>
       </main>
        </>
    )
}

export default Info;