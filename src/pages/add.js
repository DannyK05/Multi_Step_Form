import Nav from '../components/layout/nav.js';
import Button from '../components/layout/button.js';
import Card from '../components/layout/card.js';
import Title from '../components/layout/title.js';

function AddOn(){
    return(
        <Card>
        <Nav/>
        <div>
            <Title title='Pick add-ons'
            sub='Add-ons help enhance your gaming experience'/>
            
            <form >
                <div>
                    <label>
                        <input type='checkbox'/>
                        <h5>Online Service</h5>
                        <p>Access to multiplayer games</p>
                    </label>
                </div>
                <div>
                    <label>
                        <input type='checkbox'/>
                        <h5>Larger Storage</h5>
                        <p>Extra 1TB of cloud save</p>
                    </label>
                </div>
                <div>
                    <label>
                        <input type='checkbox'/>
                        <h5>Customizable Profile</h5>
                        <p>Custom these on your profile</p>
                    </label>
                </div>
            </form>
            <div>
                <Button className='return' name='Go back'/> <Button className='action' name='Next Step'/> 
            </div>
        </div>
    </Card>

    );
}
    export default AddOn;