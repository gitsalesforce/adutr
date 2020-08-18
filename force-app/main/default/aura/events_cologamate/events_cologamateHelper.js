({
    createUid: function (component) {
        var result = this.generateRandomUidFunc() + this.generateRandomUidFunc() + '-' + this.generateRandomUidFunc() + '-' + this.generateRandomUidFunc() + '-' + this.generateRandomUidFunc() + this.generateRandomUidFunc() + this.generateRandomUidFunc();
        return result;
    },
     generateRandomUidFunc: function () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
})