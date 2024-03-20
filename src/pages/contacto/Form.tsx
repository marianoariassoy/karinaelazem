import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Loader from '../../components/Loader'
import { useDataContext } from '../../context/useDataContext'

interface Inputs {
  name: string
  phone: string
  email: string
  message: string
}

const FormContacto = () => {
  const { lan } = useDataContext()
  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: Inputs) => {
    setSending(true)
    const sender = {
      to: 'karielazem@gmail.com',
      from: 'karielazem@gmail.com',
      from_name: 'Karina El Azem',
      subject: 'Contacto'
    }

    axios.post(' ', { ...data, ...sender }).then(data => {
      if (data.data === 'success') {
        setSended(true)
        setSending(false)
      } else {
        setError(true)
        setSending(false)
      }
    })
  }

  const texts = {
    en: {
      name: 'Name',
      phone: 'Phone',
      email: 'E-mail',
      message: 'Message',
      error: 'An error occurred while sending the message',
      success: 'Your message was sent. Thank you for contacting me.',
      send: 'Send',
      required: 'Please complete this field'
    },
    es: {
      name: 'Nombre',
      phone: 'Telefono',
      email: 'E-mail',
      message: 'Mensaje',
      error: 'Se produjo un error al enviar el mensaje',
      success: '¡Tu mensaje fue enviado! Gracias por contactarte con conmigo.',
      send: 'Enviar',
      required: 'Por favor completá este campo'
    }
  }

  const Error = () => {
    return <div className='text-sm text-primary font-medium'>{texts[lan].required}</div>
  }

  return (
    <div>
      {error ? (
        <div className='text-xl text-primary font-medium'>{texts[lan].error}</div>
      ) : sended ? (
        <div className='text-primary font-medium text-xl'>{texts[lan].success}</div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-y-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='block font-medium'>{texts[lan].name}</label>
              <input
                className='w-full border bg-transparent border-black h-14 px-4'
                {...register('name', { required: true })}
              />
              {errors.name && <Error />}
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='block font-medium'>E-mail</label>
              <input
                className='w-full border bg-transparent border-black h-14 px-4'
                {...register('email', { required: true })}
              />
              {errors.email && <Error />}
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='block font-medium'>{texts[lan].message}</label>
              <textarea
                className='w-full border bg-transparent border-black h-44 p-4'
                {...register('message', { required: true })}
              />
              {errors.message && <Error />}
            </div>
            <div className='flex justify-end'>
              {sending ? (
                <div className='h-14'>
                  <Loader />
                </div>
              ) : (
                <button
                  type='submit'
                  id='button-form'
                  className='font-secondary hover:bg-black text-white h-14 bg-primary transition-all px-6'
                >
                  {texts[lan].send}
                </button>
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default FormContacto
