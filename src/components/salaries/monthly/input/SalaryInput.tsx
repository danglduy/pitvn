import { ChangeEvent, useCallback } from 'react'
import CurrencyInput from 'react-currency-input-field'
import clsx from 'clsx'
import { useMonthlySalariesStore } from '../store'

function PolicyInput() {
  const policies = [
    {
      name: 'policy-2023-jul',
      description: 'Từ 01/07/2023',
    },
    {
      name: 'policy-2022-jul',
      description: 'Từ 01/07/2022 đến 30/06/2023',
    },
    {
      name: 'policy-2020-jul',
      description: 'Từ 01/07/2020 đến 30/06/2022',
    },
  ]

  const renderOptions = () => {
    return policies.map((policy, index) => (
      <div className="flex items-center gap-x-3" key={policy.name}>
        <input
          id={policy.name}
          name="tax-policy"
          type="radio"
          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          defaultChecked={index === 0}
        />
        <label
          htmlFor={policy.name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {policy.description}
        </label>
      </div>
    ))
  }

  return (
    <>
      <label
        htmlFor="tax-policy"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Thời điểm
      </label>
      <fieldset>
        <div className="mt-6 space-y-6">{renderOptions()}</div>
      </fieldset>
    </>
  )
}

function RegionInput() {
  const regions = [
    {
      name: 'region-1',
      description: 'I',
    },
    {
      name: 'region-2',
      description: 'II',
    },
    {
      name: 'region-3',
      description: 'III',
    },
    {
      name: 'region-4',
      description: 'IV',
    },
  ]

  const renderOptions = () => {
    return regions.map((region, index) => (
      <div className="flex items-center gap-x-3" key={region.name}>
        <input
          id={region.name}
          name="region"
          type="radio"
          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          defaultChecked={index === 0}
        />
        <label
          htmlFor={region.name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {region.description}
        </label>
      </div>
    ))
  }

  return (
    <>
      <label
        htmlFor="region"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Vùng
      </label>
      <fieldset>
        <div className="mt-6 space-y-6">{renderOptions()}</div>
      </fieldset>
    </>
  )
}

function GrossSalaryInput() {
  const { grossSalaryInput, setInput } = useMonthlySalariesStore((state) => ({
    grossSalaryInput: state.grossSalaryInput,
    setInput: state.setInput,
  }))

  const onValueChange = useCallback(
    (value: string | undefined) => {
      setInput('grossSalaryInput', value || '')
    },
    [setInput],
  )

  return (
    <>
      <label
        htmlFor="gross-salary"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Lương Gross
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <CurrencyInput
          id="gross-salary"
          name="gross-salary"
          placeholder="0"
          className="block w-full rounded-md border-0 py-1.5 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          aria-describedby="gross-salary-currency"
          intlConfig={{ locale: 'vi-VN' }}
          value={grossSalaryInput}
          onValueChange={onValueChange}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-500 sm:text-sm" id="gross-salary-currency">
            VNĐ
          </span>
        </div>
      </div>
    </>
  )
}

const renderButtons = () => {
  return (
    <div className="mt-12 flex items-center justify-end gap-x-6">
      <button
        type="button"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Xoá
      </button>
      <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Tính lương
      </button>
    </div>
  )
}

function InsuranceSalaryInput() {
  const { insuranceSalaryInput, setInput } = useMonthlySalariesStore(
    (state) => ({
      insuranceSalaryInput: state.insuranceSalaryInput,
      setInput: state.setInput,
    }),
  )

  const onValueChange = useCallback(
    (value: string | undefined) => {
      setInput('insuranceSalaryInput', value || '')
    },
    [setInput],
  )

  return (
    <>
      <label
        htmlFor="insurance-salary"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Mức lương đóng bảo hiểm
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <CurrencyInput
          id="insurance-salary"
          name="insurance-salary"
          placeholder="0"
          className="block w-full rounded-md border-0 py-1.5 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          aria-describedby="insurance-salary-currency"
          intlConfig={{ locale: 'vi-VN' }}
          value={insuranceSalaryInput}
          onValueChange={onValueChange}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span
            className="text-gray-500 sm:text-sm"
            id="insurance-salary-currency"
          >
            VNĐ
          </span>
        </div>
      </div>
    </>
  )
}

function DependantsInput() {
  const { dependantsInput, setInput, hasError } = useMonthlySalariesStore(
    (state) => ({
      dependantsInput: state.dependantsInput,
      setInput: state.setInput,
      hasError: state.errors.includes('dependantsInput'),
    }),
  )

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInput('dependantsInput', e.currentTarget.value)
    },
    [setInput],
  )

  return (
    <>
      <label
        htmlFor="dependants"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Số người phụ thuộc
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="dependants"
          id="dependants"
          placeholder="0"
          className={clsx(
            hasError ? 'ring-red-300 focus:ring-red-500' : 'ring-gray-300 focus:ring-indigo-600',
            'block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
          )}
          value={dependantsInput}
          onChange={onChange}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span
            className="text-gray-500 sm:text-sm"
            id="insurance-salary-currency"
          >
            người
          </span>
        </div>
      </div>
      {hasError && (
        <p className="mt-2 text-sm text-red-600">Phải nhập số vào ô.</p>
      )}
    </>
  )
}

export default function SalaryInput() {
  return (
    <>
      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
        <div className="sm:col-span-6">
          <PolicyInput />
        </div>
        <div className="sm:col-span-6">
          <RegionInput />
        </div>
        <div className="sm:col-span-4">
          <GrossSalaryInput />
        </div>
        <div className="sm:col-span-4">
          <InsuranceSalaryInput />
        </div>
        <div className="sm:col-span-4">
          <DependantsInput />
        </div>
      </div>
      {renderButtons()}
    </>
  )
}
