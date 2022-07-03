import React from 'react';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { history, IRouteComponentProps } from 'umi';
import RightContent from '@/components/RightContent';

const Layout = (props: IRouteComponentProps) => {
  return (
    <ProLayout
      title=""
      logo="https://s1.ax1x.com/2022/07/03/jGJ4bD.png"
      navTheme="light"
      iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
      pure={['/home/aaa'].includes(props.location.pathname)}
      route={{
        routes: [
          {
            path: '/home',
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
      menuItemRender={(item: { path: string }, dom: React.FC) => (
        <a
          onClick={() => {
            history.push(item.path);
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
      <PageContainer breadcrumbRender={false}>{props.children}</PageContainer>
    </ProLayout>
  );
};
export default Layout;
