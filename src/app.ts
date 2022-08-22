export const iceStark = fetch('/api/system/config')
  .then(res => res.json())
  .then(({ data }) => {
    return {
      apps: data.apps,
    };
  });
