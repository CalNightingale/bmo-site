import { Article, NewsYear } from "./News";
import newsData from "../../public/content/news/news.json"

export function allNewsYears(): Map<number, NewsYear> {
    return new Map(Object.entries(newsData).map(e => {
        const year: number = parseInt(e[0])
        const value: NewsYear = e[1]
        return [year, value]
    }))
}

export function allNews(amount?: number): Article[] {
    const out: Article[] = []
    allNewsYears().forEach(year => out.push(...year.articles))
    return out.slice(0, amount)
}