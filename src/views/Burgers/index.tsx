import './index.css'
import burger from '../../assets/images/burgerExp.png'

export default function Burgers() {
    return (
        <>
            <div className=" burgers-div">

                <div className="text-div">
                    <h1 className="h1-text">Burgers</h1>
                    <p className="burgers-p">Welcome to Burger Bliss, where we take your cravings to a whole new level!
                        Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns.
                    </p>
                </div>

                <div className="img-div">

                    <img src={burger}/>
                    <img src={burger}/>
                    <img src={burger}/>
                </div>

            </div>


        </>
    )

}
