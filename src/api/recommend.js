import jsonp from '../common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'
export function getRecommend() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

    const data = Object.assign({}, commonParams, {
        platform: 'h5',
        uin: 0,
        needNewCode: 1
    })

    return jsonp(url, data, options)
}

export function getDiscList() {
    const url = '/api/getDiscList'

    const data = Object.assign({}, commonParams, {
        platform: 'yqq',
        hostUin: 0,
        sin: 0,
        ein: 29,
        sortId: 5,
        needNewCode: 0,
        categoryId: 10000000,
        rnd: Math.random(),
        loginUin: 0,
        format: 'json'
    })

    return axios.get(url, { params: data }).then((res) => {
        console.log(res)
        return Promise.resolve(res.data)
    })

}

export function getSingerList() {
    const url = '/api/getSingerList'

    const data = Object.assign({}, commonParams, {
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        loginUin: 0,
        hostUin: 0,
        platform: 'yqq',
        needNewCode: 0,
    })

    return axios.get(url, {params: data}).then( res => res.data)


}