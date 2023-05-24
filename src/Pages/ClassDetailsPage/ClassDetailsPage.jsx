import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../Services/services";

function ClassDetailsPage() {
  const { id } = useParams();
  const [classDetails, setClassDetails] = useState();

  useEffect(() => {
    getData(
      `https://64103182e1212d9cc92c334f.mockapi.io/api/gym/classes/${id}`
    ).then((res) => setClassDetails(res.data));
  }, [id]);
  return (
    <div className="class-details-page container pt-4">
      <h3>Class Details</h3>

      <div className="row">
        <div className="col-md-12">title:{classDetails?.title || "--"}</div>
        <br />
        <div className="col-md-12">
          description:{classDetails?.description || "--"}
        </div>
        <br />
        <div className="col-md-12">
          coach name:{classDetails?.coach_name || "--"}
        </div>
        <br />
        <div className="col-md-12">
          coach brief:{classDetails?.coach_brief || "--"}
        </div>
        <br />
        <div className="col-md-12">timing:{classDetails?.timing || "--"}</div>
        <br />
        <div className="col-md-12">price:{classDetails?.price || "--"}</div>
      </div>
    </div>
  );
}

export default ClassDetailsPage;
