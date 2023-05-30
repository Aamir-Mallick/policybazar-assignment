import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../store/listSlice";
import { useEffect } from "react";
import { Items } from "./Items";
import { PaginationComponent } from "../paginations/PaginationComponent";

export const ListItem = () => {
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(getList());
  }, []);

  return (
    <div>
      Welcome
      {console.log(typeof listData?.data?.page)}
      <div>
        {listData?.data?.data?.map(({ id, first_name, avatar }) => (
          <Items key={id} id={id} firstName={first_name} avatar={avatar} />
        ))}
      </div>
      <div>
        <PaginationComponent
          pageNumber={listData?.data?.page}
          countNumber={listData?.data?.total_pages}
        />
      </div>
    </div>
  );
};
