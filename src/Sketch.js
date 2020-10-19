import React from 'react'
import p5 from 'p5'

class Sketch extends React.Component {
    constructor(props) {
        super(props)
        //p5 instance mode requires a reference on the DOM to mount the sketch
        //So we use react's createRef function to give p5 a reference
        this.myRef = React.createRef()
    }

    // This uses p5's instance mode for sketch creation and namespacing
    Sketch = (p) => {

        // Native p5 functions work as they would normally but prefixed with 
        // a p5 object "p"
        p.setup = () => {
            //Everyhting that normally happens in setup works
            p.createCanvas(p.windowWidth, p.windowHeight)
        }

        p.draw = () => {
            // And everything that normally goes in draw in here
            if(p.mouseIsPressed){
                p.fill(0);
            } else {
                p.fill(255);
            }
            p.ellipse(p.mouseX, p.mouseY, 80, 80);
        }

     
    }

    componentDidMount() {
        //We create a new p5 object on component mount, feed it 
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    render() {
        return (
            //This div will contain our p5 sketch
            <div ref={this.myRef}>

            </div>
        )
    }
}

export default Sketch