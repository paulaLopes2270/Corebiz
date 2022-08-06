import { useState } from "react"
import { NewsPostsContainer } from "./components/NewsPostsContainer"
import { Component, NewSubContainerComponent } from "./Style"

export const NewsPosts = () => {
    // const [newsPostsrStatus, setNewsPostsStatus] = useState(true)

    // const setStatus = () => setNewsletterStatus(!newsLetterStatus)
    return (
        <Component>
            {/* {newsLetterStatus ? ( */}
            <NewsPostsContainer />
            {/* ) : ( */}
            {/* <NewSubContainerComponent className='centralizer'>
                <form>
                    <h3>Seu e-mail foi cadastrado com sucesso!</h3>
                    <h4>
                        A partir de agora você receberá as novidade e ofertas exclusivas.
                    </h4>
                    <input
                        type='submit'
                        value='Cadastrar novo e-mail'
                    //   onClick={backToFormContainer}
                    />
                </form>
            </NewSubContainerComponent> */}
            {/* )} */}
        </Component>
    )
}