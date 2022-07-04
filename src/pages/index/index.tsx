import React, { useState, CSSProperties } from 'react';
import {
  AlipayOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoOutlined,
  UserOutlined,
  WeiboOutlined,
} from '@ant-design/icons';
import {
  LoginFormPage,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { Button, Divider, message, Space, Tabs } from 'antd';
import logo from '@/static/img/liuiu6661.png';
import { history } from 'umi';

type LoginType = 'phone' | 'account';

// const iconStyles: CSSProperties = {
//   color: 'rgba(0, 0, 0, 0.2)',
//   fontSize: '18px',
//   verticalAlign: 'middle',
//   cursor: 'pointer',
// };

export default () => {
  const [loginType, setLoginType] = useState<LoginType>('account');
  return (
    <div style={{ backgroundColor: 'white', height: 'calc(100vh - 48px)', margin: -24 }}>
      <LoginFormPage
        onFinish={async (values) => {
          history.push('/home');
          console.log(values);
        }}
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        logo={logo}
        title="Liuiu666"
        subTitle="越努力越幸运！"
        // activityConfig={{
        //   style: {
        //     boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
        //     color: '#fff',
        //     borderRadius: 8,
        //     backgroundColor: '#1677FF',
        //   },
        //   title: '活动标题，可配置图片',
        //   subTitle: '活动介绍说明文字',
        //   action: (
        //     <Button
        //       size="large"
        //       style={{
        //         borderRadius: 20,
        //         background: '#fff',
        //         color: '#1677FF',
        //         width: 120,
        //       }}
        //     >
        //       去看看
        //     </Button>
        //   ),
        // }}
        // actions={
        //   <div
        //     style={{
        //       display: 'flex',
        //       justifyContent: 'center',
        //       alignItems: 'center',
        //       flexDirection: 'column',
        //     }}
        //   >
        //     <Divider plain>
        //       <span style={{ color: '#CCC', fontWeight: 'normal', fontSize: 14 }}>
        //         其他登录方式
        //       </span>
        //     </Divider>
        //     <Space align="center" size={24}>
        //       <div
        //         style={{
        //           display: 'flex',
        //           justifyContent: 'center',
        //           alignItems: 'center',
        //           flexDirection: 'column',
        //           height: 40,
        //           width: 40,
        //           border: '1px solid #D4D8DD',
        //           borderRadius: '50%',
        //         }}
        //       >
        //         <AlipayOutlined style={{ ...iconStyles, color: '#1677FF' }} />
        //       </div>
        //       <div
        //         style={{
        //           display: 'flex',
        //           justifyContent: 'center',
        //           alignItems: 'center',
        //           flexDirection: 'column',
        //           height: 40,
        //           width: 40,
        //           border: '1px solid #D4D8DD',
        //           borderRadius: '50%',
        //         }}
        //       >
        //         <TaobaoOutlined style={{ ...iconStyles, color: '#FF6A10' }} />
        //       </div>
        //       <div
        //         style={{
        //           display: 'flex',
        //           justifyContent: 'center',
        //           alignItems: 'center',
        //           flexDirection: 'column',
        //           height: 40,
        //           width: 40,
        //           border: '1px solid #D4D8DD',
        //           borderRadius: '50%',
        //         }}
        //       >
        //         <WeiboOutlined style={{ ...iconStyles, color: '#333333' }} />
        //       </div>
        //     </Space>
        //   </div>
        // }
      >
        <Tabs activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey as LoginType)}>
          <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
          <Tabs.TabPane key={'phone'} tab={'手机号登录'} />
        </Tabs>
        {loginType === 'account' && (
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户名: admin'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'密码: admin@123'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
          </>
        )}
        {loginType === 'phone' && (
          <>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: <MobileOutlined className={'prefixIcon'} />,
              }}
              name="mobile"
              placeholder={'手机号'}
              rules={[
                {
                  required: true,
                  message: '请输入手机号！',
                },
                {
                  pattern: /^1\d{10}$/,
                  message: '手机号格式错误！',
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              captchaProps={{
                size: 'large',
              }}
              placeholder={'请输入验证码'}
              captchaTextRender={(timing: number, count: number) => {
                if (timing) {
                  return `${count} ${'获取验证码'}`;
                }
                return '获取验证码';
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: '请输入验证码！',
                },
              ]}
              onGetCaptcha={async () => {
                message.success('获取验证码成功！验证码为：1234');
              }}
            />
          </>
        )}
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginFormPage>
    </div>
  );
};
