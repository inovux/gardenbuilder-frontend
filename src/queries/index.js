import { gql } from "@apollo/client"

export const GET_USER_GARDENS = gql`
  query GET_USER_GARDENS {
    userGardens {
      id
      name
      beds {
        id
      }
      isActive
    }
  }
`

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    currentUser {
      id
      email
    }
  }
`

export const GET_USER_BEDS = gql`
  query GET_USER_BEDS($gardenId: Int!) {
    bedsForUser(gardenId: $gardenId) {
      id
      name
      width
      length
    }
  }
`
