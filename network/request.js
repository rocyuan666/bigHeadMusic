const baseURL = "https://www.luojing.top:8080"
const timeout = 10000
export function request(options){
    return new Promise((resolve, reject) => {
        wx.showLoading({
            title: "加载中...",
            mask: true,
        })
        wx.request({
            url: baseURL + options.url,
            timeout: timeout,
            method: options.method || "get",
            data: options.data || {},
            success(res){
                resolve(res)
            },
            fail(err){
                reject(err)
            }
        })
    })
}