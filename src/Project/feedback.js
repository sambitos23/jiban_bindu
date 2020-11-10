import React,  {useState} from 'react';
import "./style/css/feedback.css"
import PrimarySearchAppBar2 from './navbar2'

export default function Blog(props) {
    console.log(props)
  
    const [c, setC] = useState('');
    const [y, setY] = useState(false);
    if(props.location.state!== undefined && y===false){
      setC(props.location.state.a)
      setY(true)
    }
    
    const [a, setA] = useState('1');

        return(
            <div>
                { c === '1'?
                <PrimarySearchAppBar2
                  val={a}
                  valc={c}
                />
                :
                <PrimarySearchAppBar2/>
                }
                <div className="agileits_w3layouts">
                    <h1 className="agile_head text-center" style={{textShadow:'2px 2px 5px black'}}>Feedback Form</h1>
                        <div className="w3layouts_main wrap">
                        <h3>Please help us to serve you better by taking a couple of minutes. </h3>
                        <form className="agile_form">
                           <h2>How satisfied were you with our Service?</h2>
                           <ul className="agile_info_select">
                            <li><input type="radio" name="view" value="excellent" id="excellent" required/> 
                                <label for="excellent">excellent</label>
                                <div className="check w3"></div>
                            </li>
                            <li><input type="radio" name="view" value="good" id="good"/> 
                                <label for="good"> good</label>
                                <div className="check w3ls"></div>
                            </li>
                            <li><input type="radio" name="view" value="neutral" id="neutral"/>
                                <label for="neutral">neutral</label>
                                <div className="check wthree"></div>
                            </li>
                            <li><input type="radio" name="view" value="poor" id="poor"/> 
                                <label for="poor">poor</label>
                                <div className="check w3_agileits"></div>
                            </li>
                        </ul>
                        <h2>If you have specific feedback, please write to us...</h2>
                        <textarea placeholder="Additional comments" className="w3l_summary" name="comments" required=""></textarea>
                        <input type="text" placeholder="Your Name" name="name" required />
                        <input type="text" placeholder="Your Address" name="address" required/>
                        <input type="text" placeholder="Sign Up As " name="service"required /><br/>
                        <center><input type="submit" value="submit" className="agileinfo" /></center>
                        </form>
                        </div>
                    </div>
            </div>
        )
    
}