//@charset 'utf-8'
/**
 * @description 去掉链接的http头
 * @param {String} url http链接
 * @return {String} url 去掉请求头的链接
 */
export const removeHttpFilter = (url: String) => {
    if (url && -1 < url.indexOf('http')) {
        url = url.split(':')[1];
    }
    return url;
};
