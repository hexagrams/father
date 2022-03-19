import React, { ReactChild } from 'react';
import RenderLeft, { MenuLeftOption } from './renderLeft';
import RenderHeader from './renderHeader';
import './index.less';

const Layout = ({
  children,
  menuLeftOption,
}: {
  children: ReactChild;
  menuLeftOption: MenuLeftOption;
}) => {
  return (
    <div className="sys-layout-content">
      <RenderHeader />
      <main className="sys-layout-main">
        <div className="left-menu">
          <RenderLeft menuLeftOption={menuLeftOption} />
        </div>
        <article className="right-content">{children}</article>
      </main>
    </div>
  );
};
export default Layout;
