'use client'
import React, {useState} from 'react';
interface  Pages {
    page: Array<string>
}
interface BookInfo {
    bookTitle: string
    playerName: string
}
export const Bookpage = ({ pages, bookInfo } : {pages: Pages[], bookInfo:BookInfo }) => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    return (
        <>
            <article>
                <div className="bookPage ui ]">
                    {pages[currentPage].page}
                </div>
                <div className="bookPage ui ">
                    {pages[currentPage + 1] ? pages[currentPage + 1].page : null}
                </div>
            </article>
            <footer>
                <ol id="page-numbers">
                    <li>{currentPage + 1}
                        {currentPage > 0 && <button className="ui button secondary" onClick={()=>{setCurrentPage(currentPage-1)}}> back </button>}
                    </li>
                    <li>{currentPage + 2}
                        {currentPage > pages.length &&
                            <button className="ui button secondary" onClick={()=>{setCurrentPage(currentPage+1)}}> next </button>}
                    </li>
                </ol>
            </footer>
        </>
    )
};