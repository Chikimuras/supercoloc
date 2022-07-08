import { db } from 'src/lib/db'

export const expenseTypes = () => {
  return db.expenseType.findMany()
}

export const expenseType = ({ id }) => {
  return db.expenseType.findUnique({
    where: { id },
  })
}

export const createExpenseType = ({ input }) => {
  return db.expenseType.create({
    data: input,
  })
}

export const updateExpenseType = ({ id, input }) => {
  return db.expenseType.update({
    data: input,
    where: { id },
  })
}

export const deleteExpenseType = ({ id }) => {
  return db.expenseType.delete({
    where: { id },
  })
}
