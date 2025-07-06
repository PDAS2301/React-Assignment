import React from 'react';


class Testunmount extends React.Component{
 
    componentWillUnmount(){
console.log("Component unmounted");

    }

    render(){
     
    return(
    <div>
        <h2>Abhay Kumar Pandey</h2>
    </div>
    );

    }


}

export default Testunmount;