import Nav from '../components/layout/nav.js';
import Button from '../components/layout/button.js';
import Card from '../components/layout/card.js';
import Title from '../components/layout/title.js';

function AddOn(){
    let monthly =[
        '+$1/mo',
        '+$2/mo'
    ]
    let yearly =[
    '+10/yr',
    '+20/yr'
    ]
    return(
        <Card>
        <Nav/>
        <div className='container'>
            <Title title='Pick add-ons'
            sub='Add-ons help enhance your gaming experience'/>
            
            <form className='addOn' >
                <div className='box'>
                <input id='services' type='checkbox'/>
                    <label for="services">
                        <h4>Online Service</h4>
                        <p>Access to multiplayer games</p>
                    </label>
                </div>
                <div className='box'>
                <input id="storage" type='checkbox'/>
                    <label for="storage">
                        <h4>Larger Storage</h4>
                        <p>Extra 1TB of cloud save</p>
                    </label>
                </div>
                <div className='box'>
                <input id="profile" type='checkbox'/>
                    <label for='profile'>
                        <h4>Customizable Profile</h4>
                        <p>Custom these on your profile</p>
                    </label>
                </div>
            </form>
            <div className='button-div'>
                <Button className='return' name='Go back'/> <Button className='action' name='Next Step'/> 
            </div>
        </div>
    </Card>

    );
}
    export default AddOn;