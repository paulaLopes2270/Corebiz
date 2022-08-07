import { useState } from "react"
import { FormContainer } from "./components/newsPostsContainer/NewsPostsContainer"
import { Component } from "./Style"
import { NewSubContainer } from './components/newSubContainer/NewSubContainer'

export const NewsPosts = () => {
    const [newsLetterStatus, setNewsletterStatus] = useState(true)

    const setStatus = () => setNewsletterStatus(!newsLetterStatus)
    return (
        <Component>

            {newsLetterStatus ? (
                <FormContainer newsLetterStatus={setStatus} />
            ) : (
                <NewSubContainer newsLetterStatus={setStatus} />
            )}
        </Component>
    )
}