import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import { ApolloProvider } from "@apollo/client"
import { Garden } from "./Garden"
import client from '../../ApolloClient';

describe("<Garden /> view", () => {
  /**
   *  Set up conditions for each test.
   *  We must rerender before each new assertion
   */
  beforeEach(() => {
    render(
      <ApolloProvider client={client} addTypename={false}>
        <Garden />
      </ApolloProvider>
    )
  })

  it("renders its title", async () => {
    expect(await screen.findByText(/You have 2 gardens/i)).toBeInTheDocument();
  })
  // it("returns data after graphql query", async () => {})
})
