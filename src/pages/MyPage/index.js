import React from "react";
import Homepage from "../../components/Homepage";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Loading";

export default function MyPage() {
  const { token, homepage, id } = useSelector(selectUser);
  console.log("Kelley", homepage);

  const history = useHistory();

  if (!token) {
    history.push("/");
  }

  if (!homepage) {
    return <Loading />;
  }

  return (
    <div>
      <h2>My Page Bro</h2>

      <Homepage
        id={homepage.id}
        title={homepage.title}
        description={homepage.description}
        backgroundColor={homepage.backgroundColor}
        color={homepage.color}
        showLink={false}
      />
    </div>
  );
}
