import React from "react"
import { render } from "@testing-library/react"
import { BedListItem } from "./BedListItem"

describe("<BedListItem /> component", () => {
  const container = render(
    <BedListItem id={1} length={10} width={10} name="Bed 1" />
  )

  it("has no tests yet", () => {
    console.warn("FAKE TEST WARNING: There are no tests here yet")
    expect("No tests yet").toBe("No tests yet")
  })
})
