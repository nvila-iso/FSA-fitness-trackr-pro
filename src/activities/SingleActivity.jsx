import { Link, useParams } from "react-router";
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
  } = useQuery(`/activities/${id}`, "activities");

  if (loading || !activity) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  // const = {
  //     mutate: deleteActivity,
  //     loading,
  //     error,
  // } = useMutation("DELETE", "/activities/" + activity?.id, ["activities"]);

  return (
    <>
      <h1>{activity?.name}</h1>
      <p>{activity?.description}</p>
      <p>{activity?.creatorName}</p>
    </>
  );
};

export default SingleActivity;
