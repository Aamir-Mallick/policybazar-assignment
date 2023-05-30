import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DescriptionPage } from "./DescriptionPage";
export const Description = () => {
  const { detailsId } = useParams();
  const listData = useSelector((state) => state.list.data);
  const descriptionData = listData?.data?.filter(({ id }) => {
    return id.toString() === detailsId;
  });

  return (
    <div>
      <h2>Description</h2>
      <DescriptionPage
        email={descriptionData[0].email}
        firstName={descriptionData[0].first_name}
        lastName={descriptionData[0].last_name}
        avatar={descriptionData[0].avatar}
      />
    </div>
  );
};
