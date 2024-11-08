"use client"
import {useEffect, useState} from "react";
import {initalizeStory, takeAction, findStory} from '@/queries/magicalArrivalQueries';
import {FieldValues, useForm} from "react-hook-form";
import {tarotCardPuller} from "@/layouts/tarotCardPuller";

export default function Page() {
    const {register, handleSubmit} = useForm();
    const {register: register2, handleSubmit: handleSubmit2} = useForm();
    const [pages, setPages] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [playerName, setPlayerName] = useState<string>('');
    const [bookTitle, setBookTitle] = useState<string>('');
    const [bookId , setBookId] = useState<string>('');
    const [requestInput, setRequestInput] = useState<boolean>(false);
    const [lastCardPulled, setLastCardPulled] = useState<string | null>(null);

    const storyCreator = async (data : FieldValues) =>  {
        setLoading(true);
        setPlayerName(data.playerName);
        setBookTitle(data.bookTitle);
        const story = await initalizeStory(data.playerName, data.bookTitle);
        setPages([story.description]);
        setBookId(story.missionId);
        localStorage.setItem('bookId', story.missionId);
        setCurrentPage(1);
        setLoading(false);
        setRequestInput(true);
    }
    const storyAction = async (data : FieldValues) => {
        setLoading(true);
        setLastCardPulled(null);
        const cardPulled= tarotCardPuller();
        const story = await takeAction(data.action, data.bookId, cardPulled);
        setPages([...pages, story.description]);
        setCurrentPage(currentPage + 1);
        setLoading(false);
        setLastCardPulled(cardPulled)
    }
    useEffect(() => {
        // if there is data in local storage, set the bookId and request the corrent book info from the api
        const bookId = localStorage.getItem('bookId');
        if (bookId) {
            setBookId(bookId);
            setCurrentPage(1);
            setLoading(true)
            const fetchStory = async () => {
                const story = await findStory(bookId);
                const pages = [];
                for (let i = 0; i < story.pages.length; i++) {
                    pages.push(story.pages[i].page);
                }
                setPages(pages);
                setPlayerName(story.bookInfo.playerName);
                setBookTitle(story.bookInfo.bookTitle);
                setCurrentPage(story.pages.length);
                setRequestInput(true);
                setLoading(false)
            }
            fetchStory();
        }
    },[]);


    return (
        <div>
            <div id="wrapper">
                <div id="container">
                    <section className="open-book">
                        <header>
                            <h1>{bookTitle} {currentPage > 0 && <button className="ui small button secondary" onClick={()=>{
                                navigator.clipboard.writeText(`https://bradfordrodgersfarmer.us/magicalArrival/story/${bookId}`).then(() => {
                                    alert("Copied url: " + `https://bradfordrodgersfarmer.us/magicalArrival/story/${bookId}`);
                                })
                            }}> share</button> } </h1>
                            <h6>{playerName}</h6>
                        </header>
                        <article>
                            {currentPage == 0  &&
                                <div className="inline-block min-h-[800px]">
                                    <h2 className="chapter-title">Welcome to the Magical Arrival RPG!</h2>
                                    <h1>How to Play:</h1>
                                    <div> <b>Choose Your Path:</b> Start your adventure by entering a character name and a title for what you want your book to be.</div>
                                    <div> <b>Draw Your Destiny:</b> After choosing an action, draw a Magical Arrival card. This card will introduce a new element to your story.</div>
                                    <div> <b>React and Adapt:</b> Based on the outcome of your action and the Magical Arrival card, you'll have new choices to make. Your decisions will shape the direction of your story.</div>
                                    <div> <b>Repeat and Enjoy:</b> Continue this cycle of action, card draw, and decision-making to create a unique and personalized narrative.</div>
                                    <div> <b>Share Your Story:</b> Share your story with others so they can read the story you wrote.</div>

                                    <form onSubmit={handleSubmit(storyCreator)}>
                                        <div className="field mt-10 useMargin">
                                            <label className="text-black block font-extrabold">Character Name:</label>
                                            <input
                                                className="border-solid border-b-2 border-black w-full" {...register("playerName")} />
                                        </div>
                                        <p/>
                                        <div className="field useMargin mb-5">
                                            <label className="text-black block font-extrabold">Book Title:</label>
                                            <input
                                                className="border-solid  border-b-2 border-black w-full" {...register("bookTitle")} />
                                        </div>
                                        <p/>
                                        <button type="submit" className="mt-10 ui primary button  "> Write your tail</button>
                                    </form>
                                </div>
                            }

                            {currentPage > 0  &&
                                <div className="bookPage ui min-h-[800px]">
                                    {lastCardPulled && <h2 className="chapter-title">={lastCardPulled}</h2> }
                                    {pages.length && <p>{pages[currentPage - 1]}</p>}
                                </div>
                            }

                            <div className="bookPage  min-h-[800px]">
                                {loading &&
                                    <div role="status" className="max-w-sm animate-pulse loading">
                                        <div
                                            className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 "></div>
                                        {Array.from(Array(30), (e, i) => {
                                            const randomWidthBetween40and50 = Math.floor(Math.random() * 20) + 40;
                                            const className = `h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-${randomWidthBetween40and50} mb-2.5`;
                                            return (
                                                <div className={className}></div>
                                            )
                                        })}
                                    </div>
                                }
                                {requestInput && !loading &&
                                    <form onSubmit={handleSubmit2(storyAction)}>
                                        <div className="field">
                                            <label className="text-black block font-medium">What do you do? </label>
                                            <textarea id="message"
                                                      rows={18}

                                                      className="textarea block p-2.5  mb-10 mt-5 w-full text-sm rounded-lg border border-gray-900 focus:ring-blue-500 focus:border-blue-500 "
                                                      placeholder="Write what you will do..." {...register2("action")}></textarea>

                                            <input type="hidden" hidden value={bookId} {...register2("bookId")} />
                                        </div>
                                        <p/>
                                        <button type="submit" className="mt-10 mr-auto ml-auto ui primary button centered  rounded-full"> Pull a card and Take
                                            Action!
                                        </button>
                                    </form>
                                }

                            </div>
                        </article>
                        <footer>
                            <ol id="page-numbers">
                                <li>{currentPage > 0 ? currentPage  : 'cover'}
                                </li>
                                <li>{currentPage + 1}
                                </li>
                            </ol>
                        </footer>
                    </section>
                </div>
            </div>


        </div>
    )
}