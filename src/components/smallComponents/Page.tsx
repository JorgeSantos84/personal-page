import { ReactNode } from "react";
import ScrollTopButton from "./ScrollTopButton";

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="page">
      {children}
      <ScrollTopButton></ScrollTopButton>
    </div>
  );
};

export default Page;
