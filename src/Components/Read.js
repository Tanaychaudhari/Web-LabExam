import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
export default function Read() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios.get(`http://localhost:9595/user/all`)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      }).catch((error) => {
        console.log(error);
      })
  }

  const handleRegister = () => {
   
    navigate('/create');
  }

  const handleLocalStorage = (id,orderid,deliveryDate,deliveryAddress,deliveryFee) => {
   
    localStorage.setItem("id", id);
    localStorage.setItem("orderid", orderid);
    localStorage.setItem("deliveryDate", deliveryDate);
    localStorage.setItem("deliveryAddress", deliveryAddress);
    localStorage.setItem("deliveryFee", deliveryFee);
    
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container mt-3 mb-3">
        <button className='btn btn-info m-2' onClick={handleRegister}>Orders</button>
        <h3>Orders</h3>
        <div className="row mt-3 mb-3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">orderid</th>
                <th scope="col">deliveryDate</th>
                <th scope="col">deliveryAddress</th>
                <th scope="col">deliveryFee</th>
               
              </tr>
            </thead>
            <tbody>
              {
                users.map((user) => {
                  return (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.orderid}</td>
                      <td>{user.deliveryDate}</td>
                      <td>{user.deliveryAddress}</td>
                      <td>{user.deliveryFee}</td>

                      <td>
                        <Link to="/update">
                          <button
                            className="btn btn-success"
                            onClick={() =>
                              handleLocalStorage(
                                user.id,
                                user.orderid,
                                user.deliveryDate,
                                user.deliveryAddress,
                                user.deliveryFee
                              )
                            }
                          >
                            Update
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

