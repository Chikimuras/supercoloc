import ExpenseType from 'src/components/ExpenseType/ExpenseType'

export const QUERY = gql`
  query FindExpenseTypeById($id: Int!) {
    expenseType: expenseType(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ExpenseType not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ expenseType }) => {
  return <ExpenseType expenseType={expenseType} />
}
