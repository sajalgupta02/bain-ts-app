import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import GoalCard from "./GoalCard";
import "./style.css";

const CreateGoalHome: React.FC = () => {
  let navigate = useNavigate();
  // const {state} = useLocation();
  // const { goalsData } = state;

  const goToHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f4f6f9",
        height: "100%",
      }}
    >
      <Box className="goalCreationTitle">Goal Creation Options</Box>
      <Box>
        <Typography
          variant="h5"
          fontWeight={700}
          fontSize={36}
          mt={4}
          textAlign={"center"}
        >
          Hi, Rajiv
        </Typography>
        <Box sx={{ padding: "50px 400px 0 400px" }}>
          <Typography variant={"h5"} mb={3} textAlign={"left"} fontWeight={700}>
            Choose how you’d like to create a goal:
          </Typography>

          <GoalCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M25.7 9.29999L18.7 2.29999C18.612 2.20227 18.5038 2.12483 18.383 2.07303C18.2621 2.02124 18.1314 1.99631 18 1.99999H8C7.47005 2.00155 6.96224 2.21276 6.58751 2.58749C6.21277 2.96223 6.00156 3.47003 6 3.99999V28C6.00156 28.5299 6.21277 29.0377 6.58751 29.4125C6.96224 29.7872 7.47005 29.9984 8 30H24C24.53 29.9984 25.0378 29.7872 25.4125 29.4125C25.7872 29.0377 25.9984 28.5299 26 28V9.99999C26.0037 9.86854 25.9788 9.73787 25.927 9.61701C25.8752 9.49614 25.7977 9.38798 25.7 9.29999ZM18 4.39999L23.6 9.99999H18V4.39999ZM24 28H8V3.99999H16V9.99999C16.0016 10.5299 16.2128 11.0377 16.5875 11.4125C16.9622 11.7872 17.47 11.9984 18 12H24V28Z"
                  fill="#003F72"
                />
              </svg>
            }
            title="Create from Scratch"
            description="Create a goal with a blank goal form."
            color="#d0f4de"
          />

          <GoalCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M10 16C9.99832 17.1013 10.3003 18.1818 10.8726 19.1227C11.445 20.0636 12.2657 20.8286 13.2445 21.3334C14.2233 21.8383 15.3224 22.0636 16.4209 21.9845C17.5193 21.9055 18.5748 21.5251 19.4712 20.8853L24.5859 26L26 24.5859L20.885 19.4712C21.4319 18.7018 21.7894 17.8143 21.9285 16.8807C22.0676 15.9471 21.9844 14.9939 21.6856 14.0985C21.3869 13.2031 20.881 12.391 20.2091 11.728C19.5372 11.065 18.7183 10.5701 17.819 10.2833C16.9198 9.9965 15.9655 9.92604 15.0338 10.0776C14.1022 10.2292 13.2195 10.5986 12.4575 11.1557C11.6956 11.7128 11.0759 12.4419 10.6488 13.2836C10.2218 14.1254 9.9995 15.0561 10 16ZM12 16C12 15.2089 12.2346 14.4355 12.6741 13.7777C13.1137 13.1199 13.7384 12.6072 14.4693 12.3045C15.2002 12.0017 16.0044 11.9225 16.7804 12.0768C17.5563 12.2312 18.269 12.6122 18.8284 13.1716C19.3878 13.731 19.7688 14.4437 19.9231 15.2196C20.0775 15.9956 19.9983 16.7998 19.6955 17.5307C19.3928 18.2616 18.8801 18.8863 18.2223 19.3259C17.5645 19.7654 16.7911 20 16 20C14.9395 19.9988 13.9228 19.577 13.1729 18.8271C12.423 18.0772 12.0012 17.0605 12 16Z"
                  fill="#DE413C"
                />
                <path
                  d="M29 7H22.54L20.83 4.45C20.7398 4.3121 20.6167 4.19878 20.4718 4.12024C20.3269 4.04169 20.1648 4.00037 20 4H12C11.8352 4.00037 11.6731 4.04169 11.5282 4.12024C11.3833 4.19878 11.2602 4.3121 11.17 4.45L9.46 7H3C2.73504 7.00082 2.48116 7.10644 2.2938 7.2938C2.10644 7.48116 2.00082 7.73503 2 8V25C2.00082 25.265 2.10644 25.5188 2.2938 25.7062C2.48116 25.8936 2.73504 25.9992 3 26H12V24H4V9H10C10.1648 8.99963 10.3269 8.95831 10.4718 8.87976C10.6167 8.80122 10.7398 8.6879 10.83 8.55L12.54 6H19.46L21.17 8.55C21.2602 8.6879 21.3833 8.80122 21.5282 8.87976C21.6731 8.95831 21.8352 8.99963 22 9H28V21H30V8C29.9992 7.73503 29.8936 7.48116 29.7062 7.2938C29.5188 7.10644 29.265 7.00082 29 7Z"
                  fill="#DE413C"
                />
              </svg>
            }
            title="Create from Library"
            description="Choose goals from your goal library and add to your goal plan."
            color="#fde2e4"
          />

          <GoalCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M28 10H22V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H12C11.4696 4 10.9609 4.21071 10.5858 4.58579C10.2107 4.96086 10 5.46957 10 6V10H4C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12V26C2 26.5304 2.21071 27.0391 2.58579 27.4142C2.96086 27.7893 3.46957 28 4 28H28C28.5304 28 29.0391 27.7893 29.4142 27.4142C29.7893 27.0391 30 26.5304 30 26V12C30 11.4696 29.7893 10.9609 29.4142 10.5858C29.0391 10.2107 28.5304 10 28 10ZM12 6H20V10H12V6ZM4 26V12H28V26H4Z"
                  fill="#003F72"
                />
              </svg>
            }
            title="Copy from Goal Plan"
            description="Create goals based on your previous goal plan."
            color="#d0f4de"
          />
        </Box>
      </Box>

      <Box className="cancelBtnCreateGoal">
        <Button
          style={{
            border: "1px solid #003F72",
            borderRadius: "10px",
            background: "white",
            color: "#003F72",
          }}
          onClick={goToHome}
        >
          <strong>Cancel</strong>
        </Button>
      </Box>
    </Box>
  );
};

export default CreateGoalHome;
