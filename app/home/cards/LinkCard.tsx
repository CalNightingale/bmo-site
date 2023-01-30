import { ArrowRightIcon } from "@radix-ui/react-icons";
import { styled, UndecoratedA } from "../../common/theme/global";
import { Column, Row } from "../../common/Layouts";
import Text from "../../common/Text";
import { HomeCard } from "../HomeCard";

export interface LinkInfo {
    icon: React.ReactNode,
    text: string,
    description?: string,
    colorPalette: string[],
    onClick?: () => void,
    link?: string,
}

export function LinkCard({ title, description, links }: { title: string, description?: string, links: LinkInfo[] }) {
    return (
        <LinkCardBase style="outlined" align="stretch">
            <Text style="h3">{title}</Text>
            <Column gap="16px" gapMobile="12px" align="stretch" style={{ height: '-webkit-fill-available', }}>
                {links.map(info => <LinkItem key={info.text} info={info} />)}
            </Column>
        </LinkCardBase>
    )
}

const LinkCardBase = styled(HomeCard, {
    height: '-webkit-fill-available',

    variants: {
        style: {
            outlined: {
                border: "solid 1px $gray7",
            },
            filled: {
                backgroundColor: "$gray3",
            },
        },
    }
})

function LinkItem({ info }: { info: LinkInfo }) {
    const content = (
        <LinkItemBase
            align="flex-end"
            size={{ '@initial': 'mobile', '@md': 'desktop' }}
            padding="24px"
            paddingMobile="16px"
            style={{
                color: info.colorPalette[10],
                backgroundColor: info.colorPalette[2],
            }}
            justify="stretch"
            onClick={e => { if (info.onClick != undefined) info.onClick() }}
        >
            <Row align="center" gap="16px" style={{ width: '100%' }}>
                {info.icon}
                <Column
                    gap="4px"
                    style={{
                        flexGrow: "1",
                        flexBasis: "fit-content",
                    }}>
                    <Text style="subtitle">{info.text}</Text>
                    {info.description != undefined && <Text style="body">{info.description}</Text>}
                </Column>
                <div style={{ flexGrow: 1 }} />
                <ArrowRightIcon />
            </Row>
        </LinkItemBase >
    )
    return (info.link != undefined)
        ? (<LinkA href={info.link} target="_blank" rel="noopener noreferrer">
            {content}
        </LinkA>)
        : content
}

const LinkItemBase = styled(Row, {
    cursor: 'pointer',
    height: '-webkit-fill-available',
    width: '100%',

    variants: {
        size: {
            mobile: {
                borderRadius: '16px',
            },
            desktop: {
                borderRadius: '24px',
            },
        },
    },
})

const LinkA = styled(UndecoratedA, {
    height: '-webkit-fill-available',
    width: '100%',
    display: 'flex',
    justifyContent: 'stretch',
})