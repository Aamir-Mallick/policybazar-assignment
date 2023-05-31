import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DescriptionPage } from "./DescriptionPage";
import { useEffect } from "react";
import { getList } from "../../store/listSlice";
export const Description = () => {
  const { detailsId } = useParams();
  const listData = useSelector((state) =>
    state?.list?.data?.data?.filter(({ id }) => id.toString() === detailsId)
  );
  const pageNumber = useSelector((state) => state.list.pageNumber);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem("pageNumber")) {
      localStorage.setItem("pageNumber", pageNumber);
    }
    if (localStorage.getItem("pageNumber")) {
      dispatch(getList(Number(localStorage.getItem("pageNumber"))));
    }
  }, []);

  return listData?.length ? (
    <div>
      <DescriptionPage
        email={listData[0]?.email}
        firstName={listData[0]?.first_name}
        lastName={listData[0]?.last_name}
        avatar={listData[0]?.avatar}
      />
    </div>
  ) : (
    <p>loading...</p>
  );
};
