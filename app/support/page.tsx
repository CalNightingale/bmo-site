"use client"

import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Container } from "../common/Container";
import { styled, Row, Column } from 'styled-system/jsx';
import { Text } from "../common/theme/global";
import { UndecoratedA } from "../common/theme/global";
import { DonationInstructions, donationDescription } from "./Instructions";
import Image from "next/image"

export default function SupportPage() {
    return (
        <Container>
            <Column gap="64px" align="stretch">
                <Column gap="32px" align="stretch">
                    <Column gap="8px" align="stretch">
                        <Text style="h2">Donate</Text>
                        <Text style="body" color="primary">{donationDescription}</Text>
                    </Column>
                    <InstructionCard gap="16px" padding="32px" align="stretch">
                        <Text style="subtitle">Instructions</Text>
                        <DonationInstructions/>
                    </InstructionCard>
                </Column>
                <Column gap="32px" align="stretch">
                    <Column gap="8px" align="stretch">
                        <Text style="h2">Team Store</Text>
                        <Text style="body" color="primary">Buy gear from our team store! These items are sold at cost, so feel free to donate as well!</Text>
                    </Column>
                    <TeamStoreLink/>
                </Column>
            </Column>
        </Container>
    )
}

function TeamStoreLink() {
    return (
        <UndecoratedA href="https://www.etsy.com/shop/bmomerchandise" target="_blank" rel="noopener noreferrer">
            <TeamStoreLinkBase align="stretch">
                <Image 
                src="images/team_store.png" 
                alt="Picture of the team store"
                width={1200}
                height={0}
                style={{ width: '100%', height: 'auto' }}
                />
                <Row justify="space-between" padding="16px" align="center">
                    <Text style="subtitle" color="primary">Visit the Etsy Store</Text>
                    <ArrowRightIcon/>
                </Row>
            </TeamStoreLinkBase>
        </UndecoratedA>
    )
}

const TeamStoreLinkBase = styled(Column, {
    base: {
        border: "solid 1px $gray7",
        backgroundColor: "$gray3",
        overflow: "clip",
        width: "100%",    
        borderRadius: {
            base: "16px",
            md: "32px",
        }
    },
})

const InstructionCard = styled(Column, {
    base: {
        boxShadow: "0px 0px 24px rgba(39, 174, 96, 0.25);",
        borderRadius: "24px",    
    },

    variants: {
        size: {
            mobile: {},
            desktop: {
                margin: "0px -8px",
            },
        },
    },
})