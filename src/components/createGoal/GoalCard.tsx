import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GoalCard = ({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactElement;
  title: string;
  description: string;
  color: string;
}) => {
  const navigate = useNavigate();

  const navigateToSelectedOption = () => {
    if (title === "Create from Scratch") {
      navigate("/createGoal/createPerformanceGoal");
    } else if (title === "Create from Library") {
      navigate("/createGoal/createFromLibrary");
    } else{
      navigate("/createGoal/createFromPlan");
    }
  };

  return (
    <Card
      sx={{ borderRadius: 2, boxShadow: 1, mb: 2, cursor: "pointer" }}
      onClick={navigateToSelectedOption}
    >
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar variant="square" sx={{ bgcolor: "#EAEBEC" }}>
          {icon}
        </Avatar>
        <Box fontSize={14}>
          <Typography variant="subtitle1" fontWeight={600}>
            {title}
          </Typography>
          <Typography variant="body2" color="black">
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default GoalCard;
