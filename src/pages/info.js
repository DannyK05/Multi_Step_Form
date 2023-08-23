import Button from '../components/layout/button';
import Nav from '../components/layout/nav.js';
import Card from '../components/layout/card.js';
import Title from '../components/layout/title.js';

function Info(){
    return(
        <Card>
            <Nav/>
            <div>
                <Title title='Personal Info'
                sub='Please provide your name, email address and phone number.' />
                <form method='get'>
                
                    <label>
                        <p>Name</p>
                        <input type='text' required/>
                    </label>
                    <label>
                        <p>Email</p>
                        <input type='email' required/>
                    </label>
                    <label>
                        <p>Phone number</p>
                        <input type='phone' required/>
                    </label>
                
                    <div>
                        <Button className='action' name='Next Step'/> 
                    </div>
                </form>
            </div>
       </Card>
    
    )
}

export default Info;