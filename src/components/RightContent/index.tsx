import { QuestionCircleOutlined } from '@ant-design/icons';
import Avatar from './AvatarDropdown';
import { SelectLang } from 'umi';
import { Space } from 'antd';
import React from 'react';
import styles from './index.less';

const GlobalHeaderRight: React.FC = () => {
  return (
    <Space className={styles.right}>
      <span
        className={styles.action}
        onClick={() => {
          window.open('http://www.linshenglong.cn');
        }}
      >
        <QuestionCircleOutlined />
      </span>
      <Avatar />
      <SelectLang className={styles.action} />
    </Space>
  );
};
export default GlobalHeaderRight;
