import { FormContainerComponent, Title, Form, InputContent, ErrorMessage } from './Style'

import { useCallback, useState, useEffect } from 'react'

import { PostUserApi } from '../../../../services/postUserApi/PostUserApi'

export const FormContainer = ({ newsLetterStatus }) => {
  const [validation, setValidation] = useState({
    name: true,
    email: true,
    currentPage: "FormContainer",
  })

  const formSubmit = (event) => {
    event.preventDefault()

    const { name, email } = event.target

    const verifyName = (name) => {
      const nameIsValid = name.value.split(" ").length > 1
      return nameIsValid
    }

    const verifyEmail = (email) => {
      const emailIsValid = email.value.includes("@")
      return emailIsValid
    }
    const inputsIsValid = verifyName(name) && verifyEmail(email)

    if (inputsIsValid) {
      newsLetterStatus(true)
      PostUserApi({ name: name.value, email: email.value })
    }
    setValidation({
      name: verifyName(name),
      email: verifyEmail(email),
    })
  }

  const backToNewSubContainer = useCallback(() => {
    const { currentPage } = validation
    const isValid = currentPage === "NewSubContainer"
    if (isValid) {
      newsLetterStatus(false)
    }
  }, [validation, newsLetterStatus])

  useEffect(() => {
    backToNewSubContainer()
  }, [backToNewSubContainer])

  return (
    <FormContainerComponent className='centralizer'>
      <Title>
        <h2>Participe de nossas news com promoções e novidades!</h2>
      </Title>
      <Form onSubmit={formSubmit}>
        <InputContent errorVisibility={validation.name}>
          <input type='text' name='name' placeholder='Digite seu nome' />
          <ErrorMessage errorVisibility={validation.name}>
            Preencha com seu nome completo
          </ErrorMessage>
        </InputContent>

        <InputContent errorVisibility={validation.email}>
          <input type='email' name='email' placeholder='Digite seu email' />
          <ErrorMessage errorVisibility={validation.email}>
            Preencha com um e-mail válido
          </ErrorMessage>
        </InputContent>

        <input type='submit' value='Eu quero!' />
      </Form>
    </FormContainerComponent>
  )
}
