import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import React from "react";

type Props = {
  icon?: React.ReactNode;
  title: string;
  sidetext?: string;
  subtitle?: string;
};

const BoxHeader = ({ icon, title, subtitle, sidetext }: Props) => {
  const { palette } = useTheme();

  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
        {sidetext}
      </Typography>
    </FlexBetween>
  );
};
export default BoxHeader;