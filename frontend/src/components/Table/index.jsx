import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "../Button";
import { Pagination, Stack } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTable({
  rowsData,
  columns,
  currentPage,
  setCurrentPage,
  pagesCount,
}) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell align='center'>{column}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsData.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align='center' component='th' scope='row'>
                  {row.session_id}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  {row.start_time}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.end_time}</StyledTableCell>
                <StyledTableCell align='center'>
                  {row.actions.map((item, index) => (
                    <React.Fragment key={index}>
                      {item.action_type}
                      {index < row.actions.length - 1 && ", "}
                    </React.Fragment>
                  ))}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  <Button style={{ width: "100px" }}>View</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack spacing={2} sx={{ margin: 3 }}>
        <Pagination
          count={pagesCount}
          page={currentPage}
          onChange={(event, page) => setCurrentPage(page)}
          variant='outlined'
          shape='rounded'
        />
      </Stack>
    </>
  );
}
