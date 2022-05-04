import * as React from "react"
import { PrismicRichText } from "@prismicio/react"
import { WindupChildren } from "windups"

export const Item = props => {
  //console.log(props)
  return (
    <>
      <PrismicRichText
        field={props.slice.primary.program.richText}
        components={{
          heading2: ({ children }) => (
            <WindupChildren>
              <h2>{children}</h2>
            </WindupChildren>
          ),
        }}
      />
      <PrismicRichText 
      field={props.slice.primary.description.richText} 
      components={{
          paragraph: ({ children }) => <WindupChildren><p>{children}</p></WindupChildren>
      }}
      />
    </>
  )
}
