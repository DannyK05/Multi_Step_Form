import Nav from '../components/layout/nav.js';
import Button from '../components/layout/button.js';
import Card from '../components/layout/card.js';
import Title from '../components/layout/title.js';
function Finish(){
    return(
    <Card>
        <Nav/>
        <div className='container'>
            <Title title='Finishing Up'
            sub='Double-check everything looks OK before confirming'/>
           <div className='summary'>
                
           </div>
            <div className='button-div'>
                <Button className='return' name='Go back'/> <Button className='action' name='Confirm'/> 
            </div>
        </div>
    </Card>

    );
}
    export default Finish;