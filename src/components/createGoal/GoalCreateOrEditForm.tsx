import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  AutoAwesome as AutoAwesomeIcon,
} from "@mui/icons-material";
import { format, parse } from "date-fns";

type formProps = {
  category: string;
  goalName: string;
  measureOfSuccess: string;
  weight: number;
  startDate: string;
  endDate: string;
  target: string;
};

type milestoneProps = {
  id: string;
  milestone: string;
  plannedDate: string;
  achievementDate: string;
};

type GoalProps = {
  formData: formProps;
  setFormData: React.Dispatch<React.SetStateAction<formProps>>;
  milestones: Array<milestoneProps>;
  setMilestones: React.Dispatch<React.SetStateAction<milestoneProps[]>>;
  errors: Record<string, string>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  categories: string[];
  evaluateBtnClicked: boolean;
  setEvaluateBtnClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function GoalCreateOrEditForm({
  formData,
  setFormData,
  milestones,
  setMilestones,
  errors,
  setErrors,
  categories,
  evaluateBtnClicked,
  setEvaluateBtnClicked,
}: GoalProps) {
  // Date formatting utilities
  const parseDisplayDate = (dateStr: string) => {
    return parse(dateStr, "d MMM yyyy", new Date());
  };

  const formatForInput = (dateStr: string) => {
    return format(parseDisplayDate(dateStr), "yyyy-MM-dd");
  };

  // Milestone handlers
  const handleAddMilestone = () => {
    setMilestones([
      ...milestones,
      {
        id: Date.now().toString(),
        milestone: "",
        plannedDate: "",
        achievementDate: "",
      },
    ]);
  };

  const handleDeleteMilestone = (id: string) => {
    setMilestones(milestones.filter((m) => m.id !== id));
  };

  const handleMilestoneChange = (id: string, field: string, value: string) => {
    setMilestones(
      milestones.map((m) => (m.id === id ? { ...m, [field]: value } : m))
    );
  };

  let score = 7;

  return (
    <>
      {evaluateBtnClicked && (
        <Box
          sx={{
            maxWidth: 800,
            margin: "20px auto",
            p: 3,
            background: "white",
            fontSize: "24px",
            borderRadius: "10px",
            color: "#5F1EA3",
          }}
        >
          <Typography fontWeight={900}>
            <AutoAwesomeIcon fontSize="medium" /> &nbsp; KRA Assistant
          </Typography>
          <Box display={"flex"}>
            <Typography fontWeight={700}>
              Overall SMART Score: &nbsp;
            </Typography>
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
      )}
      <Box
        sx={{ maxWidth: 800, margin: "20px auto", p: 3, background: "white" }}
      >
        <Box>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
            Category *
          </Typography>
          <TextField
            select
            fullWidth
            variant="outlined"
            size="small"
            sx={{ mb: 3 }}
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            {categories.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
            Goal Name *
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Please input goal name"
            value={formData.goalName}
            onChange={(e) =>
              setFormData({ ...formData, goalName: e.target.value })
            }
            error={!!errors.goalName}
            helperText={errors.goalName}
          />
          {evaluateBtnClicked && (
            <Box
              sx={{
                background: "white",
                fontSize: "24px",
                color: "#5F1EA3",
                marginTop: "0",
                borderTop: "none",
                padding: "10px",
                backgroundColor: "#F3EDFF",
              }}
            >
              <Typography fontWeight={900}>
                <AutoAwesomeIcon fontSize="small" /> &nbsp; KRA Assistant
              </Typography>
              <Typography fontWeight={500}>
                The score is based on lorem ipsum dolor sit amet consectetur
                adipiscing elit. Quisque faucibus ex sapien vitae pellentesque
                sem placerat. Please see the detailed suggestions below and make
                edits.
              </Typography>
              <Box display={"flex"} gap={2} justifyContent={"flex-end"}>
                <Button style={{ borderRadius: "20px" }} variant="contained">
                  Accept Suggestion
                </Button>
                <Button style={{ borderRadius: "20px" }} variant="outlined">
                  Cancel
                </Button>
              </Box>
            </Box>
          )}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 3, display: "flex", justifyContent: "flex-end" }}
          >
            {500 - formData.goalName.length} characters left
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
            Measure of Success
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Please input measure of success"
            value={formData.measureOfSuccess}
            onChange={(e) =>
              setFormData({ ...formData, measureOfSuccess: e.target.value })
            }
            error={!!errors.measureOfSuccess}
            helperText={errors.measureOfSuccess}
          />
          {evaluateBtnClicked && (
            <Box
              sx={{
                background: "white",
                fontSize: "24px",
                color: "#5F1EA3",
                marginTop: "0",
                borderTop: "none",
                padding: "10px",
                backgroundColor: "#F3EDFF",
              }}
            >
              <Typography fontWeight={900}>
                <AutoAwesomeIcon fontSize="small" /> &nbsp; KRA Assistant
              </Typography>
              <Typography fontWeight={500}>
                The score is based on lorem ipsum dolor sit amet consectetur
                adipiscing elit. Quisque faucibus ex sapien vitae pellentesque
                sem placerat. Please see the detailed suggestions below and make
                edits.
              </Typography>
              <Box display={"flex"} gap={2} justifyContent={"flex-end"}>
                <Button style={{ borderRadius: "20px" }} variant="contained">
                  Accept Suggestion
                </Button>
                <Button style={{ borderRadius: "20px" }} variant="outlined">
                  Cancel
                </Button>
              </Box>
            </Box>
          )}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 3, display: "flex", justifyContent: "flex-end" }}
          >
            {500 - formData.measureOfSuccess.length} characters left
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
            Weight *
          </Typography>
          <TextField
            fullWidth
            type="number"
            variant="outlined"
            size="small"
            value={formData.weight}
            onChange={(e) =>
              setFormData({ ...formData, weight: Number(e.target.value) })
            }
            inputProps={{
              step: "0.1",
              min: 5,
              max: 25,
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
            error={!!errors.weight}
            helperText={errors.weight}
            sx={{ mb: 3 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 3,
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
              Start Date *
            </Typography>
            <TextField
              type="date"
              variant="outlined"
              size="small"
              value={formatForInput(formData.startDate)}
              onChange={(e) => {
                const date = e.target.value
                  ? format(new Date(e.target.value), "d MMM yyyy")
                  : "";
                setFormData({ ...formData, startDate: date });
              }}
              error={!!errors.startDate}
              helperText={errors.startDate}
              sx={{ width: 350 }}
            />
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
              End Date *
            </Typography>
            <TextField
              type="date"
              variant="outlined"
              size="small"
              value={formatForInput(formData.endDate)}
              onChange={(e) => {
                const date = e.target.value
                  ? format(new Date(e.target.value), "d MMM yyyy")
                  : "";
                setFormData({ ...formData, endDate: date });
              }}
              error={!!errors.endDate}
              helperText={errors.endDate}
              sx={{ width: 350 }}
            />
          </Box>
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
            Target
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder="Please input target"
            value={formData.target}
            onChange={(e) =>
              setFormData({ ...formData, target: e.target.value })
            }
            sx={{ mb: 1 }}
            error={!!errors.target}
            helperText={errors.target}
          />
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 3, display: "flex", justifyContent: "flex-end" }}
          >
            {500 - formData.target.length} characters left
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
            Milestones
          </Typography>
          <TableContainer component={Paper} sx={{ mb: 2 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Milestone</TableCell>
                  <TableCell>Milestone Planned Date</TableCell>
                  <TableCell>Milestone Achievement Date</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {milestones.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      No Data
                    </TableCell>
                  </TableRow>
                ) : (
                  milestones.map((milestone) => (
                    <TableRow key={milestone.id}>
                      <TableCell>
                        <TextField
                          size="small"
                          fullWidth
                          value={milestone.milestone}
                          onChange={(e) =>
                            handleMilestoneChange(
                              milestone.id,
                              "milestone",
                              e.target.value
                            )
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          type="date"
                          size="small"
                          value={
                            milestone.plannedDate
                              ? formatForInput(milestone.plannedDate)
                              : ""
                          }
                          onChange={(e) => {
                            const date = e.target.value
                              ? format(new Date(e.target.value), "d MMM yyyy")
                              : "";
                            handleMilestoneChange(
                              milestone.id,
                              "plannedDate",
                              date
                            );
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          type="date"
                          size="small"
                          value={
                            milestone.achievementDate
                              ? formatForInput(milestone.achievementDate)
                              : ""
                          }
                          onChange={(e) => {
                            const date = e.target.value
                              ? format(new Date(e.target.value), "d MMM yyyy")
                              : "";
                            handleMilestoneChange(
                              milestone.id,
                              "achievementDate",
                              date
                            );
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => handleDeleteMilestone(milestone.id)}
                        >
                          <DeleteIcon color="error" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Button variant="outlined" onClick={handleAddMilestone}>
            <AddIcon /> Add Row
          </Button>
        </Box>
      </Box>
    </>
  );
}
