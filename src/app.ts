export const qiankun = fetch('/api/system/config')
  .then((res) => res.json())
  .then((data) => {
    return data.data;
  });
