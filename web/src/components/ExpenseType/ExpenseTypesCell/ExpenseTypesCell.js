import { Link, routes } from '@redwoodjs/router'

import ExpenseTypes from 'src/components/ExpenseType/ExpenseTypes'

export const QUERY = gql`
  query FindExpenseTypes {
    expenseTypes {
      id
      name
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No expenseTypes yet. '}
      <Link to={routes.newExpenseType()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ expenseTypes }) => {
  return <ExpenseTypes expenseTypes={expenseTypes} />
}
