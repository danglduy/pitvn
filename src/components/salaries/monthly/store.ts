import { create } from 'zustand'
import { produce } from 'immer'
import { isNumeric, narrowArray } from '@/utils'

const numberInputs = narrowArray('grossSalaryInput', 'insuranceSalaryInput', 'dependantsInput')

type NumberInput = (typeof numberInputs)[number]

interface MonthlySalariesState {
  grossSalaryInput: string
  insuranceSalaryInput: string
  dependantsInput: string
  setInput: (key: NumberInput, value: string) => void
  errors: Array<NumberInput>
}

export const useMonthlySalariesStore = create<MonthlySalariesState>((set) => ({
  grossSalaryInput: '',
  insuranceSalaryInput: '',
  dependantsInput: '',
  setInput: (key, value) =>
    set(produce<MonthlySalariesState>((state) => {
      state[key] = value

      const errorIndex = state.errors.findIndex(errorKey => errorKey === key)

      if (value.trim().length > 0 && !isNumeric(value)) {
        if (errorIndex === -1) state.errors.push(key)
      } else {
        if (errorIndex !== -1) state.errors.splice(errorIndex, 1)
      }
    })),
  errors: [],
}))

export const selectMonthlySalaries = (state: MonthlySalariesState) => state
