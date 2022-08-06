import {FormContainerComponent, Title, Form, InputContent, ErrorMessage} from './Style'


export const NewsPostsContainer = () => {

  return (

    <FormContainerComponent className='centralizer'>
      <Title>
        <h2>Participe de nossas news com promoções e novidades!</h2>
      </Title>
      <Form >
        <InputContent >
          <input type='text' name='name' placeholder='Digite seu nome' />
          <ErrorMessage >
            Preencha com seu nome completo
          </ErrorMessage>
        </InputContent>

        <InputContent >
          <input type='email' name='email' placeholder='Digite seu email' />
          <ErrorMessage >
            Preencha com um e-mail válido
          </ErrorMessage>
        </InputContent>

        <input type='submit' value='Eu quero!' />
      </Form>
    </FormContainerComponent>
  )
}