// import * as React from "react";
// import Box from "@mui/material/Box";
// import Collapse from "@mui/material/Collapse";
// import IconButton from "@mui/material/IconButton";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
//   price: number
// ) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       {
//         name,
//         calories,
//         fat,
//         carbs,
//         protein,
//         price,
//         history: [
//           {
//             name,
//             calories,
//             fat,
//             carbs,
//             protein,
//             price,
//             history: [],
//           },
//         ],
//       },
//       {
//         name,
//         calories,
//         fat,
//         carbs,
//         protein,
//         price,
//         history: [],
//       },
//     ],
//   };
// }
// type Child = {
//   child: boolean;
// };

// type Row = { row: ReturnType<typeof createData> };
// type Props = Row & Child;

// function Row(props: Props) {
//   const { row, child } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
//         <TableCell>
//           {row.history.length >= 1 && (
//             <IconButton
//               aria-label="expand row"
//               size="small"
//               onClick={() => setOpen(!open)}
//             >
//               {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//             </IconButton>
//           )}
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//         <TableCell align="right">{row.calories}</TableCell>
//         <TableCell align="right">{row.fat}</TableCell>
//         <TableCell align="right">{row.carbs}</TableCell>
//         <TableCell align="right">{row.protein}</TableCell>
//       </TableRow>
//       {row.history.length >= 1 && (
//         <TableRow>
//           <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//             <Collapse in={open} timeout="auto" unmountOnExit>
//               <Box sx={{ margin: 1 }}>
//                 {/* <Typography variant="h6" gutterBottom component="div">
//                   History
//                 </Typography> */}
//                 <Table size="small" aria-label="purchases">
//                   {/* {!child && (
//                     <TableHead>
//                       <TableRow>
//                         <TableCell>Date</TableCell>
//                         <TableCell>Customer</TableCell>
//                         <TableCell align="right">Amount</TableCell>
//                         <TableCell align="right">Total price ($)</TableCell>
//                       </TableRow>
//                     </TableHead>
//                   )} */}
//                   <TableBody>
//                     {row.history.length > 0 &&
//                       row.history.map((historyRow) => (
//                         <Row
//                           key={historyRow.name}
//                           row={historyRow}
//                           child={true}
//                         />
//                       ))}
//                   </TableBody>
//                 </Table>
//               </Box>
//             </Collapse>
//           </TableCell>
//         </TableRow>
//       )}
//     </React.Fragment>
//   );
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
//   createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
//   createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
//   createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
// ];

// const rows2 = [];

// export default function CollapsibleTable() {
//   return (
//     <TableContainer component={Paper} sx={{ overflow: "hidden" }}>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <Row key={row.name} row={row} child={false} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       {
//         name,
//         calories,
//         fat,
//         carbs,
//         protein,
//         price,
//         history: [
//           {
//             name,
//             calories,
//             fat,
//             carbs,
//             protein,
//             price,
//             history: [],
//           },
//         ],
//       },
//       {
//         name,
//         calories,
//         fat,
//         carbs,
//         protein,
//         price,
//         history: [],
//       },
//     ],
//   };
// }

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Arial, sans-serif",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
//   createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
//   createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
//   createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
// ];
const rows2 = [
  {
    listNum: "001",
    listName: "التقسيم الاداري",
    category: "جغرافي",
    addedBy: "محمد السعدي",
    status: "مفعل",
    childs: [
      {
        listNum: "002",
        listName: "قائمة البلدان",
        category: "جغرافي",
        addedBy: "محمد السعدي",
        status: "مفعل",
      },
      {
        listNum: "003",
        listName: "قائمة البلدان",
        category: "جغرافي",
        addedBy: "محمد السعدي",
        status: "مغلق",
      },
    ],
  },
  {
    listNum: "001",
    listName: "التقسيم الاداري",
    category: "جغرافي",
    addedBy: "محمد السعدي",
    status: "مفعل",
    childs: [
      {
        listNum: "002",
        listName: "قائمة البلدان",
        category: "جغرافي",
        addedBy: "محمد السعدي",
        status: "مفعل",
      },
      {
        listNum: "003",
        listName: "قائمة البلدان",
        category: "جغرافي",
        addedBy: "محمد السعدي",
        status: "مغلق",
        childs: [
          {
            listNum: "002",
            listName: "قائمة البلدان",
            category: "جغرافي",
            addedBy: "محمد السعدي",
            status: "مفعل",
          },
          {
            listNum: "003",
            listName: "قائمة البلدان",
            category: "جغرافي",
            addedBy: "محمد السعدي",
            status: "مغلق",
          },
        ],
      },
    ],
  },
  {
    listNum: "001",
    listName: "التقسيم الاداري",
    category: "جغرافي",
    addedBy: "محمد السعدي",
    status: "مفعل",
    childs: [
      {
        listNum: "002",
        listName: "قائمة البلدان",
        category: "جغرافي",
        addedBy: "محمد السعدي",
        status: "مفعل",
      },
      {
        listNum: "003",
        listName: "قائمة البلدان",
        category: "جغرافي",
        addedBy: "محمد السعدي",
        status: "مغلق",
      },
    ],
  },
];
function Row({ row }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {row.status}
        </TableCell>
        <TableCell align="right">{row.listNum}</TableCell>
        <TableCell align="right">{row.listName}</TableCell>
        <TableCell align="right">{row.category}</TableCell>
        <TableCell align="right">{row.addedBy}</TableCell>
        <TableCell>
          {row.childs?.length >= 1 && (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          )}
        </TableCell>
      </TableRow>
      {
        row.childs?.length >= 1 &&
          open &&
          row.childs?.map(
            (historyRow: { listNum: React.Key | null | undefined }) => (
              <Row key={historyRow.listNum} row={historyRow} />
            )
          )
        // <Box sx={{ display: `${open ? "none" : "tableRow"}` }}>
        //   {row.childs?.map(
        //     (historyRow: { listNum: React.Key | null | undefined }) => (
        //       <Row key={historyRow.listNum} row={historyRow} />
        //     )
        //   )}
        // </Box>
        // <TableRow>
        //   <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        //     {/* <Collapse in={open} timeout="auto" unmountOnExit> */}
        //     {/* <Box sx={{ margin: 1 }}> */}
        //     {/* <Table size="small" aria-label="purchases">
        //           <TableBody> */}
        //     <Box sx={{ display: `${open ? "none" : "block"}` }}>
        //       {row.childs?.length > 0 &&
        //         row.childs?.map(
        //           (historyRow: { listNum: React.Key | null | undefined }) => (
        //             <Row key={historyRow.listNum} row={historyRow} />
        //           )
        //         )}
        //     </Box>
        //     {/* </TableBody>
        //         </Table>
        //       </Box> */}
        //     {/* </Collapse> */}
        //   </TableCell>
        // </TableRow>
      }
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper} sx={{ overflow: "hidden" }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="right">الحالة</TableCell>
              <TableCell align="right">أضيف بواسطة</TableCell>
              <TableCell align="right">تصنيف القائمة</TableCell>
              <TableCell align="right"> اسم القائمة</TableCell>
              <TableCell>رقم القائمة</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.map((row) => (
              <Row key={row.listNum} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
