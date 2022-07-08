export const schema = gql`
  type ExpenseType {
    id: Int!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    expenseTypes: [ExpenseType!]! @requireAuth
    expenseType(id: Int!): ExpenseType @requireAuth
  }

  input CreateExpenseTypeInput {
    name: String!
  }

  input UpdateExpenseTypeInput {
    name: String
  }

  type Mutation {
    createExpenseType(input: CreateExpenseTypeInput!): ExpenseType! @requireAuth
    updateExpenseType(id: Int!, input: UpdateExpenseTypeInput!): ExpenseType!
      @requireAuth
    deleteExpenseType(id: Int!): ExpenseType! @requireAuth
  }
`
