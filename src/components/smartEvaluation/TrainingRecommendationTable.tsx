import { AutoAwesome } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
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
  academy: string,
  programCategory: string,
  programName: string,
  targetGroup: string,
  institute: string,
  batch: string,
  moduleName: string,
  year: string,
  month: string,
  fromDate: string,
  toDate: string,
  venue: string,
  mode: string,
  spoc: string
) {
  return {
    academy,
    programCategory,
    programName,
    targetGroup,
    institute,
    batch,
    moduleName,
    year,
    month,
    fromDate,
    toDate,
    venue,
    mode,
    spoc,
  };
}

const rows = [
  createData(
    "L&OD",
    "DEI",
    "Winspire - Building Growth Mindset",
    "S&E Cadre",
    "Breath Beings Pvt Ltd",
    "Batch 10",
    "BGM",
    "2025",
    "Aug",
    "TBD",
    "TBD",
    "LDA",
    "In-Person",
    "Minakshi Padharia"
  ),
  createData(
    "L&OD",
    "DEI",
    "Winspire - Building Growth Mindset",
    "S&E Cadre",
    "Breath Beings Pvt Ltd",
    "Batch 10",
    "BGM",
    "2025",
    "Aug",
    "TBD",
    "TBD",
    "LDA",
    "In-Person",
    "Minakshi Padharia"
  ),
];

export default function TrainingRecommendationTable() {
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

        <Box fontWeight={500}>
          <Typography>
            Based on your KRAs of FY2025 - 26, the following trainings are
            recommended, please talk to your IS about signing up for the
            following trainings
          </Typography>
          <Box>
            <List
              sx={{
                bgcolor: "background.paper",
                paddingTop: "0",
                paddingBottom: "0",
                width: "100%",
                maxWidth: 1200,
              }}
            >
              <ListItem>
                <ListItemAvatar sx={{ minWidth: "30px" }}>#</ListItemAvatar>
                <ListItemText
                  primary="Training Program Name"
                  secondary="This training helps build essential skills for xxx KRA. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat."
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar sx={{ minWidth: "30px" }}>#</ListItemAvatar>
                <ListItemText
                  primary="Training Program Name"
                  secondary="This training helps build essential skills for xxx KRA. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat."
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar sx={{ minWidth: "30px" }}>#</ListItemAvatar>
                <ListItemText
                  primary="Training Program Name"
                  secondary="This training helps build essential skills for xxx KRA. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat."
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar sx={{ minWidth: "30px" }}>#</ListItemAvatar>
                <ListItemText
                  primary="Training Program Name"
                  secondary="This training helps build essential skills for xxx KRA. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat."
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar sx={{ minWidth: "30px" }}>#</ListItemAvatar>
                <ListItemText
                  primary="Training Program Name"
                  secondary="This training helps build essential skills for xxx KRA. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat."
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ background: "#eee9f3" }}>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                Academy
              </TableCell>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                Program Category
              </TableCell>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                Name
              </TableCell>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                Target Group
              </TableCell>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                Institute/ Facility
              </TableCell>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                Batch No.
              </TableCell>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                Module Name
              </TableCell>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                Year
              </TableCell>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                Month
              </TableCell>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                From Date
              </TableCell>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                To Date
              </TableCell>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                Venue
              </TableCell>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                Mode
              </TableCell>
              <TableCell sx={{ color: "#003F72", fontWeight: 700 }}>
                SPOC
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow
                key={idx}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.academy}</TableCell>
                <TableCell>{row.programCategory}</TableCell>
                <TableCell>{row.programName}</TableCell>
                <TableCell>{row.targetGroup}</TableCell>
                <TableCell>{row.institute}</TableCell>
                <TableCell>{row.batch}</TableCell>
                <TableCell>{row.moduleName}</TableCell>
                <TableCell>{row.year}</TableCell>
                <TableCell>{row.month}</TableCell>
                <TableCell>{row.fromDate}</TableCell>
                <TableCell>{row.toDate}</TableCell>
                <TableCell>{row.venue}</TableCell>
                <TableCell>{row.mode}</TableCell>
                <TableCell>{row.spoc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
