import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

type Props = {};

const gridTemplateLargeScreens = `
"a b c"
"a b c"
"a b c"
"a b f"
"d e f"
"d e f"
"d h i"
"g h i"
"g h j"
"g h j"
`;
const gridTemplateSmallScreens = `
"a"
"a"
"a"
"b"
"b"
"b"
"c"
"c"
"c"
"d"
"d"
"d"
"e"
"e"
"f"
"f"
"f"
"g"
"g"
"g"
"h"
"h"
"h"
"h"
"i"
"i"
"j"
"j"
`;

const Dashboard = (props: Props) => {
  const { palette } = useTheme();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

  // const [selected, setSelected] = useState("dashboard");

  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens ? {
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
        gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
        gridTemplateAreas: gridTemplateLargeScreens,
        } : {
          gridTemplateAreas: gridTemplateSmallScreens,
          gridAutoColumns: "1fr",
          gridAutoRows: "80px",
      }}
    >
      <Box gridArea="a" bgcolor="#fff">
        "a"
      </Box>
      <Box gridArea="b" bgcolor="#fff">
        "b"
      </Box>
      <Box gridArea="c" bgcolor="#fff">
        "c"
      </Box>
      <Box gridArea="d" bgcolor="#fff">
        "d"
      </Box>
      <Box gridArea="e" bgcolor="#fff">
        "e"
      </Box>
      <Box gridArea="f" bgcolor="#fff">
        "f"
      </Box>
      <Box gridArea="g" bgcolor="#fff">
        "g"
      </Box>
      <Box gridArea="h" bgcolor="#fff">
        "h"
      </Box>
      <Box gridArea="i" bgcolor="#fff">
        "i"
      </Box>
      <Box gridArea="j" bgcolor="#fff">
        "j"
      </Box>
    </Box>
  );
};

export default Dashboard;
