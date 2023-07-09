const vndongFormatter = new Intl.NumberFormat('vi-vn')

function TaxDetailRow(props: {
  label: string
  taxRate: string
  value: number
  top?: boolean
}) {
  return (
    <tr className={props.top ? undefined : 'border-t border-gray-200'}>
      <td className="relative py-4 pl-4 pr-3 text-left text-sm">
        {props.label}
      </td>
      <td className="px-3 py-3.5 text-right text-sm text-gray-500">
        {props.taxRate}
      </td>
      <td className="px-3 py-3.5 text-right text-sm text-gray-500">
        {vndongFormatter.format(props.value)}
      </td>
    </tr>
  )
}

function TaxDetails() {
  return (
    <div className="mt-4 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
      <table className="min-w-full table-fixed divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
            >
              Mức chịu thuế
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Thuế suất
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Số tiền
            </th>
          </tr>
        </thead>

        <tbody>
          <TaxDetailRow
            label="Đến 5 triệu VNĐ"
            taxRate="5%"
            value={100000}
            top
          />
          <TaxDetailRow
            label="Trên 5 triệu VNĐ đến 10 triệu VNĐ"
            taxRate="10%"
            value={100000}
          />
          <TaxDetailRow
            label="Trên 10 triệu VNĐ đến 18 triệu VNĐ"
            taxRate="15%"
            value={100000}
          />
          <TaxDetailRow
            label="Trên 18 triệu VNĐ đến 32 triệu VNĐ"
            taxRate="20%"
            value={100000}
          />
          <TaxDetailRow
            label="Trên 32 triệu VNĐ đến 52 triệu VNĐ"
            taxRate="25%"
            value={100000}
          />
          <TaxDetailRow
            label="Trên 52 triệu VNĐ đến 80 triệu VNĐ"
            taxRate="30%"
            value={100000}
          />
          <TaxDetailRow label="Trên 80 triệu" taxRate="35%" value={100000} />
        </tbody>
      </table>
    </div>
  )
}

export default TaxDetails
