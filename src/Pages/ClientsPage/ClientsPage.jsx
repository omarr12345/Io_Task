import { useEffect, useState } from "react";
import { getData } from "../../Services/services";
import axios from "axios";
import { Link } from "react-router-dom";
const ClientsPage = () => {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [subsType, setsubsType] = useState("");
  const [address, setAddress] = useState("");
  const [current, setCurrent] = useState();
  const [addedClient, setAddedClient] = useState();
  const [deletedClient, setDeletedClient] = useState();
  const [editedClient, setEditedClient] = useState();

  useEffect(() => {
    getData("https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients").then(
      (res) => setClients(res.data)
    );
  }, [addedClient, editedClient, deletedClient]);

  const addClient = () => {
    axios
      .post("https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients", {
        name: name,
        phone_num: phoneNum,
        subscription_plan: subsType,
        createdAt: address,
      })
      .then((res) => {
        console.log(res);
        setAddedClient(res.data);
      });
  };

  const editClient = (id) => {
    axios
      .put(
        `https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients/${id}`,
        {
          name: name,
          phone_num: phoneNum,
          subscription_plan: subsType,
          createdAt: address,
        }
      )
      .then((res) => {
        console.log(res);
        setEditedClient(res.data);
      });
  };

  const deleteClient = (id) => {
    axios
      .delete(
        `https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients/${id}`
      )
      .then((res) => {
        console.log(res);
        setDeletedClient(res.data);
      });
  };

  return (
    <div className="container pt-4">
      {/* Add Modal */}
      <div className="mb-4">
        <button
          type="button"
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#addModal"
        >
          <i className="bi bi-person-plus-fill"></i> Add Client
        </button>

        <div
          className="modal fade"
          id="addModal"
          tabIndex="-1"
          aria-labelledby="addModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="addModal">
                  Add Client
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      className="form-control form-control-sm mb-3"
                      type="text"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />

                    <input
                      className="form-control form-control-sm mb-3"
                      type="text"
                      placeholder="Phone Number"
                      onChange={(e) => setPhoneNum(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      className="form-control form-control-sm mb-3"
                      type="text"
                      placeholder="Address"
                      onChange={(e) => setAddress(e.target.value)}
                    />

                    <input
                      className="form-control form-control-sm mb-3"
                      type="text"
                      placeholder="Type"
                      onChange={(e) => setsubsType(e.target.value)}
                    />
                  </div>

                  <button className="btn btn-dark" onClick={addClient}>
                    Add Client
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Modal */}

      {/* Edit Modal */}
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="editModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editModal">
                Edit Client
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <input
                    className="form-control form-control-sm mb-3"
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    className="form-control form-control-sm mb-3"
                    type="text"
                    placeholder="Phone Number"
                    onChange={(e) => setPhoneNum(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    className="form-control form-control-sm mb-3"
                    type="text"
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />

                  <input
                    className="form-control form-control-sm mb-3"
                    type="text"
                    placeholder="Type"
                    onChange={(e) => setsubsType(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={() => editClient(current)}
                >
                  edit client
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Modal */}

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Address</th>
              <th scope="col" colSpan="2">
                Type
              </th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((x, clientsIndex) => {
              return (
                <tr key={clientsIndex}>
                  <td scope="col">{x.name || "--"}</td>
                  <td scope="col">{x.phone_num || "--"}</td>
                  <td scope="col">{x.createdAt || "--"}</td>
                  <td scope="col" colSpan="2">
                    {x.subscription_plan || "--"}
                  </td>
                  <td scope="col" className="d-flex">
                    <i
                      className="bi bi-trash3 me-3 mb-3 text-danger flex-fill"
                      onClick={() => deleteClient(x.id)}
                    ></i>

                    <i
                      className="bi bi-pencil-square me-3 mb-3 flex-fill"
                      data-bs-toggle="modal"
                      data-bs-target="#editModal"
                      onClick={() => setCurrent(x.id)}
                    ></i>
                    <Link
                      className="btn btn-primary flex-fill"
                      to={"/clients/" + x.id}
                    >
                      ShowClientsDetails
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientsPage;
