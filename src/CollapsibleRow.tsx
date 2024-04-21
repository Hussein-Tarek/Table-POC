import { useState } from "react";

import { useTheme } from "@mui/material/styles";
import { KeyboardArrowLeft, KeyboardArrowDown } from "@mui/icons-material";
import {
  TableRow,
  TableCell,
  IconButton,
  Chip,
  Box,
  Stack,
} from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export type Data = {
  listNum: string;
  listName: string;
  category: string;
  dateAdded: string;
  status: string;
  children?: Data[];
};

type Row = {
  data: Data;
};

type Props = Row & { child: boolean; level: number };

export default function CollapsibleRow({ data, child, level }: Props) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const padding: string = `${level * 16 + 32}px`;
  const hasChildren: boolean = data.children! && data.children.length > 0;
  return (
    <>
      <TableRow sx={{ height: "50px" }}>
        <TableCell sx={{ paddingY: "0" }} align="center">
          <MoreVertIcon />
        </TableCell>
        <TableCell sx={{ paddingY: "0" }} align="center">
          <Stack direction="row" spacing={2}>
            <DeleteIcon />
            <BorderColorRoundedIcon />
            <VisibilityRoundedIcon />
          </Stack>
        </TableCell>
        <TableCell sx={{ paddingY: "0" }} align="center">
          <Chip
            label={data.status}
            sx={{
              outline: `solid 1px ${
                data.status === "مفعل"
                  ? theme.palette.primary.dark
                  : theme.palette.secondary.dark
              }`,
              backgroundColor: `${
                data.status === "مفعل"
                  ? theme.palette.primary.light
                  : theme.palette.secondary.light
              }`,
              color: "white",
            }}
            size="small"
          />
        </TableCell>
        <TableCell sx={{ paddingY: "0" }} align="center">
          {data.dateAdded}
        </TableCell>
        <TableCell sx={{ paddingY: "0" }} align="center">
          {data.category}
        </TableCell>
        <TableCell sx={[{ paddingY: "0" }]} align="center">
          {data.listName}
        </TableCell>

        <TableCell
          align="center"
          sx={[child && { paddingRight: padding }, { paddingY: "0" }]}
        >
          <Box
            sx={[
              { display: "inline" },
              !hasChildren && { paddingRight: "34px" },
            ]}
          >
            {data.listNum}
          </Box>

          {hasChildren && (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
              sx={{ marginLeft: "10px", padding: "0" }}
            >
              {open ? <KeyboardArrowDown /> : <KeyboardArrowLeft />}
            </IconButton>
          )}
        </TableCell>
      </TableRow>
      {hasChildren &&
        open &&
        data.children?.map((rowData: Data) => {
          return (
            <CollapsibleRow
              key={rowData.listNum}
              data={rowData}
              child={true}
              level={level + 1}
            />
          );
        })}
    </>
  );
}
