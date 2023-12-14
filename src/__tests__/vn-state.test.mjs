import { expect, test } from 'vitest'
import VNState from '../index.mjs'

test('initial State { read: true } to equal { read: true }', () => {
  expect(new VNState({ read: true }).currentState).toStrictEqual({ read: true })
})

test('update State { read: true } to equal { read: false }', () => {
  expect(new VNState({ read: true }).commit({ read: false })).toStrictEqual({ read: false })
})
