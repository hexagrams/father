import { RequestConfig } from 'umi';
import Loading from '@/components/Loading';

export const request: RequestConfig = {
  errorConfig: {
    adaptor: (resData) => {
      return {
        ...resData,
        success: resData.success,
        errorMessage: resData.message,
      };
    },
  },
};

export const iceStark = () => {
  const userInfo = window?.baseConfig?.userInfo || {};
  return {
    appRouter: {
      onAppLeave: () => {
        window.ace = null;
      },
      LoadingComponent: Loading,
    },
    apps: userInfo?.apps || [],
  };
};
