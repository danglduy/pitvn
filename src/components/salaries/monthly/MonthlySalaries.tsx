import SalaryInput from './input/SalaryInput'
import Result from './result/Result'
import Tax from './tax/Tax'

export default function MonthlySalaries() {
  return (
    <div className="mt-4 space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Thông tin thu nhập
        </h2>
        <SalaryInput />
      </div>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Kết quả
        </h2>
        <Result />
      </div>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Chi tiết tính thuế thu nhập cá nhân
        </h2>
        <Tax />
      </div>
    </div>
  )
}
