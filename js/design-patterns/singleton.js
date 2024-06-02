// function based singleton using closures
const Singleton = (function () {
    let instance;
    function createNewInstance() {
        const object = new Object('Instance');
        return object;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createNewInstance();
            }
            return instance;
        },
    };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2);

// class based Singleton Pattern - Configuration Sharing
class ConfigurationManager {
    constructor() {
        if (ConfigurationManager.instance) {
            return ConfigurationManager.instance;
        }
        this.config = {};
        ConfigurationManager.instance = this;
    }

    setConfig(key, value) {
        this.config[key] = value;
    }

    getConfig(key) {
        return this.config[key];
    }
}

const config1 = new ConfigurationManager();
const config2 = new ConfigurationManager();
config1.setConfig('key1', 'value1');
config2.getConfig('key1');
console.log(config1 === config2);
