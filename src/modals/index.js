let modals = require.context("./", false, /\.vue/);
let results = [];
modals
  .keys()
  .map(modals)
  .forEach((item /* , i */) => {
    let component = item.default || item;
    results.push(component);
  });
export default results;
