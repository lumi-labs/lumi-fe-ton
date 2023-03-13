/* eslint-disable */
let _cache = {
    //精确到秒
    setItem: function (key, value, expires) {
        if (expires) {
            let params = { key, value, expires };
            let data = Object.assign(params, { startTime: new Date().getTime() });
            // console.log(data);
            sessionStorage.setItem(key, JSON.stringify(data));
        } else {
            if (
                Object.prototype.toString.call(value) == "[object Object]" ||
                Object.prototype.toString.call(value) == "[object Array]"
            ) {
                value = JSON.stringify(value);
            }
            sessionStorage.setItem(key, value);
        }
    },

    getItem: function (key) {
        let item = sessionStorage.getItem(key);
        try {
            item = JSON.parse(item);
            if (item && item.startTime) {
                let date = new Date().getTime();
                if (date - item.startTime > item.expires) {
                    this.remove(key);
                    return false;
                } else {
                    return item.value;
                }
            }
            return item;
        } catch (error) {
            return item;
        }
    },
    remove: function (key) {
        sessionStorage.removeItem(key);
    },
    clear: function () {
        sessionStorage.clear();
    },
};

export default _cache;
