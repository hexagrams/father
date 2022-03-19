import React from 'react';
import Layout from '@/components/Layout';
import NotFound from '@/components/NotFound';
import { AppRouter, AppRoute } from '@ice/stark';
import PageLoading from '@/components/PageLoading';

class Layouts extends React.Component {
  handleRouteChange() {}

  RenderAppItem() {
    const { productList = {} } = window?.SYSTEM_CONFIG || {};
    return Object.keys(productList).map((productCode) => {
      const item = productList[productCode];
      return (
        <AppRoute
          key={productCode}
          prefetch
          rootId="sub-root"
          hashType="hashbang"
          {...item?.appConfig}
        />
      );
    });
  }

  render() {
    const { routerConfig } = window?.SYSTEM_CONFIG || {};

    return (
      <div className="father-root">
        <Layout menuLeftOption={routerConfig?.menuLeftOption}>
          <AppRouter
            NotFoundComponent={NotFound}
            LoadingComponent={PageLoading}
            onRouteChange={this.handleRouteChange}
            onAppEnter={(appConfig) => {
              // 按需记录全局状态
              // this._ace = window.ace;
            }}
            onAppLeave={(appConfig) => {
              // 按需恢复全局状态
              // window.ace = this._ace;
            }}
          >
            {this.RenderAppItem()}
          </AppRouter>
        </Layout>
      </div>
    );
  }
}

export default Layouts;
