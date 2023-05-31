import PropTypes from "prop-types";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { getList } from "../../store/listSlice";
import { useEffect } from "react";

const PaginationComponent = ({ pageNumber, countNumber }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("pageNumber", pageNumber);
  }, [pageNumber]);

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

PaginationComponent.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  countNumber: PropTypes.number.isRequired,
};

export { PaginationComponent };
