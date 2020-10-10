import React from "react"
import { render } from "@testing-library/react"
import { BedList } from "./BedList"
import client from "../../../ApolloClient"
import { ApolloProvider } from "@apollo/client"

describe("<BedList /> component", () => {
  const container = render(
    <ApolloProvider client={client} addTypename={false}>
      <BedList />
    </ApolloProvider>
  )

  it("has no tests yet", () => {
    console.warn("FAKE TEST WARNING: There are no tests here yet")
    expect("No tests yet").toBe("No tests yet")
  })
})
