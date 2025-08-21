import { Link, useParams, useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";
import useQuery from "../api/useQuery";

const SingleActivity = () => {
  const { token } = useAuth();
  const { id } = useParams();

  const {
    data: activity,
    loading,
    error,
  } = useQuery(`/activities/${id}`, "activity");

  if (loading || !activity) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <h1>{activity?.name}</h1>
      <p>
        <strong>Created by:</strong> {activity?.creatorName}
      </p>
      <br />
      <p>
        <strong>Activity Description:</strong> {activity?.description}
      </p>

      <br />
      {token && <DeleteButton id={activity.id} />}
    </>
  );
};

const DeleteButton = ({ id }) => {
  const navigate = useNavigate();

  const {
    mutate: deleteActivity,
    loading,
    error,
  } = useMutation("DELETE", "/activities/" + id, ["activities", "activity"]);

  const onDeleteActivity = async () => {
    const success = await deleteActivity();
    if (success) navigate("/activities");
  };

  return (
    <button onClick={onDeleteActivity}>
      {loading ? "Deleteing" : error ?? "Delete"}
    </button>
  );
};

export default SingleActivity;
