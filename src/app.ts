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
      apps: data.apps,
    };
  });
