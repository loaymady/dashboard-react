import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./data";

const Invoices = () => {
  return (
    <div>
      <Box>
        <Box sx={{ height: 600, mx: "auto" }}>
          <DataGrid
            sx={{ maxWidth: "100% !important" }}
            rows={rows}
            columns={columns}
            checkboxSelection
          />
        </Box>
      </Box>
    </div>
  );
};

export default Invoices;
