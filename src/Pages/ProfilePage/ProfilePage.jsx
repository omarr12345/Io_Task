import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../Services/services";
const ProfilePage = () => {
  const { id } = useParams();
  console.log(id);
  const [client, setClient] = useState();
  useEffect(() => {
    getData(
      `https://64103182e1212d9cc92c334f.mockapi.io/api/gym/clients/${id}`
    ).then((res) => setClient(res.data));
  }, [id]);
  return (
    <div className="container pt-4 details-page">
      <div className="row justify-content-between">
        <div className="col-lg-4">
          <img
            className="img-fluid mb-4"
            src="/profile-pic.jpg"
            alt="profile"
          />
        </div>
        <div className="col-lg-7">
          <div>
            <h6>
              <i className="bi bi-person-check"></i> Full Name
            </h6>
            <h4>{client?.name || "--"}</h4>
          </div>

          <div>
            <h6>
              <i className="bi bi-person-check"></i> Phone Num
            </h6>
            <h4>{client?.phone_num || "--"}</h4>
          </div>

          <div>
            <h6>
              <i className="bi bi-geo-alt-fill"></i> Address
            </h6>
            <h4>{client?.createdAt || "--"}</h4>
          </div>

          <div>
            <h6>
              <i className="bi bi-bookmark"></i> Subscription type
            </h6>
            <h4>{client?.subscription_plan || "--"}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
