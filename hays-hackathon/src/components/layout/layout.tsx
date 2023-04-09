import React, { ReactNode } from "react";
import Header from "./header";

export interface ILayoutProps {
  children?: ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({
  children,
  ...props
}) => {
  return (
    <>
      <Header />
      <div {...props}> {children} </div>
    </>
  );
};
export default Layout;
