import React from 'react';
import { ProLayout } from '@ant-design/pro-components';
import { history, IRouteComponentProps } from 'umi';
import RightContent from '@/components/RightContent';
import logo from '@/static/img/liuiu6661.png';

const Layout = (props: IRouteComponentProps) => {
  return (
    <ProLayout
      title=""
      fixedHeader
      fixSiderbar
      logo={logo}
      navTheme="light"
      iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
      pure={['/login'].includes(props.location.pathname)}
      route={{
        routes: [
          {
            path: '/qian/product',
            name: '收藏',
            icon: 'icon-shoucang1',
          },
          {
            path: '/home1/overview',
            name: 'FaceBook',
            icon: 'icon-facebook',
          },
          {
            path: '/home2/search',
            name: 'Twitter',
            icon: 'icon-twitter',
          },
        ],
      }}
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            history.push(item.path || '/');
          }}
        >
          {dom}
        </a>
      )}
      rightContentRender={() => <RightContent />}
      location={{
        pathname: props.location.pathname,
      }}
    >
      {props.children}
    </ProLayout>
  );
};
export default Layout;
