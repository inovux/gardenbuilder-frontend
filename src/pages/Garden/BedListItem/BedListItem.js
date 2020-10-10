import React from "react"
import PropType from "prop-types"
import styled from "styled-components"

const ListItem = styled.li`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  list-style-type: none;
`

export function BedListItem({ id, length, name, width }) {
  return (
    <ListItem>
      <a href={`/bed?id=${id}&name=${name}`}>{name}</a>
      <div>Length: {length}</div>
      <div>Width: {width}</div>
    </ListItem>
  )
}

BedListItem.propTypes = {
  id: PropType.number.isRequired,
  length: PropType.number.isRequired,
  name: PropType.string.isRequired,
  width: PropType.number.isRequired,
}
