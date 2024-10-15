import { Box } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box height={"100vh"}>
      <Box
        sx={{
          height: "100%",
          backgroundImage: `url('/images/backgrounds/404-error-idea.gif')`, // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link> */}
      </Box>
    </Box>
  );
}
