import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  IconButton,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import CollapsibleRow, { Data } from "./CollapsibleRow";
import { useState } from "react";
import { convertArabicDate } from "./utils/convertDate";

const theme = createTheme({
  direction: "rtl",
});

export default function CollapsibleTable({ data }: { data: Data[] }) {
  const [dataToRender, setDataToRender] = useState(data);
  const [sortingType, setSortingType] = useState<"asc" | "desc">("desc");
  const [sortedCol, setSortedCol] = useState<string | null>(null);

  const handleSort = (sortItem: keyof Data) => {
    const newSortingType = sortingType === "asc" ? "desc" : "asc";
    setSortingType(newSortingType);

    const sortedData = [...data].sort((a, b) => {
      const [valA, valB] = newSortingType === "asc" ? [a, b] : [b, a];
      if (sortItem === "dateAdded") {
        const dateA = convertArabicDate(valA[sortItem]);
        const dateB = convertArabicDate(valB[sortItem]);
        return dateA!.getTime() - dateB!.getTime();
      }

      if (!isNaN(+valA[sortItem]!) && !isNaN(+valB[sortItem]!)) {
        return +valA[sortItem]! - +valB[sortItem]!;
      }

      if (
        typeof valA[sortItem] === "string" &&
        typeof valB[sortItem] === "string"
      ) {
        return valA[sortItem].localeCompare(valB[sortItem], "ar");
      }

      return 0;
    });

    setDataToRender(sortedData);
  };

  const cellStyle = {
    padding: "13px 16px",
    fontWeight: "bold",
  };

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper} sx={{ width: "1000px" }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#F6F7F9",
                height: "50px",
              }}
            >
              <TableCell sx={cellStyle} align="center"></TableCell>
              <TableCell sx={cellStyle} align="center"></TableCell>
              <TableCell sx={cellStyle} align="center">
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => {
                    handleSort("status");
                    setSortedCol("status");
                  }}
                >
                  {sortingType === "asc" && sortedCol === "status" ? (
                    <ArrowDropUpIcon />
                  ) : (
                    <ArrowDropDownIcon />
                  )}
                </IconButton>
                <span style={{ marginLeft: "20px" }}>الحالة</span>
              </TableCell>
              <TableCell sx={cellStyle} align="center">
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => {
                    handleSort("dateAdded");
                    setSortedCol("dateAdded");
                  }}
                >
                  {sortingType === "asc" && sortedCol === "dateAdded" ? (
                    <ArrowDropUpIcon />
                  ) : (
                    <ArrowDropDownIcon />
                  )}
                </IconButton>
                <span style={{ marginLeft: "20px" }}> تاريخ الاضافه</span>
              </TableCell>

              <TableCell sx={cellStyle} align="center">
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => {
                    handleSort("category");
                    setSortedCol("category");
                  }}
                >
                  {sortingType === "asc" && sortedCol === "category" ? (
                    <ArrowDropUpIcon />
                  ) : (
                    <ArrowDropDownIcon />
                  )}
                </IconButton>
                <span style={{ marginLeft: "20px" }}> تصنيف القائمة</span>
              </TableCell>
              <TableCell sx={cellStyle} align="center">
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => {
                    handleSort("listName");
                    setSortedCol("listName");
                  }}
                >
                  {sortingType === "asc" && sortedCol === "listName" ? (
                    <ArrowDropUpIcon />
                  ) : (
                    <ArrowDropDownIcon />
                  )}
                </IconButton>
                <span style={{ marginLeft: "20px" }}>أسم القائمة</span>
              </TableCell>
              <TableCell sx={{ ...cellStyle, width: "165px" }} align="center">
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => {
                    handleSort("listNum");
                    setSortedCol("listNum");
                  }}
                >
                  {sortingType === "asc" && sortedCol === "listNum" ? (
                    <ArrowDropUpIcon />
                  ) : (
                    <ArrowDropDownIcon />
                  )}
                </IconButton>
                <span style={{ marginLeft: "20px" }}>الرقم التسلسلي</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataToRender.map((rowData) => (
              <CollapsibleRow
                key={rowData.listNum}
                data={rowData}
                child={false}
                level={0}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
