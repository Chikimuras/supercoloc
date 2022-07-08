import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ExpenseTypeForm from 'src/components/ExpenseType/ExpenseTypeForm'

export const QUERY = gql`
  query EditExpenseTypeById($id: Int!) {
    expenseType: expenseType(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`
const UPDATE_EXPENSE_TYPE_MUTATION = gql`
  mutation UpdateExpenseTypeMutation(
    $id: Int!
    $input: UpdateExpenseTypeInput!
  ) {
    updateExpenseType(id: $id, input: $input) {
      id
      name
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ expenseType }) => {
  const [updateExpenseType, { loading, error }] = useMutation(
    UPDATE_EXPENSE_TYPE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ExpenseType updated')
        navigate(routes.expenseTypes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateExpenseType({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ExpenseType {expenseType.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ExpenseTypeForm
          expenseType={expenseType}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
