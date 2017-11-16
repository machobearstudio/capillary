import fragment from './fragment'
import * as flow from './flow'
import * as core from './core'
import * as essentials from './essentials'

// The lift
export const lift   = func => fragment(flow.lift(func))

// Lenses
export const get    = fragment(flow.functionCall(core.get))
export const set    = fragment(flow.functionCall(core.set))

export const lens = location => {
  const Lens = get(location)
  Lens.get = get(location)
  Lens.set = value => set(location, value)

  return Lens
}

export const id = x => get('')(x)

export const data = x => get('')(x)
data.get = fragment(flow.functionCall(core.getData))
data.set = fragment(flow.functionCall(core.setData))

export const scope = x => fragment(flow.functionCall(core.getScope))('')(x)
scope.get = fragment(flow.functionCall(core.getScope))
scope.set = set

// Transformer fragments
export const not         = lift(essentials.not)
export const and         = lift(essentials.and)
export const or          = lift(essentials.or)
export const xor         = lift(essentials.xor)
export const add         = lift(essentials.add)
export const subtract    = lift(essentials.subtract)
export const multiply    = lift(essentials.multiply)
export const divide      = lift(essentials.divide)
export const uppercase   = lift(essentials.uppercase)
export const lowercase   = lift(essentials.lowercase)
export const join        = lift(essentials.join)
export const split       = lift(essentials.split)
export const eq          = lift(essentials.eq)
export const neq         = lift(essentials.neq)
export const gt          = lift(essentials.gt)
export const lt          = lift(essentials.lt)
export const gte         = lift(essentials.gte)
export const lte         = lift(essentials.lte)
export const isDefined   = lift(essentials.isDefined)
export const isUndefined = lift(essentials.isUndefined)
export const values      = lift(essentials.values)
export const keys        = lift(essentials.keys)
export const head        = lift(essentials.head)
export const tail        = lift(essentials.tail)
export const zip         = lift(essentials.zip)
export const concat      = lift(essentials.concat)
export const push        = lift(essentials.push)
export const select      = lift(essentials.select)
export const exclude     = lift(essentials.exclude)
export const merge       = lift(essentials.merge)

// Control flow fragments
export const chain  = fragment(flow.chain)
export const all    = fragment(flow.all)
export const call   = fragment(flow.functionCall)
export const when   = fragment(flow.when)
export const choice = fragment(flow.choice)
export const either = fragment(flow.either)
export const map    = fragment(flow.map)
export const filter = fragment(flow.filter)
