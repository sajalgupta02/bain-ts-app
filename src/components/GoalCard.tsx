import { Box, Typography, Card, CardContent } from "@mui/material";
import { DUE_DATE, SMART_SCORE_TEXT } from "../reusables/textData";

interface GoalCardProps {
  score: number;
  weight: number;
  index: number;
  setGoals: React.Dispatch<
    React.SetStateAction<
      {
        score: number;
        weight: number;
      }[]
    >
  >;
  goals: {
    score: number;
    weight: number;
  }[];
}

const GoalCard = ({ score, weight, index, setGoals, goals }: GoalCardProps) => (
  <Card variant="outlined" sx={{ p: 1, borderRadius: 2, minWidth: "450px" }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M9 16.875C13.3492 16.875 16.875 13.3492 16.875 9C16.875 4.65076 13.3492 1.125 9 1.125C4.65076 1.125 1.125 4.65076 1.125 9C1.125 13.3492 4.65076 16.875 9 16.875Z"
              fill="#DE413C"
            />
          </svg>
          &nbsp;
          <span style={{ color: "#DE413C" }}>Not Published</span>
        </Typography>
        <Box display={"flex"} gap={1.5}>
          <Box sx={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M2 19.5H23V21H2V19.5ZM19.55 6.75C20.15 6.15 20.15 5.25 19.55 4.65L16.85 1.95C16.25 1.35 15.35 1.35 14.75 1.95L3.5 13.2V18H8.3L19.55 6.75ZM15.8 3L18.5 5.7L16.25 7.95L13.55 5.25L15.8 3ZM5 16.5V13.8L12.5 6.3L15.2 9L7.7 16.5H5Z"
                fill="#0064FF"
              />
            </svg>
          </Box>
          <Box sx={{cursor: 'pointer'}} onClick={() => setGoals(goals.filter((_, i) => i !== index))}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path d="M9.5 9H11V18H9.5V9ZM14 9H15.5V18H14V9Z" fill="#0064FF" />
              <path
                d="M3.5 4.5V6H5V21C5 21.3978 5.15804 21.7794 5.43934 22.0607C5.72064 22.342 6.10218 22.5 6.5 22.5H18.5C18.8978 22.5 19.2794 22.342 19.5607 22.0607C19.842 21.7794 20 21.3978 20 21V6H21.5V4.5H3.5ZM6.5 21V6H18.5V21H6.5ZM9.5 1.5H15.5V3H9.5V1.5Z"
                fill="#0064FF"
              />
            </svg>
          </Box>
        </Box>
      </Box>
      <Typography variant="h5" mt={2} fontWeight="bold">
        Goal name examples
      </Typography>
      <Typography variant="body2" mt={1} color="#858585">
        {DUE_DATE} 31 Mar 2025
      </Typography>
      <Box
        mt={1}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={"flex"}>
          <Typography color="#858585">{SMART_SCORE_TEXT}</Typography> &nbsp;
          <Typography style={{ color: score >= 8 ? "green" : "orange" }}>
            {score}/10
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M10.5 8C10.5 8.66304 10.7634 9.29893 11.2322 9.76777C11.7011 10.2366 12.337 10.5 13 10.5C13.663 10.5 14.2989 10.2366 14.7678 9.76777C15.2366 9.29893 15.5 8.66304 15.5 8C15.5 7.92237 15.482 7.84579 15.4473 7.77635L13.448 3.7781C13.4412 3.76411 13.4336 3.75049 13.4253 3.7373C13.3805 3.66477 13.3179 3.6049 13.2435 3.56337C13.1691 3.52183 13.0852 3.50002 13 3.5H9.9109C9.83541 3.29086 9.7146 3.101 9.55712 2.94403C9.39964 2.78706 9.20939 2.66686 9 2.59205V1H8V2.59205C7.79061 2.66686 7.60036 2.78706 7.44288 2.94403C7.2854 3.101 7.16459 3.29086 7.0891 3.5H4C3.90714 3.49999 3.81612 3.52584 3.73712 3.57465C3.65813 3.62346 3.59429 3.6933 3.55275 3.77635L1.55275 7.77635C1.51804 7.84579 1.49998 7.92237 1.5 8C1.5 8.66304 1.76339 9.29893 2.23223 9.76777C2.70107 10.2366 3.33696 10.5 4 10.5C4.66304 10.5 5.29893 10.2366 5.76777 9.76777C6.23661 9.29893 6.5 8.66304 6.5 8C6.50002 7.92237 6.48196 7.84579 6.44725 7.77635L4.8091 4.5H7.0891C7.1646 4.70911 7.28542 4.89893 7.4429 5.05586C7.60038 5.21279 7.79062 5.33294 8 5.4077V14H3.5V15H13.5V14H9V5.40795C9.20939 5.33314 9.39964 5.21294 9.55712 5.05597C9.7146 4.899 9.83541 4.70914 9.9109 4.5H12.1909L10.5527 7.77635C10.518 7.84579 10.5 7.92237 10.5 8ZM4 9.5C3.69087 9.49894 3.38963 9.40226 3.13762 9.22322C2.8856 9.04419 2.69515 8.79156 2.5924 8.5H5.4074C5.30467 8.79154 5.11426 9.04415 4.86228 9.22318C4.6103 9.40222 4.3091 9.49891 4 9.5ZM5.19105 7.5H2.80895L4 5.11815L5.19105 7.5ZM8.5 4.5C8.40111 4.5 8.30444 4.47068 8.22221 4.41573C8.13999 4.36079 8.0759 4.2827 8.03806 4.19134C8.00022 4.09998 7.99031 3.99945 8.00961 3.90245C8.0289 3.80546 8.07652 3.71637 8.14645 3.64645C8.21637 3.57652 8.30546 3.5289 8.40245 3.50961C8.49945 3.49031 8.59998 3.50022 8.69134 3.53806C8.7827 3.5759 8.86079 3.63999 8.91574 3.72221C8.97068 3.80444 9 3.90111 9 4C8.99988 4.13257 8.94716 4.25968 8.85342 4.35342C8.75968 4.44716 8.63257 4.49988 8.5 4.5ZM13 9.5C12.6909 9.49894 12.3896 9.40226 12.1376 9.22322C11.8856 9.04419 11.6952 8.79156 11.5924 8.5H14.4074C14.3047 8.79154 14.1143 9.04415 13.8623 9.22318C13.6103 9.40222 13.3091 9.49891 13 9.5ZM13 5.11815L14.191 7.5H11.809L13 5.11815Z"
              fill="#2B5A86"
            />
          </svg>
          {weight}%
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default GoalCard;
