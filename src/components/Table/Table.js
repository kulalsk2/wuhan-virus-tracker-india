import React from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { value } from "numeral";
const inrformat = require("inrformat");

const useStyles = makeStyles({
  tablecontainer: {
    backgroundColor: "white",
    borderRadius: 10,
    boxShadow: "0 0 8px -4px rgba(0, 0, 0, 0.5)",
    marginBottom: 10,
    marginTop: 10,
    height: 600,
  },
  oddRow: {
    backgroundColor: "#f3f2f8",
  },
  evenRow: {
    backgroundColor: "#A0A0A0",
  },
});

const headerColumns = [
  { id: "state", label: "State" },
  { id: "code", label: "StateCode" },
  {
    id: "active",
    label: "Active",

    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "confirmed",
    label: "Confirmed",

    align: "right",
    format: (value) => value.toLocaleString("en-IN"),
  },
  {
    id: "recovered",
    label: "Recovered",
    align: "right",
    format: (value) => value.toLocaleString("en-IN"),
  },
  {
    id: "deaths",
    label: "Deceased",
    align: "right",
    format: (value) => value.toLocaleString("en-IN"),
  },
];

export default function StateInfoTable({ states }) {
  const classes = useStyles();
  let i = 0;
  return (
    <TableContainer className={classes.tablecontainer}>
      <Table stickyHeader aria-aria-label="Sticky Table">
        <TableHead>
          <TableRow>
            {headerColumns.map((column) => (
              <TableCell key={column.id} align={column.align}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {states.map((state) => {
            return (
              <TableRow
                key={Math.random() / Math.random()}
                className={i++ % 2 ? classes.oddRow : classes.evenRow}
              >
                <TableCell key={state.state}>{state.state}</TableCell>
                <TableCell key={state.statecode}>{state.statecode}</TableCell>
                <TableCell key={Math.random() / Math.random()}>
                  {inrformat(state.active)}
                </TableCell>
                <TableCell key={Math.random() / Math.random()}>
                  {inrformat(state.confirmed)}
                </TableCell>
                <TableCell key={Math.random() / Math.random()}>
                  {inrformat(state.recovered)}
                </TableCell>
                <TableCell key={Math.random() / Math.random()}>
                  {inrformat(state.deaths)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
