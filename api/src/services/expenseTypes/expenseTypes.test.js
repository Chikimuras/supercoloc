import {
  expenseTypes,
  expenseType,
  createExpenseType,
  updateExpenseType,
  deleteExpenseType,
} from './expenseTypes'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('expenseTypes', () => {
  scenario('returns all expenseTypes', async (scenario) => {
    const result = await expenseTypes()

    expect(result.length).toEqual(Object.keys(scenario.expenseType).length)
  })

  scenario('returns a single expenseType', async (scenario) => {
    const result = await expenseType({ id: scenario.expenseType.one.id })

    expect(result).toEqual(scenario.expenseType.one)
  })

  scenario('creates a expenseType', async () => {
    const result = await createExpenseType({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a expenseType', async (scenario) => {
    const original = await expenseType({ id: scenario.expenseType.one.id })
    const result = await updateExpenseType({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a expenseType', async (scenario) => {
    const original = await deleteExpenseType({
      id: scenario.expenseType.one.id,
    })

    const result = await expenseType({ id: original.id })

    expect(result).toEqual(null)
  })
})
