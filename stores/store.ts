import { atomWithStorage } from 'jotai/utils'

export const componentActivation = atomWithStorage<'active' | 'deactive'>(
  '@activation',
  'deactive',
)
