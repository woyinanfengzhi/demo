import { atom } from 'jotai'

// 地区分类列表
const useCategories = atom([
  { id: 1, name: '上海 - 高性能云服务器' },
  { id: 2, name: '成都 - 高性能云服务器' },
  { id: 3, name: '鞍山 - 高性能云服务器' },
  { id: 4, name: '广州 - 高性能云服务器' }
])
// 当前选中的地区分类
const useActiveTab = atom(1)
// 套餐
const useProductGroups = atom([
  {
    id: 1,
    name: '跨境通 - 上海B区 - BGP入口',
    products: [
      {
        id: 1,
        name: '跨境通 - 上海 B - B500',
        description:
          '稳定低jitter，BGP入口全国延迟优秀，北京联通至入口仅30ms，武汉联通至入口仅16ms。',
        list: [
          '百度智能云上海区域BGP多线入口独立 IP 1 个',
          '日本东京 BGP 出口独立 IP 1 个',
          '2 vCPU',
          '2 GB 运行内存',
          '每月双向流量 500 GB',
          '端口速率 100Mbps'
        ],
        tips: '限量现货，购买后请联系企业微信客服获取入口公网IP。',
        price: 333
      }
    ]
  }
])
// 弹窗
const useModelVisbile = atom(false)

const useActiveProduct = atom({
  id: 1,
  name: '跨境通 - 上海 B - B500',
  description:
    '稳定低jitter，BGP入口全国延迟优秀，北京联通至入口仅30ms，武汉联通至入口仅16ms。',
  list: [
    '百度智能云上海区域BGP多线入口独立 IP 1 个',
    '日本东京 BGP 出口独立 IP 1 个',
    '2 vCPU',
    '2 GB 运行内存',
    '每月双向流量 500 GB',
    '端口速率 100Mbps'
  ],
  tips: '限量现货，购买后请联系企业微信客服获取入口公网IP。',
  price: 333
})

export {
  useCategories,
  useActiveTab,
  useProductGroups,
  useModelVisbile,
  useActiveProduct
}
