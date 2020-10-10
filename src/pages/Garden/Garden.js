import React from "react"
import styled from "styled-components"
import { BedList } from "./BedList"

const BedsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export function Garden() {
  return (
    <BedsWrapper>
      <h2>Garden</h2>
      <BedList />
    </BedsWrapper>
  )
}
