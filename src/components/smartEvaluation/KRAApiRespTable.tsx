import { AutoAwesome } from "@mui/icons-material";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function createData(
  id: number,
  goalName: string,
  measureOfSuccess: string,
  smartScore: string,
  weight: string,
  isNew: boolean
) {
  return { id, goalName, measureOfSuccess, smartScore, weight, isNew };
}

const rows = [
  createData(
    1,
    "Goal Name Example",
    "Example measure of success",
    "8/10",
    "5",
    false
  ),
  createData(
    2,
    "Goal Name Example",
    "Example measure of success",
    "8/10",
    "5",
    false
  ),
  createData(
    3,
    "Goal Name Example",
    "Example measure of success",
    "8/10",
    "5",
    false
  ),
  createData(
    4,
    "Goal Name Example",
    "Example measure of success",
    "8/10",
    "-",
    true
  ),
  createData(
    5,
    "Goal Name Example",
    "Example measure of success",
    "8/10",
    "-",
    true
  ),
];

export default function KRAApiRespTable({ score }: { score: number }) {
  return (
    <>
      <Box
        sx={{
          minWidth: 800,
          background: "white",
          fontSize: "24px",
          borderRadius: "10px",
          color: "#5F1EA3",
          border: "1px solid #5F1EA3",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <Typography fontWeight={900}>
          <AutoAwesome fontSize="medium" /> &nbsp; KRA Assistant
        </Typography>
        <Box display={"flex"}>
          <Typography fontWeight={700}>Overall SMART Score: &nbsp;</Typography>
          <Typography
            fontWeight={700}
            style={{ color: score >= 8 ? "green" : "orange" }}
          >
            {score}/10
          </Typography>
        </Box>
        <Typography fontWeight={500}>
          The score is based on lorem ipsum dolor sit amet consectetur
          adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
          placerat. Please see the detailed suggestions below and make edits.
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ background: "#eee9f3" }}>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                #
              </TableCell>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                Goal Name
              </TableCell>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                Measure of Success
              </TableCell>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                SMART Score
              </TableCell>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                Weight
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={row.isNew ? { background: "#f3edff" } : {}}
              >
                <TableCell
                  sx={row.isNew ? { color: "#003f72" } : {}}
                  component="th"
                  scope="row"
                >
                  {row.id}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 700, color: row.isNew ? "#003f72" : "" }}
                >
                  {row.goalName}
                </TableCell>
                <TableCell sx={row.isNew ? { color: "#003f72" } : {}}>
                  {row.measureOfSuccess}
                </TableCell>
                <TableCell sx={row.isNew ? { color: "#003f72" } : {}}>
                  {row.smartScore}
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      background: "#eee9f3",
                      padding: "7px 10px",
                      borderRadius: "10px",
                      minWidth: "50px",
                    }}
                  >
                    {row.weight}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
