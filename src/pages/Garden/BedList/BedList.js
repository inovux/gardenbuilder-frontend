import React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/client"
import { GET_USER_BEDS } from "../../../queries"
import { BedListItem } from "../BedListItem"

const BedListWrapper = styled.ul`
  display: grid;
  grid-row-gap: 1rem;
  background: pink;
  margin: 0 auto;
  padding: 1rem;
`

export function BedList() {
  const urlParams = new URLSearchParams(window.location.search)
  const gardenId = urlParams.get("id")

  const { data, loading, error } = useQuery(GET_USER_BEDS, {
    variables: { gardenId },
  })

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  // const { bedsForUser } = data

  const bedsForUser = [
    {
      id: 1,
      name: "Bed 1",
      width: 20,
      length: 30,
    },
    {
      id: 2,
      name: "Bed 2",
      width: 20,
      length: 30,
    },
    {
      id: 3,
      name: "Bed 3",
      width: 20,
      length: 30,
    },
  ]

  return (
    <BedListWrapper>
      {!bedsForUser.length ? (
        <p>This garden has no beds yet.</p>
      ) : (
        bedsForUser.map((bed) => {
          return (
            <BedListItem
              id={bed.id}
              key={bed.id}
              length={bed.length}
              name={bed.name}
              width={bed.width}
            />
          )
        })
      )}
    </BedListWrapper>
  )
}
