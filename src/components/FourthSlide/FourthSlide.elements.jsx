import styled from "styled-components"

export const ExpensesWrapper = styled.section`
display: grid;
grid-template-columns: 70% 30%;
grid-template-rows: repeat(3, auto);
grid-row-gap: 0.8rem;
background-color: var(--alabaster);
padding: 1.2rem 1rem;
border-radius: 0.4rem;
margin-top: 1.2rem;
`

export const HeadingWrapper = styled.div`
width: 145%;
border-bottom: 1px solid var(--cool-gray);
padding: 0 0 0.8rem 0;
`

export const PlanHeading = styled.h2`
color: var(--marine-blue);
font-size: 1rem;
margin-bottom: 0.2rem;
`

export const ChangePlan = styled.a`
color: var(--cool-gray);
text-decoration: underline;
`

export const Price = styled.p`
color: ${props => props.primary ? "var(--purplish-blue)" : "var(--marine-blue)"};
font-weight: ${props => props.bold ? "500" : "400"};
font-size: ${props => props.primary ? "1.05rem" : "1rem"};
justify-self: end;
`

export const AddOn = styled.p`
color: var(--cool-gray);
`

export const TotalWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-top: 1.3rem;
padding: 0 1rem;
`