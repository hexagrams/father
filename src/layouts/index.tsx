import { IRouteComponentProps } from 'umi';
import './index.less';

const Layout = (props: IRouteComponentProps) => {
  return <div className="father-page">{props.children}</div>;
};
export default Layout;
