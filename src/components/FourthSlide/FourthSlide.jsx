import Heading from "../components/Heading/Heading"
import Paragraph from "../components/Paragraph/Paragraph"
import { ExpensesWrapper, HeadingWrapper, PlanHeading, ChangePlan, Price, AddOn, TotalWrapper } from "./FourthSlide.elements"
import SlideContainer from "../components/SlideContainer/SlideContainer"

const FourthSlide = ({ data, setCurrentSlideIndex }) => {
  const addOnsTotal = () => {
    let sum = 0
    data.addOns.map((addOn) => {
      if(addOn.selected) {
        sum += addOn.price
      }
    })
    return sum
  }

  return (
    <SlideContainer>
        <Heading>Finishing up</Heading>
        <Paragraph>Double-check everything looks OK before confirming.</Paragraph>
        <ExpensesWrapper>
            <HeadingWrapper>
                <PlanHeading>{data.plans[data.planIndex].heading}{data.monthly ? " (Monthly)" : " (Yearly)"}</PlanHeading>
                <ChangePlan onClick={() => setCurrentSlideIndex(1)}>Change</ChangePlan>
            </HeadingWrapper>
            <Price bold>${data.monthly ? `${data.plans[data.planIndex].price}/mo` : `${data.plans[data.planIndex].price * 10}/yr`}</Price>
            {data.addOns.map((addOn) => {
              if(addOn.selected) {
                return <><AddOn>{addOn.title}</AddOn><Price>+${data.monthly ? `${addOn.price}/mo` : `${addOn.price * 10}/yr`}</Price></> 
              }
            })}
        </ExpensesWrapper>
        <TotalWrapper>
            <AddOn>Total (per {data.monthly ? "month" : "year"})</AddOn>
            <Price primary bold>${data.monthly ? data.plans[data.planIndex].price + addOnsTotal() : (data.plans[data.planIndex].price + addOnsTotal()) * 10}</Price>
        </TotalWrapper>
    </SlideContainer>
  )
}

export default FourthSlide