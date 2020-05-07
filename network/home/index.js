import {request} from "../request"


/*
banner数据
type:资源类型,对应以下类型,默认为 0 即PC
0: pc
1: android
2: iphone
3: ipad
 */

export function getBannerData(){
    return request({
        url: "/banner",
        data: {
            type: 2
        }
    })
}

/*
全部:0
华语:7
欧美:96
日本:8
韩国:16
*/
// 新歌速递
export function getHeatMusicData(type){
    return request({
        url: "/top/song",
        data: {
            type
        }
    })
}
/*
排行榜
"0": 云音乐新歌榜,
"1": 云音乐热歌榜,
"2": 网易原创歌曲榜,
"3": 云音乐飙升榜,
"4": 云音乐电音榜,
"5": UK排行榜周榜,
"6": 美国Billboard周榜
"7": KTV嗨榜,
"8": iTunes榜,
"9": Hit FM Top榜,
"10": 日本Oricon周榜
"11": 韩国Melon排行榜周榜,
"12": 韩国Mnet排行榜周榜,
"13": 韩国Melon原声周榜,
"14": 中国TOP排行榜(港台榜),
"15": 中国TOP排行榜(内地榜)
"16": 香港电台中文歌曲龙虎榜,
"17": 华语金曲榜,
"18": 中国嘻哈榜,
"19": 法国 NRJ EuroHot 30周榜,
"20": 台湾Hito排行榜,
"21": Beatport全球电子舞曲榜,
"22": 云音乐ACG音乐榜,
"23": 云音乐说唱榜
"24": 云音乐古典音乐榜
"25": 云音乐电音榜
"26": 抖音排行榜
"27": 新声榜
"28": 云音乐韩语榜
"29": 英国Q杂志中文版周榜
"30": 电竞音乐榜
"31": 云音乐欧美热歌榜
"32": 云音乐欧美新歌榜
"33": 说唱TOP榜
*/
export function getMusicList(idx){
    return request({
        url: "/top/list",
        data: {
            idx
        }
    })
}

// 播放音乐
export function playMusicData(id){
    return request({
        url: "/song/url",
        data: {
            id
        }
    })
}

// 搜索歌曲
export function searchMusicData(keywords,limit){
    return request({
        url: "/search",
        data: {
            keywords,
            limit
        }
    })
}
