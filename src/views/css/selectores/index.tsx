import { Code } from "@/components/atoms/Code";
import { Text } from "@/components/atoms/Text";

const Selectores = () => {
  return (
    <>
      <h1>Selectores</h1>

      <Text>
        <p>
          Los selectores definen <strong>sobre qué elementos</strong> se
          aplicará un conjunto de reglas CSS.
        </p>
      </Text>

      <Text>
        <h2>Básicos</h2>

        <ul>
          <li>
            <strong>Selectores de tipo</strong>
            <p>
              Seleccionan todos los elementos del tipo dado dentro de un
              documento.
            </p>
            <a
              href="https://developer.mozilla.org/es/docs/Web/CSS/Type_selectors#ejemplo"
              target="_blank"
            >
              Ejemplo
            </a>
          </li>

          <li>
            <strong>Selectores de clase</strong>
            <p>
              Selecciona todos los elementos que tienen el atributo{" "}
              <Code>class</Code> especificado.
            </p>
            <a
              href="https://developer.mozilla.org/es/docs/Web/CSS/Class_selectors#ejemplo"
              target="_blank"
            >
              Ejemplo
            </a>
          </li>

          <li>
            <strong>Selector de ID</strong>
            <p>
              Selecciona un elemento basándose en el valor de su atributo{" "}
              <Code>id</Code>. Solo debe haber un elemento con un determinado ID
              dentro de un documento.
            </p>
            <a
              href="https://developer.mozilla.org/es/docs/Web/CSS/ID_selectors#ejemplo"
              target="_blank"
            >
              Ejemplo
            </a>
          </li>

          <li>
            <strong>Selector universal</strong>
            <p>Selecciona todos los elementos.</p>
            <a
              href="https://developer.mozilla.org/es/docs/Web/CSS/Universal_selectors"
              target="_blank"
            >
              Ejemplo
            </a>
          </li>

          <li>
            <strong>Selector de atributo</strong>
            <p>
              Selecciona elementos basándose en el valor de un determinado
              atributo.
            </p>
            <a
              href="https://developer.mozilla.org/es/docs/Web/CSS/Attribute_selectors#ejemplos"
              target="_blank"
            >
              Ejemplo
            </a>
          </li>
        </ul>
      </Text>
      <Text>
        <h2>Combinadores</h2>

        <ul>
          <li>
            <strong>Combinador de hijo</strong>
            <p>
              El combinador <Code>{">"}</Code> selecciona los elementos que son
              hijos <strong>directos</strong> del primer elemento.
            </p>
          </li>
        </ul>
      </Text>
    </>
  );
};

export default Selectores;
