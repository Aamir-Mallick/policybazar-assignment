import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../store/listSlice";
import { useEffect } from "react";
import { Items } from "./Items";
import { Box } from "@mui/material";
import { PaginationComponent } from "../paginations/PaginationComponent";

export const ListItem = () => {
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.list);
  const pageNumber = useSelector((state) => state.list.pageNumber);

  useEffect(() => {
    dispatch(getList());
  }, []);

  return listData?.data?.data?.length ? (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Box>
          {listData?.data?.data?.map(({ id, first_name, avatar }) => (
            <Items key={id} id={id} firstName={first_name} avatar={avatar} />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <PaginationComponent
          pageNumber={pageNumber}
          countNumber={listData?.data?.total_pages}
        />
      </Box>
    </div>
  ) : (
    <p>loading...</p>
  );
};
