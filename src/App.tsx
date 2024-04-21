import { Box } from "@mui/material";
import "./App.css";
import CollapsibleTable from "./CollapsibleTable";
// import EnhancedTable from "./SortTable";
import { data } from "./data";

function App() {
  return (
    <Box>
      <CollapsibleTable data={data} />
      {/* <EnhancedTable /> */}
    </Box>
  );
}

export default App;
