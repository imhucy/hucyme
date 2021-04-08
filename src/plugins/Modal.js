// import modals from 'modal'
// import store from 'store/index'
// import router from 'router/index'
function install(Vue, { store, router, modals }) {
  // 期望可以这样使用
  // this.$modal.open('SelectMember').then(members => {
  //   // 确认选择
  // }).catch(() => {
  //   // 取消选择
  // })
  let dialogs = {};
  let i = 0;
  let l = modals.length;
  for (; i < l; i += 1) {
    let modal = modals[i];
    dialogs[modal.name] = Vue.extend(modal);
  }
  function getDialog(name) {
    let dialog = dialogs[name];
    if (dialog) {
      return dialog;
    } else {
      throw new Error(
        '[APP ERROR] Your modal name "' +
          name +
          "\" is doesn't register.Please check your modal name."
      );
    }
  }
  const modal = (name, options = {}) => {
    let Ctor = getDialog(name);
    options.store = store;
    options.router = router;
    let modal = new Ctor(options).$mount();
    document.body.appendChild(modal.$el);
    let promise = new Promise((resolve, reject) => {
      modal.$once("confirm", (val) => {
        modal.$off("cancel");
        // modal.$destroy()
        // modal.$el.parentNode.removeChild(this.$el)
        resolve(val);
      });
      modal.$once("cancel", (val) => {
        modal.$off("confirm");
        // modal.$destroy()
        // modal.$el.parentNode.removeChild(this.$el)
        reject(val);
      });
    });
    return promise;
  };
  Vue.prototype.$modal = modal;
}
export default {
  install,
};
