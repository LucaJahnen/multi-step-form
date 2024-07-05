import Heading from "../components/Heading/Heading"
import Paragraph from "../components/Paragraph/Paragraph"
import { ExpensesWrapper, HeadingContainer, HeadingWrapper, PlanHeading, ChangePlan, Price, AddOnWrapper, AddOn, TotalWrapper } from "./FourthSlide.elements"
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
            <HeadingContainer>
            <HeadingWrapper>
                <PlanHeading>{data.plans[data.planIndex].heading}{data.monthly ? " (Monthly)" : " (Yearly)"}</PlanHeading>
                <ChangePlan onClick={() => setCurrentSlideIndex(1)}>Change</ChangePlan>
            </HeadingWrapper>
            <Price $bold>${data.monthly ? `${data.plans[data.planIndex].price}/mo` : `${data.plans[data.planIndex].price * 10}/yr`}</Price>
            </HeadingContainer>
            {data.addOns.map((addOn, index) => {
              if(addOn.selected) {
                return (
                <AddOnWrapper key={addOn.title}>
                  <AddOn $second={index === 1}>{addOn.title}</AddOn>
                  <Price $second={index === 1}>+${data.monthly ? `${addOn.price}/mo` : `${addOn.price * 10}/yr`}</Price>
                </AddOnWrapper> 
                )
              }
            })}
        </ExpensesWrapper>
        <TotalWrapper>
            <AddOn>Total (per {data.monthly ? "month" : "year"})</AddOn>
            <Price $primary $bold>${data.monthly ? data.plans[data.planIndex].price + addOnsTotal() : (data.plans[data.planIndex].price + addOnsTotal()) * 10}{data.monthly ? "/mo" : "/yr"}</Price>
        </TotalWrapper>
    </SlideContainer>
  )
}

export default FourthSlide