import { Spin } from 'antd';
import './index.less';

export default () => {
  return (
    <div className="home-loading">
      <Spin size="large" />
    </div>
  );
};
