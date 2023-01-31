import { Cross1Icon } from "@radix-ui/react-icons";
import {ModalContent, ModalWrapper, PopupClose} from "../common/Dialog";
import {Column, Row} from "../common/Layouts";
import Text from "../common/Text";
import { styled } from "../common/theme/global";
import {LinkItem} from "./cards/LinkCard";
import {gray, green} from "@radix-ui/colors";

export function SupportPopup({ onClose }: {onClose: () => void}) {
    return (
        <ModalWrapper>
            <ModalContent>
                <Column padding="24px" gap="24px" align="stretch">
                    <Column gap="16px" align="stretch">
                        <Row justify="space-between" gap="16px">
                            <Text style="h3">Donate</Text>
                            <PopupClose onClick={e => onClose()}>
                                <Cross1Icon />
                            </PopupClose>
                        </Row>
                        <Text style="body" color="secondary">As a club sport, we are completely reliant on the generous donations we get from alumni and friends. These donations are essential in allowing us to compete at the highest level while ensuring that the season’s cost is never a barrier to any player. Please consider making a donation to our team! <br/> <br/> You can donate to the endowment (where we access the spinoff each year), to our gift account (where we access the full amount next season), or to both.</Text>
                    </Column>
                    <Column gap="16px" align="stretch">
                        <Text style="subtitle">Instructions</Text>
                        <Column gap="12px" align="stretch">
                            <InstructionItem number={1} text={<Text style="subtitle">Go to this link</Text>} colorPalette={Object.values(green)} link="https://bbis.advancement.brown.edu/BBPhenix/giving/sports-foundation"/>
                            <InstructionItem number={2} text={<Text style="subtitle">Select “Search for a Fund”</Text>} colorPalette={Object.values(gray)}/>
                            <InstructionItem number={3} text={<Text style="subtitle">Search “Ultimate”</Text>} colorPalette={Object.values(gray)}/>
                            <InstructionItem number={4} text={<Text style="subtitle">Select “Club Ultimate Frisbee (Men's)” or “Michael Franz '03 Endowment”</Text>} colorPalette={Object.values(gray)}/>
                            <InstructionItem number={5} text={<Text style="subtitle">If you have any questions, please reach out to bmo.captains@gmail.com</Text>} colorPalette={Object.values(gray)} link="mailto:bmo.captains@gmail.com"/>
                        </Column>
                    </Column>
                </Column>
            </ModalContent>
        </ModalWrapper>
    )
}

function InstructionItem({number, text, colorPalette, link}: {number: number, text: React.ReactNode, colorPalette: string[], link?: string}) {
    return (
        <Row gap="16px" align="center">
            <InstructionNumber justify="center" align="center">
                <Text style="body" color="secondary">{number}</Text>
            </InstructionNumber>
            <LinkItem info={{textNode: text, link: link, colorPalette: colorPalette}}/>
        </Row>
    )
}

const InstructionNumber = styled(Column, {
    width: "32px",
    height: "32px",
    backgroundColor: "$gray3",
    borderRadius: "16px",
})