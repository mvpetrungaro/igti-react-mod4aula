import './App.css'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  color: blue;
`

const teste = (texto: TemplateStringsArray) => {
  console.log(texto)
}

teste`
  a
`

console.log(styled.h1)

// export interface ThemedStyledFunctionBase<
//     C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
//     T extends object,
//     O extends object = {},
//     A extends keyof any = never
// > {
//     (first: TemplateStringsArray): StyledComponent<C, T, O, A>;
//     (
//         first:
//             | TemplateStringsArray
//             | InterpolationFunction<ThemedStyledProps<StyledComponentPropsWithRef<C> & O, T>>,
//         ...rest: Array<Interpolation<ThemedStyledProps<StyledComponentPropsWithRef<C> & O, T>>>
//     ): StyledComponent<C, T, O, A>;
//     <U extends object>(
//         first:
//             | TemplateStringsArray
//             | CSSObject
//             | InterpolationFunction<ThemedStyledProps<StyledComponentPropsWithRef<C> & O & U, T>>,
//         ...rest: Array<Interpolation<ThemedStyledProps<StyledComponentPropsWithRef<C> & O & U, T>>>
//     ): StyledComponent<C, T, O & U, A>;
// }

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StyledH1>Olá, mundo!</StyledH1>
      </header>
    </div>
  )
}
