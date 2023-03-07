import { IRouteComponentProps } from 'umi';

const Layout = (props: IRouteComponentProps) => {
  return <div className="father-page-content">{props.children}</div>;
};
export default Layout;
