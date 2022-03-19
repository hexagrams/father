import React from 'react';
import './index.less';

const RenDerHeader = ({ show = true }: { show?: boolean }) => {
  if (!show) {
    return null;
  }
  return <div className="sys-layout-header-content" />;
};

export default RenDerHeader;
