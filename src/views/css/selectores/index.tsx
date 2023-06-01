import { Code } from '@/components/atoms/Code'
import { Link } from '@/components/atoms/Link'
import { Text } from '@/components/atoms/Text'
import { ExerciseBox } from '@/components/molecules/ExerciseBox'

const Selectores = () => {
  return (
    <>
      <h1>Selectores</h1>

      <Text>
        <p>
          Los selectores definen <strong>sobre qué elemento(s)</strong> se aplicará(n) un conjunto
          de reglas CSS.
        </p>
      </Text>

      <Text>
        <h2>Básicos</h2>

        <ul>
          <li>
            <strong>Selectores de tipo</strong>
            <p>Seleccionan todos los elementos del tipo dado dentro de un documento.</p>
            <Link href="https://developer.mozilla.org/es/docs/Web/CSS/Type_selectors#ejemplo">
              Ejemplo
            </Link>
          </li>

          <li>
            <strong>Selectores de clase</strong>
            <p>
              Selecciona todos los elementos que tienen el atributo <Code>class</Code> especificado.
            </p>
            <Link href="https://developer.mozilla.org/es/docs/Web/CSS/Class_selectors#ejemplo">
              Ejemplo
            </Link>
          </li>

          <li>
            <strong>Selector de ID</strong>
            <p>
              Selecciona un elemento basándose en el valor de su atributo <Code>id</Code>. Solo debe
              haber un elemento con un determinado ID dentro de un documento.
            </p>
            <Link href="https://developer.mozilla.org/es/docs/Web/CSS/ID_selectors#ejemplo">
              Ejemplo
            </Link>
          </li>

          <li>
            <strong>Selector universal</strong>
            <p>Selecciona todos los elementos.</p>
            <Link href="https://developer.mozilla.org/es/docs/Web/CSS/Universal_selectors">
              Ejemplo
            </Link>
          </li>

          <li>
            <strong>Selector de atributo</strong>
            <p>Selecciona elementos basándose en el valor de un determinado atributo.</p>
            <Link href="https://developer.mozilla.org/es/docs/Web/CSS/Attribute_selectors#ejemplos">
              Ejemplo
            </Link>
          </li>
        </ul>
      </Text>
      <Text>
        <h2>Combinadores</h2>

        <ul>
          <li>
            <strong>Combinador de hijo</strong>
            <p>
              El combinador <Code>{'>'}</Code> selecciona los elementos que son hijos{' '}
              <strong>directos</strong> del primer elemento.
            </p>
            <Link href="https://developer.mozilla.org/es/docs/Web/CSS/Child_combinator#ejemplo">
              Ejemplo
            </Link>
          </li>

          <li>
            <strong>Combinador de descendiente</strong>
            <p>
              El combinador <Code>(espacio)</Code> selecciona todos los elementos que son
              descendientes del primer elemento.
            </p>
            <Link href="https://developer.mozilla.org/es/docs/Web/CSS/Descendant_combinator#ejemplo">
              Ejemplo
            </Link>
          </li>

          <li>
            <strong>Combinador de hermanos adyacentes</strong>
            <p>
              El combinador <Code>+</Code> selecciona hermanos adyacentes. Esto quiere decir que el
              segundo elemento sigue directamente al primero y ambos comparten el mismo elemento
              padre.
            </p>
            <Link href="https://developer.mozilla.org/es/docs/Web/CSS/Adjacent_sibling_combinator#ejemplo">
              Ejemplo
            </Link>
          </li>

          <li>
            <strong>Combinador general de hermanos</strong>
            <p>
              El combinador <Code>~</Code> selecciona hermanos. Esto quiere decir que el segundo
              elemento sigue al primero (no necesariamente de forma inmediata) y ambos comparten el
              mismo elemento padre.
            </p>
            <Link href="https://developer.mozilla.org/es/docs/Web/CSS/General_sibling_combinator#ejemplo">
              Ejemplo
            </Link>
          </li>
        </ul>
      </Text>

      <ExerciseBox>
        ¡Trata de completar todos los niveles del siguiente{' '}
        <Link href="https://flukeout.github.io/">juego online</Link>!
      </ExerciseBox>
    </>
  )
}

export default Selectores
