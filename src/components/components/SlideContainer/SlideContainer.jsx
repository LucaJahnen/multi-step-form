import { SlideContainerElement } from "./SlideContainer.elements"

const SlideContainer = ({noPadding, children}) => {
  return (
    <SlideContainerElement $noPadding={noPadding}>{children}</SlideContainerElement>
  )
}

export default SlideContainer