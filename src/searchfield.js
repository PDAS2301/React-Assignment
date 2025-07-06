import React from "react";
import './searchfield.css';

class Searchfield extends React.Component {
  constructor(props) {
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
      searchTerm: "",
    };
  }

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { employees, searchTerm } = this.state;
    //debugger;
    // Filter employees based on email match (case-insensitive)
    const filteredEmployees = employees.filter(employee =>
      employee.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="search-container">
        <h1>Employee Directory</h1>
        
        

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by email..."
          value={searchTerm}
          onChange={this.handleSearch}
          className="search-input"
        />
        
        {/* Results Count */}
        <div className="results-count">
          {filteredEmployees.length} employee(s) found
        </div>
        
        {/* Employees Table */}
        <table className="employee-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.contact}</td>
                <td>{employee.email}</td>
                <td>{employee.dept}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* No Results Message */}
        {filteredEmployees.length === 0 && (
          <div className="no-results">No matching employees found</div>
        )}
      </div>
    );
  }
}

export default Searchfield;