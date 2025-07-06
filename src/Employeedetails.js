

import React from 'react';

// class Employeedetails extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       val: '',
//       originalList: ['Orange', 'Apple', 'Grapes'],
//     };
//   }

//   filterEvent = (e) => {
//     const inputValue = e.target.value;
//     this.setState({ val: inputValue });
//   };

//   getFilteredList() {
//     if (!this.state.val) {
//       return this.state.originalList;
//     }
//     return this.state.originalList.filter(item =>
//       item.toLowerCase().includes(this.state.val.toLowerCase())
//     );
//   }

//   render() {
//     const filteredList = this.getFilteredList();
    
//     return (
//       <div className="App">
//         <input
//           type="text"
//           placeholder="Search fruits..."
//           value={this.state.val}
//           onChange={this.filterEvent}
//         />
//         {filteredList.map((item, index) => (
//           <div key={index}>{item}</div>
//         ))}
//       </div>
//     );
//   }
// }


class Employeedetails extends React.Component{
constructor(props){
super(props);
this.state = {
  employees: [
    {
      firstName: "Priya",
      lastName: "Das",
      contact: "9876543210",
      email: "priya.das@example.com",
      dept: "CSE",
    },
    {
      firstName: "Amit",
      lastName: "Sen",
      contact: "9123456780",
      email: "amit.sen@example.com",
      dept: "ME",
    },
    {
      firstName: "Riya",
      lastName: "Roy",
      contact: "9012345678",
      email: "riya.roy@example.com",
      dept: "ECE",
    },
    {
      firstName: "Sneha",
      lastName: "Mukherjee",
      contact: "9898989898",
      email: "sneha.mukherjee@example.com",
      dept: "CSE",
    },
    {
      firstName: "Rahul",
      lastName: "Ghosh",
      contact: "9789456123",
      email: "rahul.ghosh@example.com",
      dept: "ME",
    },
    {
      firstName: "Anjali",
      lastName: "Kar",
      contact: "9832147856",
      email: "anjali.kar@example.com",
      dept: "ECE",
    },
  ],
  val:" "
};
}
filterEvent=(e)=>{
  console.log(e.target.value);
  this.setState({
    val:e.target.value
  })
}
  

getFilteredList() {
  if (!this.state.val) {
    return this.state.employees;
  }
  return this.state.employees.filter(item =>
    item.email.toLowerCase().includes(this.state.val.toLowerCase())
  );
}

  render() {
    const filteredList = this.getFilteredList();
    return(
<div>
<h2>Employee details</h2>
<table border="1" cellPadding="10">
<th>
   <td>First Name</td> 
   <td>Last Name</td>
   <td>Contact</td>
   <td>Email</td>
</th>
<tbody>

 
{this.state.employees.filter((Priya)=>Priya.dept==="ECE" || Priya.dept==="CSE").map((emp,id)=>{
  
 return(<tr key={id} > 
    <td>{emp.firstName}</td>
    <td>{emp.lastName}</td>
    <td>{emp.contact}</td>
    <td>{emp.email}</td>
   </tr>)
})
}

</tbody>
</table>
<div>
<input
          type="text"
          placeholder="Search emails"
          value={this.state.val}
          onChange={this.filterEvent}
 />
      
  {filteredList.map((Priya,id)=>{
return(
  <div key={id}>
<h1>{Priya.email}</h1>
  </div>
)
})
}
</div>
</div>

    )
}
}


export default Employeedetails;