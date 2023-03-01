import { atomWithStorage } from 'jotai/utils'

export const componentActivation = atomWithStorage<'now' | ''>(
  '@activation',
  '',
)

export const productActivation = atomWithStorage<'now' | ''>('@pactivation', '')

interface storeType {
  title: string
  count: number
}
export const myStore = atomWithStorage<storeType[]>('@Order', [])
