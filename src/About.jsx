import React, { useState, useEffect } from "react";
import axios from "axios";

function About() {
  const [associates, setAssociates] = useState([]);
  const [showAssociates, setShowAssociates] = useState(false);
  let currentItems = [];
  useEffect(() => {
    fetchAssociates();
  }, []);

  const fetchAssociates = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/todos`);
      // console.log(response,'response');
      // debugger;
      setAssociates(response.data.todos);
      setShowAssociates(true);
      // currentItems=response.data.todos;
      // console.log(currentItems,'currentItems')
      //       debugger;
    } catch (error) {
      console.error("Error fetching associates:", error);
    }
  };

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // items = [];

  //hooks
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  //All javaScript code needs to be in {}
  // const message =items.length === 0 ? <p>No Items</p> : "";
  const getMessage = () => {
    return items.length === 0 ? <p>No Items</p> : "";
  };

  //Event handler;
  const handleClickItem = (item, index) => {
    // selectedItemIndex = index;
    // console.log(item, selectedItemIndex);
    setSelectedItemIndex(index);
  };

  // function handleItemClick(e,item){
  //   console.log(e,item)
  // }
  return (
    <>
      <div className="container mt-4">
        {showAssociates && (
          <>
            <table className="table mt-3">
              <thead>
                <tr>
                  <th>SNo</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>User Id</th>
                </tr>
              </thead>
              <tbody>
                {associates.map((associate) => (
                  <tr key={associate.id}>
                    <td>{associate.id}</td>
                    <td>{associate.todo}</td>
                    <td>{associate.completed}</td>
                    <td>{associate.userId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
      <div className="container">
        <h2>List Group</h2>
        {getMessage()}
        {items.length === 0 && <p>No Items</p>}
        <ul className="list-group">
          {items.map((item, index) => {
            return (
              <li
                // onClick={(e)=>console.log(item,e)}
                onClick={(e) => handleClickItem(item, index)}
                // onClick={handleClickItem()}
                key={index}
                // className={`list-group-item ${index % 2 === 0 ? "active" : ""}`}
                className={
                  selectedItemIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
              >
                Id:{index}&nbsp;{item}
              </li>
            );
          })}

          {/* <li className="list-group-item active" aria-current="true">
        An active item
      </li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li> */}
        </ul>
      </div>
    </>
  );
}

export default About;
