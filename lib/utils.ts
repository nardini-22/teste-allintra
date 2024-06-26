import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface currencyFormatterProps {
  value: number
  currency?: string
  locale?: string
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const currencyFormatter = ({
  value,
  currency = 'USD',
  locale = 'en-US',
}: currencyFormatterProps) => {
  const getDecimalPlaces = (num: number) => {
    if (num < 1) {
      return 4
    }
    return 2
  }
  const formattedValue = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: getDecimalPlaces(value),
    maximumFractionDigits: getDecimalPlaces(value),
  }).format(value)

  return formattedValue
}

export const percentageFormatter = (value: number) => {
  const decimalValue = value.toFixed(2)
  const str = decimalValue.toString()
  const formattedValue = str.replace('.', ',')

  return value > 0 ? `+${formattedValue}%` : `${formattedValue}%`
}
