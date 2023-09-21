import Nav from '../components/layout/nav.js';
import Button from '../components/layout/button.js';
import Card from '../components/layout/card.js';
import Title from '../components/layout/title.js';
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";

function Plan(){
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
            <div>
                <Title title='Select your plan'
                sub='You have the option of monthly or yearly billing'/>
                <form >
                    <div className='plan-options'>
                        <div className='option'>
                            <img src={Arcade} alt=''/>
                            <div>
                                <h3>Arcade</h3>
                                <p>$9/mo</p>
                            </div>
                        </div>
                        <div className='option'>
                            <img src={Advanced} alt=''/>
                            <div>
                                <h3>Advanced</h3>
                                <p>$12/mo</p>
                            </div>     
                        </div>
                        <div className='option'>
                            <img src={Pro} alt=''/>
                            <div>
                                <h3>Pro</h3>
                                <p>$15/mo</p>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='button-div'>
                    <Button className='return' name='Go back'/> <Button className='action' name='Next Step'/> 
                </div>
            </div>
        </Card>

    );
}
    export default Plan;