import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRender: true //This is where I am having problems
      
    };

    const style = {
      width:'100px'
    }
    const style2 = {
      width:'200px'
    }

 
  }



  render() {
    const isRender = this.state.isRender;
    const style = this.style;
    const style2 = this.style2;

    return (
      <div>
        {isRender ? (
          <div>
           <img src="https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_100/-M7q3olCZCehB9AGbn2y.jpg" style={style}></img>
          </div>
        ) : (
          <div>
             <img src="https://cdn.quicksell.co/-KpFi1XEDgH1mY5k1fSo/products_100/-M7q3olCZCehB9AGbn2y.jpg" style2={style2}></img>
          </div>
        )}
      </div>
    );
  }
}


export default App;