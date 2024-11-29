import { useAtom } from 'jotai'
import { useModelVisbile, useActiveProduct } from './atom'
import './app.css'

const Model = () => {
  const [modelVisbile, setModelVisbile] = useAtom(useModelVisbile)
  const [activeProduct] = useAtom(useActiveProduct)

  return (
    <div className="fixed inset-0 z-[110] w-screen overflow-y-auto pt-6 sm:pt-0">
      <div className="grid min-h-full grid-rows-[1fr_auto_1fr] justify-items-center p-4 sm:grid-rows-[1fr_auto_3fr] sm:p-2">
        <div className="row-start-2 flex h-[calc(100vh-100px)] min-h-[600px] w-full flex-col rounded-2xl bg-white p-4 shadow-lg ring-1 ring-zinc-950/10 transition duration-100 data-[closed]:data-[enter]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in max-sm:pt-0 sm:h-[60vh] sm:min-h-[780px] sm:max-w-4xl sm:rounded-2xl sm:p-8 dark:bg-zinc-900 dark:ring-white/10 forced-colors:outline">
          <div className="mt-4 flex flex-1 flex-col overflow-y-auto overflow-x-visible pt-2 sm:px-4">
            <h2 className="mb-1 text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
              购买产品
            </h2>
            <h1 className="!mt-0 mb-4 text-2xl/8 font-semibold text-zinc-950 sm:mb-2 sm:text-xl/8 dark:text-white">
              {activeProduct.name}
            </h1>
            <div className="model-text flex flex-col justify-between gap-x-4 py-3">
              <p className="mb-[16px]">{activeProduct.description}</p>
              <ul className="list">
                {activeProduct.list.map((sub, i) => {
                  return (
                    <li key={i} className="item">
                      {sub}
                    </li>
                  )
                })}
              </ul>
              <p>{activeProduct.tips}</p>
            </div>
            <fieldset className="mt-4 pt-0 transition-opacity duration-200 [&>*+[data-slot=control]]:mt-6 [&>[data-slot=text]]:mt-1">
              <div className="text-base/6 font-semibold text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white">
                选择订阅周期
              </div>
            </fieldset>
            <div className="flex flex-1 place-content-center overflow-hidden align-bottom"></div>
          </div>
          <div className="flex  flex-col-reverse flex-wrap items-center justify-end  *:w-full sm:mt-4  sm:flex-row sm:*:w-auto">
            <div className="mb-2 max-h-[130px] !w-full justify-self-end overflow-y-auto rounded-xl border bg-gray-50 px-4 py-1 sm:py-1.5">
              <dl className="grid grid-cols-1 text-base/6 max-sm:text-sm sm:grid-cols-[min(50%,theme(spacing.80))_auto] sm:text-sm/6 sm:leading-7">
                <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                  每周期金额/订阅周期
                </dt>
                <dd className="pb-3 pt-1 text-lg font-bold !text-red-700 max-sm:text-base sm:border-t sm:border-zinc-950/5 sm:py-3 sm:text-right dark:text-white dark:sm:border-white/5 sm:[&:nth-child(2)]:border-none">
                  查看价格前请先登录
                </dd>
              </dl>
            </div>
            <button
              onClick={() => setModelVisbile(false)}
              className="relative isolate inline-flex cursor-pointer items-center justify-center gap-x-2 rounded-lg border border-transparent px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] text-base/6 font-semibold text-zinc-950 [--btn-icon:theme(colors.zinc.500)] focus:outline-none data-[active]:bg-zinc-950/5 data-[hover]:bg-zinc-950/5 data-[disabled]:opacity-50 data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[active]:[--btn-icon:theme(colors.zinc.700)] data-[hover]:[--btn-icon:theme(colors.zinc.700)] max-sm:!hidden sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 dark:text-white dark:[--btn-icon:theme(colors.zinc.500)] dark:data-[active]:bg-white/10 dark:data-[hover]:bg-white/10 dark:data-[active]:[--btn-icon:theme(colors.zinc.400)] dark:data-[hover]:[--btn-icon:theme(colors.zinc.400)] forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4"
            >
              取消
            </button>
            <div className="flex-1"></div>
            <div className="flex flex-row place-content-center place-items-center gap-3">
              购买产品前请先
              <a
                style={{
                  backgroundColor: '#18181b',
                  color: '#fafafa'
                }}
                className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                点此登录
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Model
