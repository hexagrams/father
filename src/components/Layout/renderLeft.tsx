import React, { useState } from 'react';
import { Menu, MenuProps } from 'antd';
import { history } from 'umi';
import './index.less';

const { SubMenu } = Menu;

export interface MenuLeft {
  children: MenuLeft[];
  url: string;
  title: string;
  icon: string;
}

export interface MenuLeftOption {
  show: boolean;
  menuLeft: MenuLeft[];
  menuConfig?: MenuProps;
}

function renderMenu(arr: MenuLeft[], level: number) {
  let text = null;
  function renderIcon(item: MenuLeft) {
    if (level > 1) {
      return null;
    }
    if (item.icon) {
      return <i className={`iconfont ${item.icon}`} />;
    } else if (item.title) {
      text = item.title.slice(0, 1);
      return (
        <i className="title-icon">
          <span>{text}</span>
        </i>
      );
    }
  }
  return arr.map((item) => {
    if (item.children && item.children.length) {
      return (
        <SubMenu key={item.url} icon={renderIcon(item)} title={item.title}>
          {renderMenu(item.children, level + 1)}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={item.url} icon={renderIcon(item)}>
          {item.title}
        </Menu.Item>
      );
    }
  });
}

const LayoutLeft = ({
  menuLeftOption: { show = true, menuLeft = [], menuConfig = {} },
}: {
  menuLeftOption: MenuLeftOption;
}) => {
  const [inlineCollapsed, setInlineCollapsed] = useState(true);

  if (!show) {
    return null;
  }

  return (
    <div
      className="sys-layout-left-content"
      onMouseEnter={() => setInlineCollapsed(false)}
      onMouseLeave={() => setInlineCollapsed(true)}
    >
      <Menu
        style={{
          width: inlineCollapsed ? 50 : 200,
          height: '100%',
          overflow: 'hidden',
        }}
        theme={'dark'}
        inlineCollapsed={inlineCollapsed}
        mode="inline"
        onSelect={(item) => {
          history.push(item.key);
        }}
        {...menuConfig}
      >
        {renderMenu(menuLeft, 1)}
      </Menu>
    </div>
  );
};
export default LayoutLeft;
