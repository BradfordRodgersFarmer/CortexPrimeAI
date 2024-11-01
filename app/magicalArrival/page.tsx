"use client"
import Head from 'next/head';
import { useState } from "react";
import {initalizeStory, takeAction} from '@/queries/magicalArrivalQueries';
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
        setCurrentPage(1);
        setLoading(false);
        setRequestInput(true);
    }
    const storyAction = async (data : FieldValues) => {
        setLoading(true);
        setLastCardPulled(null);
        const cardPulled= tarotCardPuller();
        const story = await takeAction(data.bookId, data.action, cardPulled);
        setPages([...pages, story.description]);
        setCurrentPage(currentPage + 1);
        setLoading(false);
        setLastCardPulled(cardPulled)
    }

    return (
        <div>
            <div id="wrapper">
                <div id="container">
                    <section className="open-book">
                        <header>
                            <h1>{bookTitle}</h1>
                            <h6>{playerName}</h6>
                        </header>
                        <article>
                            {currentPage == 0  &&
                                <div className="inline-block min-h-[800px]">
                                    <h2 className="chapter-title">Magical Arrival</h2>
                                    <h1>Who has arrived</h1>
                                    <form onSubmit={handleSubmit(storyCreator)}>
                                        <div className="field">
                                            <label className="text-black block font-medium">Character Name</label>
                                            <input
                                                className="border-solid border-b-2 border-black" {...register("playerName")} />
                                        </div>
                                        <p/>
                                        <div className="field">
                                            <label className="text-black block font-medium">Book Title</label>
                                            <input
                                                className="border-solid  border-b-2 border-black" {...register("bookTitle")} />
                                        </div>
                                        <p/>
                                        <button type="submit" className="ui primary button"> Write your tail</button>
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
                                <li>{currentPage > 0 ? currentPage  : 'cover'}</li>
                                <li>{currentPage +1 }</li>
                            </ol>
                        </footer>
                    </section>
                </div>
            </div>


        </div>
    )
}