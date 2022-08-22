import { QuestionCircleOutlined } from '@ant-design/icons';
import Avatar from './AvatarDropdown';

import { Space } from 'antd';
import React from 'react';
import styles from './index.less';

const GlobalHeaderRight: React.FC = () => {
  return (
    <Space className={styles.right}>
      <span
        className={styles.action}
        onClick={() => {
          window.open('https://linshenglong.cn');
        }}
      >
        <QuestionCircleOutlined />
      </span>
      <Avatar />
    </Space>
  );
};
export default GlobalHeaderRight;
