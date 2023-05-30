import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export const Description = () => {
  const { detailsId } = useParams();
  const listData = useSelector((state) => state.list.data);
  console.log(
    454,
    detailsId,
    listData,
    listData?.data?.filter(({ id }) => {
      console.log(555, id);
      return id.toString() === detailsId;
    })
  );
  return <div>Description</div>;
};
