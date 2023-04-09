import React, { ReactNode } from "react";
import Header from "./header";

interface Props {
  children?: ReactNode;
}
const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <Header />
      <div {...props}> {children} </div>
    </>
  );
};

export default Layout;
