"use client"

import { useEffect, useState } from 'react';
import HomeCardLayout from './HomeCardLayout';
import LandingHeader from './LandingHeader';
import { useRouter } from 'next/navigation';
import ImageCard from './cards/ImageCard';
import TextCard from './cards/TextCard';
import { LinkCard } from './cards/LinkCard';
import { blue, green, indigo, orange, red } from '@radix-ui/colors';
import { ArchiveIcon, EnvelopeClosedIcon, EnvelopeOpenIcon, FramerLogoIcon, Link1Icon, TwitterLogoIcon } from '@radix-ui/react-icons';
import {ContentCard, ContentItem} from './cards/ContentCard';
import { TipItem } from '../zipstips/TipItem';
import { randomTip } from '../zipstips/Tips';
import { ZipsTip } from '../zipstips/ZipsTip';
import aboutUs from "../../public/content/home/aboutus.json"
import homeVideos from "../../public/content/home/homeVideos.json"
import * as Dialog from '@radix-ui/react-dialog';
import { DialogOverlay } from '../common/Dialog';
import { SupportPopup } from '../support/SupportPopup';
import {videoThumbnail} from "../videos/Video";
import { allNews } from '../news/NewsRepository';
import { styled } from "styled-system/jsx"
import Image from 'next/image';
import { css } from 'styled-system/css';

export default function HomePage() {
  const router = useRouter();
  const [tipOfTheDay, setTipOfTheDay] = useState<ZipsTip>();
  const [isSupportPopupOpen, setSupportPopupOpen] = useState(false);
  useEffect(() => setTipOfTheDay(randomTip()), []) //need to set using effect for SSR to work
  useEffect(() => console.log("isSupportPopupOpen = ", isSupportPopupOpen), [isSupportPopupOpen])
  return (
    <HomeCardLayout>
      <LandingHeader />
      <Image
        width={0}
        height={0}
        src="/images/team_crump_2022.jpg"
        alt="2022 team photo"
        sizes="100vw"
        className={css({
          flexGrow: 1,
          maxHeight: '100%',
          objectFit: 'cover',
          width: '100%',
          borderRadius: '24px',
          alignSelf: "stretch",  
        })} />
      <ImageCard title="Roster" imageSrc="/images/team_crump_2022.jpg" onClick={() => router.push('/roster')} />
      <TextCard title={aboutUs.title} text={aboutUs.text} />
      <LinkCard
        title="Interested in trying out or playing ultimate at Brown?"
        links={[
          { icon: (<EnvelopeOpenIcon />), text: "Email the captains", colorPalette: Object.values(red), link: "mailto:bmo.captains@gmail.com" },
          { icon: (<EnvelopeClosedIcon />), text: "Join the listserv", colorPalette: Object.values(red), link: "https://listserv.brown.edu/cgi-bin/wa?SUBED1=BMOTION" },
        ]} />
      <LinkCard
        title="Follow Us"
        links={[
          { icon: (<TwitterLogoIcon />), text: "Twitter", colorPalette: Object.values(blue), link: "https://twitter.com/BMoUltimate" },
          { icon: (<FramerLogoIcon />), text: "Facebook", colorPalette: Object.values(indigo), link: "https://www.facebook.com/bmoultimate/" },
        ]} />
      <LinkCard
        title="Support Us"
        spanDesktop={2}
        links={[
          { icon: (<ArchiveIcon />), text: "Buy team merch on Etsy", description: "These items are sold at cost, so feel free to donate as well!", colorPalette: Object.values(orange), link: "https://www.etsy.com/shop/bmomerchandise" },
          { icon: (<Link1Icon />), text: "Donate to the team", colorPalette: Object.values(green), onClick: () => {
              console.log("opening support popup")
              setSupportPopupOpen(true)
          } },
        ]} />
        {isSupportPopupOpen && <Dialog.Root defaultOpen onOpenChange={o => setSupportPopupOpen(o)}>
            <Dialog.Portal>
                <DialogOverlay/>
                <SupportPopup onClose={() => setSupportPopupOpen(false)}/>
            </Dialog.Portal>
        </Dialog.Root>}
        <ContentCard title="Watch" onMore={() => router.push('/videos')}>
            {homeVideos.videos.map((v) => <ContentItem key={v.link} title={v.title} link={v.link} imageSrc={videoThumbnail(v)}/>)}
        </ContentCard>
        <ContentCard title="News" onMore={() => router.push('/news')}>
            {allNews(3).map(pair => {
              const [a, year] = pair
              return <ContentItem key={a.link} title={a.headline} description={a.dropline ?? a.text} link={a.link} imageSrc={`content/news/${year}/${a.image}`}/>
            })}
        </ContentCard>
        <ContentCard title="Zip’s Tip of the Day" onMore={() => router.push('/zipstips')} spanDesktop="two">
            {tipOfTheDay !== undefined && <TipItem tip={tipOfTheDay} style="tipCard" />}
        </ContentCard>
    </HomeCardLayout>
  );
}