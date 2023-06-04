import { Link } from '@/components/atoms/Link'
import { Text } from '@/components/atoms/Text'
import { Codesandbox } from '@/components/organisms/Codesandbox'

const CascadaYHerencia = () => {
  return (
    <>
      <h1>Cascada y herencia</h1>

      <Text tag="p">
        CSS significa <strong>hojas de estilo en cascada (Cascading Style Sheets)</strong>, y es muy
        importante entender la palabra <strong>cascada</strong>. Cuando varias reglas apliquen a un
        elemento, la última regla será la que sobreescriba a las anteriores.
      </Text>
      <Text tag="p">
        Por otro lado, y muy relacionado con la cascada, existe el concepto de{' '}
        <Link href="/css/especificidad">especificidad</Link>. Son mecanismos que controlan qué regla
        se aplica cuando aparecen conflictos (o varias reglas que quieran modificar un mismo
        elemento). Es posible que la regla que se aplica finalmente a tu elemento no sea la que
        esperas, por lo que debes comprender cómo funcionan estos mecanismos.
      </Text>

      <Text>Veámoslo con algunos ejemplos prácticos</Text>

      <Codesandbox embedHash="cascada-herencia-83n1db" />

      <Text tag="p">
        También es significativo el concepto de <strong>herencia</strong>, que significa que algunas
        propiedades CSS heredan por defecto los valores establecidos en el elemento padre, pero
        otras no. Esto también puede causar una respuesta diferente a la que esperas. Además de
        ello, es posible forzar la herencia de ciertas propiedades en caso de que nos pueda
        interesar.
      </Text>

      <Text>Pero basta de teorías, ¡pongamos lo dicho en práctica!</Text>
    </>
  )
}

export default CascadaYHerencia
