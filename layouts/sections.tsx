'use client'
import {Fragment, useState} from "react";
interface questions {
    question: string
    answer: string
}
interface sectionsInfo {
    title: string
    subTitle: string
    questions: questions[]
}

export const Sections = () => {
    const [sections, setSections] = useState<sectionsInfo[]>([{
        title: "Section 1",
        subTitle: "10 Questions",
        questions: [{
                question:"Question 1",
                answer: "answer1"
        },{
            question:"Question 2",
            answer: "answer1"
        } ]
    },{
        title: "Section 2",
        subTitle: "10 Questions",
        questions: [{
            question:"Question 1",
            answer: "answer1"
        },{
            question:"Question 2",
            answer: "answer1"
        } ]
    }]);
    const [currentSection, setCurrentSection] = useState<number>(0);
    const [currentQuestionSelected, setCurrentQuestionSelected] = useState<number>(0);
    const selectedQuestionClass="bg-[#69A3CC29] opacity-[16%] text-[#0C151D]";
    const questionClass="bg-white text-[#0C151D]";
    const selectedChevronButtonSelected=" carrotUp";
    return (
        <>
            <div className="flex ">
                <div className="flex flex-col sections">
                    {sections.map((section, index) => (
                        <div className="section">
                            <div className="flex">
                                <div>
                                    <h1 className="text-black">{section.title}</h1>

                                </div>
                                <div>
                                    <button className="ui button"> trashCanHere</button>
                                </div>
                                <div>
                                    <button className="ui button" onClick={()=>{setCurrentSection(index)}} > chevron {currentSection === index? "down" : 'up'}</button>
                                </div>
                            </div>
                            {currentSection === index && <h2 className="text-black">{section.subTitle}</h2> }
                            <div>
                                {currentSection === index && section.questions.map((question, index) => (
                                    <div className={index === currentQuestionSelected ? selectedQuestionClass : questionClass}>
                                        <h3>{question.question}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div> Question {currentQuestionSelected+1} </div>
                    <div>
                        {sections[currentSection].questions[currentQuestionSelected].question}
                    </div>
                </div>
            </div>
        </>
    )

}