const typeDefs = `
  schema {
    query:Query
    mutation:Mutation
  }

"Type Query is a basic type"

  type Query {
    clients: [Clients]
    credit: [Credit]
    invest: [Invest]
  }

  type Mutation {
    createClients(clientsInput: ClientsInput!): Clients
    deleteClients(id_client: Int): String
    updateClients(clientsInput: ClientsInput!): Clients

    createCredit(creditInput: CreditInput!): Credit
    deleteCredit(id_credit: Int): String
    updateCredit(creditInput: CreditInput!): Credit

    createInvest(investInput: InvestInput!): Invest
    deleteInvest(id_invest: Int): String
    updateInvest(investInput: InvestInput!): Invest
  }

  type Clients{
    id_client : ID!
    fio: String
    passportNomer: Int
    citizenship: String
    country: String
    city: String
  }
  input ClientsInput{
    id_client : ID!
    fio: String
    passportNomer: Int
    citizenship: String
    country: String
    city: String
  }

  type Credit{
    id_credit: ID!
    id_client: Int
    typeOfCredit: String
    sumOfCredit: String
    percent: Int
    typeOfCurrency: String
    dateOfIssue: String
    dateOfReturn: String
  }
  input CreditInput{
    id_credit: ID!
    id_client: Int
    typeOfCredit: String
    sumOfCredit: String
    percent: Int
    typeOfCurrency: String
    dateOfIssue: String
    dateOfReturn: String
  }
  

  type Invest{
    id_invest: ID!
    id_client: Int
    numberCheck: Int
    typeOfCheck: String
    typeOfInvest: String
    sumOfInvest: Int
    dateOfTheBegining: String
    dateOfCompletion: String
  }
  input InvestInput{
    id_invest: ID!
    id_client: Int
    numberCheck: Int
    typeOfCheck: String
    typeOfInvest: String
    sumOfInvest: Int
    dateOfTheBegining: String
    dateOfCompletion: String
  }
`;

module.exports = typeDefs;