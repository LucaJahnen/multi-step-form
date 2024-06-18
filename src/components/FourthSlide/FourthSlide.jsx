import SlideWrapper from "../components/SlideWrapper/SlideWrapper"
import Heading from "../components/Heading/Heading"
import Paragraph from "../components/Paragraph/Paragraph"
import { ExpensesWrapper, HeadingWrapper, PlanHeading, ChangePlan, Price, AddOn, TotalWrapper } from "./FourthSlide.elements"

const FourthSlide = ({ data }) => {

  return (
    <SlideWrapper>
        <Heading>Finishing up</Heading>
        <Paragraph>Double-check everything looks OK before confirming.</Paragraph>
        <ExpensesWrapper>
            <HeadingWrapper>
                <PlanHeading>Arcade (Monthly)</PlanHeading>
                <ChangePlan>Change</ChangePlan>
            </HeadingWrapper>
            <Price bold>$9/mo</Price>
            <AddOn>Online service</AddOn>
            <Price>+$1/mo</Price>
            <AddOn>Larger storage</AddOn>
            <Price>+$2/mo</Price>
        </ExpensesWrapper>
        <TotalWrapper>
            <AddOn>Total (per month)</AddOn>
            <Price primary bold>$12/mo</Price>
        </TotalWrapper>
    </SlideWrapper>
  )
}

export default FourthSlide