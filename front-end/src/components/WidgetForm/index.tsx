import { CloseButton } from "../CloseButton"

import BugImage from '../../assets/Bug.svg'
import IdeaImage from '../../assets/Idea.svg'
import ThoughtImage from '../../assets/Thought.svg'

import { useState } from "react"

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"
import { FeedbackContentStep } from "./Steps/FeedbackContentStep"
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep"

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: BugImage,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: IdeaImage,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'outro',
        image: {
            source: ThoughtImage,
            alt: 'Imagem de uma nuvem'
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes

export const WidgetForm = () => {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    const handleRestarFeedbackType = () => {
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto mb-4">
            { feedbackSent ? (
                    <FeedbackSuccessStep  onFeedbackRestartRequested={handleRestarFeedbackType}/>
                ) : (
                    <>
                        {!feedbackType ? (
                            <FeedbackTypeStep 
                                onFeedbackTypeChanged={setFeedbackType} 
                            />
                        ) : 
                        (
                            <FeedbackContentStep 
                                feedbackType={feedbackType}
                                onFeedbackRestartRequested={handleRestarFeedbackType}
                                onFeedbackSent={() => {setFeedbackSent(true)}}
                            />
                        )}
                    </>
                )
            }

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}