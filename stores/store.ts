import { atomWithStorage } from 'jotai/utils'

export const componentActivation = atomWithStorage<'now' | ''>(
  '@activation',
  '',
)

export const productActivation = atomWithStorage<'now' | ''>('@pactivation', '')
