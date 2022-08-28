import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { ProLayout } from '@ant-design/pro-components';
import { history, IRouteComponentProps } from 'umi';
import RightContent from '@/components/RightContent';
import logo from '@/static/img/liuiu6661.png';

const Layout = (props: IRouteComponentProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ProLayout
      title=""
      fixedHeader
      fixSiderbar
      logo={logo}
      navTheme="light"
      iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
      pure={['/login'].includes(props.location.pathname)}
      collapsed={collapsed}
      onCollapse={setCollapsed}
      route={window.SYSTEM_CONFIG.MenuRoute}
      collapsedButtonRender={false}
      headerContentRender={() => {
        return (
          <div
            onClick={() => setCollapsed(!collapsed)}
            style={{
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        );
      }}
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            history.push(item.path || '/');
          }}
        >
          <>{dom}</>
        </a>
      )}
      rightContentRender={() => <RightContent />}
      location={{
        pathname: props.location.pathname,
      }}
    >
      <div className="father-page-content">{props.children}</div>
    </ProLayout>
  );
};
export default Layout;
