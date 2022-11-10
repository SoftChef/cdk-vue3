const $_stubConfig = () => {
  return {
    context: '$_stubContext',
    unpack() {
      return JSON.parse(new TextDecoder().decode(
        Uint8Array.from(
          atob(this.context),
          c => c.charCodeAt(0)
        )
      ));
    },
    all() {
      return this.unpack()
    },
    get(key) {
      const keys = key.split('.');
      let result;
      for (let key of keys) {
        if (result === undefined) {
          result = this.unpack()[key];
        } else if (result[key] !== undefined) {
          result = result[key];
        }
      }
      return result;
    },
    has(key) {
      return this.get(key);
    }
  }
};

window.VueDeploymentConfig = {
  install(app) {
    app.config.globalProperties.$config = $_stubConfig();
    app.provide('$config', $_stubConfig());
  }
};