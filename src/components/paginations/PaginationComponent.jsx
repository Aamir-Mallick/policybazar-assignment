import PropTypes from "prop-types";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { getList } from "../../store/listSlice";

const PaginationComponent = ({ pageNumber, countNumber }) => {
  const dispatch = useDispatch();

  const onPageChange = (event, value) => {
    dispatch(getList(value));
  };
  return (
    <Stack spacing={2}>
      <Pagination
        onChange={onPageChange}
        page={pageNumber}
        count={countNumber}
        color='primary'
      />
    </Stack>
  );
};

PaginationComponent.PropTypes = {
  pageNumber: PropTypes.number,
  countNumber: PropTypes.number,
};

export { PaginationComponent };
