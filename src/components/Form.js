import React from 'react';

class Form extends React.Component{
render(){
    return(
        <div>
            <form onSubmit={this.props.getWeather}>
               <input type="text" name="city" placeholder="cityname"></input>
               <input type="text" name="country" placeholder="countryname"></input>
               <button type="submit"> get_info </button>            
            </form>
        </div>
    );
}
};

export default Form;