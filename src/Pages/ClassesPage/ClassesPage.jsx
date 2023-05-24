import { useEffect, useState } from "react";
import { getData } from "../../Services/services";
import axios from "axios";
import { Link } from "react-router-dom";

const ClassesPage = () => {
  const [classes, setClasses] = useState([]);
  const [name, setName] = useState("");
  const [timing, setTiming] = useState("");
  const [coachName, setCoachName] = useState("");
  const [price, setPrice] = useState("");
  const [curr, serCurrent] = useState();
  const [addedClass, setAddedClass] = useState();
  const [deletedClass, setDeletedClass] = useState();
  const [editedClass, setEditedClass] = useState();

  useEffect(() => {
    getData("https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes").then(
      (res) => setClasses(res.data)
    );
  }, [addedClass, editedClass, deletedClass]);

  const addClass = () => {
    axios
      .post("https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes", {
        class_name: name,
        timing: timing,
        coach_name: coachName,
        price: price,
      })
      .then((res) => {
        console.log(res);
        setAddedClass(res.data);
      });
  };
  const editClass = (id) => {
    axios
      .put(
        `https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes/${id}`,
        {
          class_name: name,
          timing: timing,
          coach_name: coachName,
          price: price,
        }
      )
      .then((res) => {
        console.log(res);
        setEditedClass(res.data);
      });
  };

  const deleteClass = (id) => {
    axios
      .delete(
        `https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes/${id}`
      )
      .then((res) => {
        console.log(res);
        setDeletedClass(res.data);
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
          <i className="bi bi-person-plus-fill"></i> Add Classes
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
                  Add Classes
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
                      placeholder="Class Name"
                      onChange={(e) => setName(e.target.value)}
                    />

                    <input
                      className="form-control form-control-sm mb-3"
                      type="text"
                      placeholder="Coach Name"
                      onChange={(e) => setCoachName(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      className="form-control form-control-sm mb-3"
                      type="text"
                      placeholder="Timing"
                      onChange={(e) => setTiming(e.target.value)}
                    />

                    <input
                      className="form-control form-control-sm mb-3"
                      type="text"
                      placeholder="Price"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>

                  <button className="btn btn-dark" onClick={addClass}>
                    Add Classes
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
                Edit Classes
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
                    placeholder="Class Name"
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    className="form-control form-control-sm mb-3"
                    type="text"
                    placeholder="Coach Name"
                    onChange={(e) => setCoachName(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    className="form-control form-control-sm mb-3"
                    type="text"
                    placeholder="Timing"
                    onChange={(e) => setTiming(e.target.value)}
                  />

                  <input
                    className="form-control form-control-sm mb-3"
                    type="text"
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={() => editClass(curr)}
                >
                  Edit Class
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
              <th scope="col">Class Name</th>
              <th scope="col">Coach Name</th>
              <th scope="col">Timing</th>
              <th scope="col" colSpan="2">
                Price
              </th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((c, index) => {
              return (
                <tr key={index}>
                  <td>{c.class_name || "--"}</td>
                  <td>{c.coach_name || "--"}</td>
                  <td>{c.timing || "--"}</td>
                  <td scope="col" colSpan="2">
                    {c.price || "--"}
                  </td>
                  <td className="d-flex">
                    <i
                      className="bi bi-trash3 me-3 mb-3 text-danger flex-fill"
                      onClick={() => deleteClass(c.id)}
                    ></i>

                    <i
                      className="bi bi-pencil-square me-3 mb-3 flex-fill"
                      data-bs-toggle="modal"
                      data-bs-target="#editModal"
                      onClick={() => serCurrent(c.id)}
                    ></i>

                    <Link
                      className="btn btn-primary flex-fill"
                      to={"/classes/" + c.id}
                    >
                      ShowClassDetails
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

export default ClassesPage;
