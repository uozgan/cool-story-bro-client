import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homepageThunk } from "../../store/homepages/actions";
import { selectHomepages } from "../../store/homepages/selectors";
import Homepage from "../../components/Homepage";

export default function HomePageList() {
  const homepages = useSelector(selectHomepages);
  const dispatch = useDispatch();

  // console.log(homepages);

  useEffect(() => {
    dispatch(homepageThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Homepage List</h1>
      {homepages.map(homepage => {
        return (
          <Homepage
            key={homepage.id}
            id={homepage.id}
            title={homepage.title}
            description={homepage.description}
            backgroundColor={homepage.backgroundColor}
            color={homepage.color}
            showLink={true}
          />
        );
      })}
    </div>
  );
}
