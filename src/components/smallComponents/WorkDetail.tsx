import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box } from "@mui/material";

interface WorkDetailProps {
  detail: string;
}

const WorkDetail: React.FC<WorkDetailProps> = ({ detail }) => {
  return (
    <Box sx={{ marginBottom: "15px", marginTop: "8px" }}>
      <ChevronRightIcon
        color="primary"
        sx={{ marginRight: "5px", fontSize: "30px" }}
      />
      {detail}
    </Box>
  );
};

export default WorkDetail;
