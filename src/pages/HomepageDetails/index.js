import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchHomepageById } from "../../store/homepageDetails/actions";
import Homepage from "../../components/Homepage";
import { selectHomepageDetails } from "../../store/homepageDetails/selectors";

export default function HomepageDetails() {
  const { id } = useParams();
  const homepage = useSelector(selectHomepageDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomepageById(id));
  }, [dispatch, id]);

  return (
    <Homepage
      id={homepage.id}
      title={homepage.title}
      description={homepage.description}
      backgroundColor={homepage.backgroundColor}
      color={homepage.color}
      showLink={false}
      stories={homepage.stories.map(story => {
        return (
          <div key={story.id}>
            <h4>{story.content}</h4>
            {story.imageUrl ? (
              <img src={story.imageUrl} alt={story.name} />
            ) : null}
          </div>
        );
      })}
    />
  );
}
