import Nav from '../components/nav.js';
import Button from '../components/button';

function Finish(){
    return(
        <>
    <Nav/>
    <main>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
        <form >
            <div>
                <label><input type='check'/></label>
            </div>
            <div>
                <label><input type='check'/>
                    <h5>Larger Storage</h5>
                    <p>Extra 1TB of cloud save</p>
                </label>
            </div>
            <div>
                <label><input type='check'/>
                    <h5>Customizable Profile</h5>
                    <p>Custom these on your profile</p>
                </label>
            </div>
        </form>
        <div>
            <Button name='Go back'/> <Button name='Next Step'/> 
        </div>
    </main>
    </>
    );
}
    export default Finish;