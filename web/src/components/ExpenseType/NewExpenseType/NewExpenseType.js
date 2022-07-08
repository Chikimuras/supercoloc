import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ExpenseTypeForm from 'src/components/ExpenseType/ExpenseTypeForm'

const CREATE_EXPENSE_TYPE_MUTATION = gql`
  mutation CreateExpenseTypeMutation($input: CreateExpenseTypeInput!) {
    createExpenseType(input: $input) {
      id
    }
  }
`

const NewExpenseType = () => {
  const [createExpenseType, { loading, error }] = useMutation(
    CREATE_EXPENSE_TYPE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ExpenseType created')
        navigate(routes.expenseTypes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createExpenseType({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ExpenseType</h2>
      </header>
      <div className="rw-segment-main">
        <ExpenseTypeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewExpenseType
