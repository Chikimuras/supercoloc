import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_EXPENSE_TYPE_MUTATION = gql`
  mutation DeleteExpenseTypeMutation($id: Int!) {
    deleteExpenseType(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const ExpenseType = ({ expenseType }) => {
  const [deleteExpenseType] = useMutation(DELETE_EXPENSE_TYPE_MUTATION, {
    onCompleted: () => {
      toast.success('ExpenseType deleted')
      navigate(routes.expenseTypes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete expenseType ' + id + '?')) {
      deleteExpenseType({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ExpenseType {expenseType.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{expenseType.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{expenseType.name}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(expenseType.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(expenseType.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editExpenseType({ id: expenseType.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(expenseType.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ExpenseType
