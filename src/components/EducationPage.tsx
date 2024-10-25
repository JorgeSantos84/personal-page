import CenterBox from "./smallComponents/CenterBox";
import Page from "./smallComponents/Page";
import EducationInformation from "../constants/EducationInformation";
import { WorkDetails } from "../types/workDetails";
import { useTheme } from "../context/ThemeContext";
import WorkItemBox from "./smallComponents/WorkItemBox";
import { useState } from "react";

const EducationPage = () => {
  const { language } = useTheme();
  const educationInformationTranslated: WorkDetails[] =
    EducationInformation.get(language) || [];

  const [showDetailsWorkItem, setShowDetailsWorkItem] = useState<number | null>(
    null,
  );

  const showWorkItemBox = (showBoxNumber: number | null) => {
    setShowDetailsWorkItem(showBoxNumber);
  };

  return (
    <Page>
      {educationInformationTranslated.map((item, index) => (
        <CenterBox key={index}>
          <WorkItemBox
            workItensTranslated={item}
            numberWorkItem={index}
            showDetailsItemBox={showWorkItemBox}
            itemBoxNumberShowDetails={showDetailsWorkItem}
          />
        </CenterBox>
      ))}
    </Page>
  );
};
export default EducationPage;
