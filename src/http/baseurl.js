    // const serviceBaseUrl = 'https://platform-dev.qms888.com/new-qms-p-server'
    // export default {
    //     serviceBaseUrl
    // }
    let serviceBaseUrl;
    // if (process.env.NODE_ENV === 'development') {
    //     // 开发环境
    //     serviceBaseUrl = 'https://platform-dev.qms888.com/new-qms-p-server'
    // } else {
    //     if (process.env.type === 'test') {
    //         // 生产环境
    //         serviceBaseUrl = 'https://platform.qms888.com/new-qms-p-server'
    //     } else {
    //         // 测试环境
    //         serviceBaseUrl = 'https://platform-ts.qms888.com/new-qms-p-server'
    //     }
    // }
    if ((window.location.href).indexOf("-dev") != -1) {
        serviceBaseUrl = 'http://192.168.134.32:8080';
    } else if ((window.location.href).indexOf("-ts") != -1) {
        serviceBaseUrl = 'http://39.106.161.180:8081';
    } else if ((window.location.href).indexOf("localhost") != -1) {
        serviceBaseUrl = 'http://192.168.124.32:8081';
    } else {
        serviceBaseUrl = 'http://39.106.161.180:8081';
    }
    export default {
        serviceBaseUrl
    }