import { findStory } from '@/queries/magicalArrivalQueries';
import { Bookpage } from '@/layouts/bookpage';
export default async function Page({params})  {
    const {pages, bookInfo} = await findStory(params.story[1]);
    return (
        <div>
            <div id="wrapper">
                <div id="container">
                    <section className="open-book">
                        <header>
                            <h1>{bookInfo?.bookTitle ? bookInfo.bookTitle : null }</h1>
                            <h6> Written by {bookInfo?.playerName ? bookInfo.playerName : null}</h6>
                        </header>
                        <Bookpage pages={pages} bookInfo={bookInfo} />
                    </section>
                </div>
            </div>
        </div>
    )
}