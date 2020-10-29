import React, { Component } from "react";
import API from "../../utils/API";
import table from "../Table/Table";


class Main extends Component {
  // WHAT IS NEEDED
  // state
  // structure of the table
  // Form
  //    handleInputChange
  //    handleFormSubmit

  state = {
    employees: []    
  };

  searchAPI = () => {
    API.employee()
      .then((res) => {
        console.log(res.data.results);
        this.setState({employees: res.data.results})
      })
      .catch((err) => console.log(err));
  };

  // searchAPI();
  componentDidMount(){
    this.searchAPI()
  }


  render() {
    return <div>
      {/* table componant that is nested             */}
      
      </div>;
  }
}

export default Main;
