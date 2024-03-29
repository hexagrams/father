declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}

declare interface Window {
  SYSTEM_CONFIG: {
    MenuRoute: import('@ant-design/pro-layout/es/typings').Route;
  };
  ace: any;
  baseConfig: {
    backURL: string;
    csrf: string;
    userInfo: any;
  };
}
