import Nav from '../components/layout/nav.js';
import Button from '../components/button';
import Card from '../components/layout/card.js';

function Plan(){
    return(
        <>
    <Nav/>
    <Card>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
        <form >
            <div>
                <span></span>
                <h3>Arcade</h3>
                <p>$9/mo</p>
            </div>
            <div>
                <span></span>
                <h3>Arcade</h3>
                <p>$12/mo</p>     
            </div>
            <div>
                <span></span>
                <h3>Pro</h3>
                <p>$15/mo</p>
            </div>
        </form>
        <div>
            <Button name='Go back'/> <Button name='Next Step'/> 
        </div>
    </Card>
    </>
    );
}
    export default Plan;