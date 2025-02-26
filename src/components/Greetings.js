export default function Greetings({ lang, children}) {

  const greting = (lang) => {
    if (lang === 'de'){
      return 'Hallo'
    } else if (lang === 'en'){
      return 'Hello'
    } else if (lang === 'es'){
      return 'Hola'
    } else if (lang === 'fr'){
      return 'Bonjour'
    }
  }

  return (
    <p style={{border: '1px solid #000', margin: '10px', padding: '0 10px'}}>{greting(lang)} {children}</p>
  )
}
