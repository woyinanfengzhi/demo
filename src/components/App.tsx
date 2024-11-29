import { useAtom } from 'jotai'
import {
  useCategories,
  useActiveTab,
  useProductGroups,
  useModelVisbile
} from './atom'
import './app.css'
import Model from './model'

const App = () => {
  const [categories] = useAtom(useCategories)
  const [productGroups] = useAtom(useProductGroups)
  const [activeTab, setActiveTab] = useAtom(useActiveTab)
  const [modelVisbile, setModelVisbile] = useAtom(useModelVisbile)

  return (
    <div className="app">
      <header>
        <div className="title">4299云计算</div>
        <div className="flex justify-between">
          <div className="mr-[60px]">购买产品</div>
          <div>登录/注册</div>
        </div>
      </header>
      <div className="mt-[-24px] w-full grow bg-white p-6 lg:p-10">
        <div className="mx-auto flex min-h-full max-w-6xl flex-col flex-wrap">
          <div className="mx-auto mb-6 flex min-h-full w-full max-w-6xl flex-row flex-wrap rounded-lg border border-gray-200 bg-gray-50 p-3 pl-5">
            <p className="pl-2 pt-[10px] text-sm">产品类别：</p>
            <div className="ml-3 flex w-full flex-1 flex-row flex-wrap gap-3">
              {categories.map((item, index) => {
                return (
                  <a
                    style={
                      activeTab === item.id
                        ? { backgroundColor: '#18181b', color: '#fafafa' }
                        : {}
                    }
                    href="#"
                    onClick={() => setActiveTab(item.id)}
                    className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    key={index}
                  >
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>
          <>
            {productGroups.map((item, index) => {
              return (
                <div key={index}>
                  <div className="mb-3 w-full flex-wrap gap-4 p-2">
                    <div className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
                      {item.name}
                    </div>
                  </div>
                  <ul className="mb-8 grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3 xl:gap-x-6">
                    {item.products.map((product) => {
                      return (
                        <li
                          key={product.id}
                          className="flex w-full flex-col overflow-hidden rounded-xl border border-gray-200"
                        >
                          <div className="flex flex-col items-start gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                            <div className="font-medium leading-6 text-gray-900">
                              {product.name}
                            </div>
                          </div>
                          <div className="-my-3 flex flex-1 flex-col divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                            <div className="flex flex-col justify-between gap-x-4 py-3">
                              <p className="mb-[16px]">{product.description}</p>
                              <ul className="list">
                                {product.list.map((sub, i) => {
                                  return (
                                    <li key={i} className="item">
                                      {sub}
                                    </li>
                                  )
                                })}
                              </ul>
                              <p>{product.tips}</p>
                            </div>
                            <div className="flex-1"></div>
                            <div className="flex place-items-end justify-between gap-x-4 py-3">
                              <p className="text-xs text-gray-800">
                                <span className="text-2xl font-bold text-red-800">
                                  ¥{product.price.toFixed(2)}
                                </span>
                                /月 起
                              </p>
                              <dd className="flex items-start gap-x-2">
                                <button
                                  style={{
                                    backgroundColor: '#18181b',
                                    color: '#fafafa'
                                  }}
                                  onClick={() => setModelVisbile(true)}
                                  className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                >
                                  购买
                                </button>
                              </dd>
                            </div>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </>
        </div>
      </div>
      <footer>
        <div className="w-full grow p-6 lg:p-10">
          <div className="mx-auto flex min-h-full max-w-6xl flex-col flex-wrap">
            <div className="flex w-full justify-between">
              <div className="text-white">
                <div className="footer-title">4299云计算</div>
                <div>
                  <div className="text">成都安刻网络科技有限公司</div>
                  <div className="text">
                    工信部备案号： 蜀ICP备2022018392号-4
                  </div>
                  <div className="text">
                    公安部备案号：川公网安备 51019002005850号
                  </div>
                </div>
                <div className="line"></div>
                <div className="text-xs">
                  Powered by Hostbee.
                  <br /> Copyright © 2024 . All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {modelVisbile && <Model />}
    </div>
  )
}

export default App
