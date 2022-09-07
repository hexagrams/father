import Loading from '@/components/Loading';

export const iceStark = fetch('/api/system/config')
  .then((res) => res.json())
  .then(({ data }) => {
    if (window.SYSTEM_CONFIG) {
      window.SYSTEM_CONFIG.MenuRoute = data.menuRoute;
    } else {
      window.SYSTEM_CONFIG = {
        MenuRoute: data.menuRoute,
      };
    }
    return {
      appRouter: {
        onAppLeave: () => {
          window.ace = null;
        },
        LoadingComponent: Loading,
      },
      apps: data.apps,
    };
  });
