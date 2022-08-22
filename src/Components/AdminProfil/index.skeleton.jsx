import { Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export const AdminProfilSkeletonInput = () => (
  <Skeleton
    sx={{ backgroundColor: "#f7f7f7" }}
    animation="wave"
    width="100%!important"
    height="70px"
  />
);
export const AdminProfilSkeletonCard = () => (
  <Stack direction="row">
    <Skeleton
      sx={{ backgroundColor: "#f7f7f7" }}
      animation="wave"
      width="120px"
      height="120px"
      variant="circular"
    />
    <Stack sx={{ ml: 3, width: "70%" }}>
      <Skeleton
        sx={{ backgroundColor: "#f7f7f7" }}
        animation="wave"
        width="70%"
        height="40px"
      />
      <Skeleton
        sx={{ backgroundColor: "#f7f7f7" }}
        animation="wave"
        width="100%"
        height="60px"
      />
      <Skeleton
        sx={{ backgroundColor: "#f7f7f7" }}
        animation="wave"
        width="50%"
        height="30px"
      />
    </Stack>
  </Stack>
);
