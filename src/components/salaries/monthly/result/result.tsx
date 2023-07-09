const vndongFormatter = new Intl.NumberFormat('vi-vn')

function ResultRow(props: { label: string; value: number; top?: boolean }) {
  return (
    <tr className={props.top ? undefined : 'border-t border-gray-200'}>
      <td className="relative py-4 pl-4 pr-3 text-left text-sm font-bold">
        {props.label}
      </td>
      <td className="px-3 py-3.5 text-right text-sm text-gray-500">
        {vndongFormatter.format(props.value)}
      </td>
    </tr>
  )
}

function  Result() {
  return (
    <div className="mt-4 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
      <table className="min-w-full table-fixed divide-y divide-gray-300">
        <tbody>
          <ResultRow label="Lương Gross" value={100000} top />
          <ResultRow label="Bảo hiểm xã hội" value={100000} />
          <ResultRow label="Bảo hiểm y tế" value={100000} />
          <ResultRow label="Bảo hiểm thất nghiệp" value={100000} />
          <ResultRow label="Thu nhập trước thuế" value={100000} />
          <ResultRow label="Giảm trừ gia cảnh bản thân" value={100000} />
          <ResultRow label="Giảm trừ gia cảnh người phụ thuộc" value={100000} />
          <ResultRow label="Thu nhập chịu thuế" value={100000} />
          <ResultRow label="Thuế thu nhập cá nhân (tạm tính)" value={100000} />
          <ResultRow label="Công đoàn" value={100000} />
          <ResultRow label="Lương Net" value={100000} />
        </tbody>
      </table>
    </div>
  )
}

export default Result
