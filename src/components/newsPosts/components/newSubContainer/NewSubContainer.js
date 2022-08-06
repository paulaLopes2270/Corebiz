import { NewSubContainerComponent } from "./Style"

export const NewSubContainer = ({ newsLetterStatus }) => {
    const backToFormContainer = (event) => {
      event.preventDefault()
      newsLetterStatus(true)
    }
    return (
      <NewSubContainerComponent className='centralizer'>
        <form>
          <h3>Seu e-mail foi cadastrado com sucesso!</h3>
          <h4>
            A partir de agora você receberá as novidade e ofertas exclusivas.
          </h4>
          <input
            type='submit'
            value='Cadastrar novo e-mail'
            onClick={backToFormContainer}
          />
        </form>
      </NewSubContainerComponent>
    )
  }
  