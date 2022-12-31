import { Heading2, styled, Text } from "../../../theme/global"
import { HomeCard } from "../HomeCard"

export default function AboutCard() {
    return (
        <AboutCardLayout>
            <Heading2>About Us</Heading2>
            <Text>
                For over 40 years, the Brown Ultimate program has churned out elite players and coaches all across the country. Brown Ultimate, commonly referred to as “The Program,” claims three men’s national titles (2000, 2005, and 2019) and four Callahan winners. This year’s BMo has relied on contributions from a strong Senior class headed by 2022 Callahan Award winnner John Randolph and a standout sophomore class. BMo returned to the College Championships in 2018 after a 10-year hiatus, thanks to the superior coaching of Sam Lehman and Jake Smart, whose commitment and acuity have taken BMo from kangaroo court to nationals contender.
            </Text>
        </AboutCardLayout>
    )
}

const AboutCardLayout = styled(HomeCard, {
    background: '$gray3',
})