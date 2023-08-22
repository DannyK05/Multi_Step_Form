import Button from '../components/button';
import Nav from '../components/layout/nav.js';
import Card from '../components/layout/card.js';
function Info(){
    return(
        <Card>
        <Nav/>
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
            <div>
            <Button name='Next Step'/> 
        </div>
        </form>
        
       </Card>
    
    )
}

export default Info;