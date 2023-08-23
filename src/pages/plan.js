import Nav from '../components/layout/nav.js';
import Button from '../components/layout/button.js';
import Card from '../components/layout/card.js';
import Title from '../components/layout/title.js';

function Plan(){
    return(
        <Card>
            <Nav/>
            <div>
                <Title title='Select your plan'
                sub='You have the option of monthly or yearly billing'/>
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
                    <Button className='return' name='Go back'/> <Button className='action' name='Next Step'/> 
                </div>
            </div>
        </Card>

    );
}
    export default Plan;