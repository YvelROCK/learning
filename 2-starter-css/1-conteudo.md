# Introdução

## O que significa CSS ?

*Cascating Style Sheet
*Código para criar estilos HTML
*HTML é a estrutura, e o CSS é a beleza
*Não é uma linguagem de programação
*É uma linguagem stylesheet

# Comentários

*Comentar o CSS para uma melhor organização, sem interferir nele
    /* */

# Anatomia

h1 {
    color: blue;
    font-size: 60px;
    background: gray;
}

*Selector
*Declaration
*Properties
*Properties Value

# Selectors

*Conecta um elemento HTML com o CSS

## Tipos

*Global selector `*`;
*Element/type selector `h1, h2, p, div`
*ID Selector `#box, #container`
*Class Selector `.qc1, .qc2`
*Atribute selector, Pseudo-class, Pseudo-element, e outros;

# Caixas

*Quase tudo no CSS são caixas
*Posicionamento, tamanhos, espaçamentos, bordas, cores
*Caixa pode ficar ao lado uma da outra, ou acima
*Elementos HTML são caixas

# Adicionando CSS

## inline
*atributo `style`

## <style></style>
*tag html que irá conter o css

## <link>
*MELHOR PRATICA
*arquivo css externo

## @import
*atrasa a aplicação
*arquivo css externo

# A cascata {cascading}
 A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento

*Seu estilo é lido de cima para baixo

É levado em consideração 3 fatores

1.Origem do estilo
2.Especificidade
3.Importância

## Origem do Estilo

inline> > tag style > tag link

## Especificidade

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

0. Universal selector, combinators e negation pseudo-class (>not())
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e attribute selectors ([type="radio"])
100. ID selector
1000. Inline

## Regra `!important`

*EVITAR USAR
*Quebra a cascata
*Não é uma boa prática
obs: As vezes em uma biblioteca que você não consiga modificar, é permitido.

# At-rules

*Está relacionado ao comportamento do CSS
*Começa com o sinal de `@` seguido do identificador e valor

## Exemplos comuns

-@import /* incluir um CSS externo */

-@media /* regras condicionais para dospositivos */

-@font-face /* fontes externas */

-@keyframes /* Animation */

```css

@import url("http://local.com/style.css");

@media (min-width: 500px) {
    /* rules here */
}

@font-face {
    /* rules here */
}

@keyframes nameofanimation {
    /* rules here */
}
```

# Shorthand

*junção de propriedades
*resumido
*legível

```css
{
    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand */
    background: #000 url(images/bg.gif) no-repeat left top;

    /* font properties */
    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.2;
    font-family: Arial, sans-serif;

    /* font shorthand */
    font: italic bold .8em/1.2 Arial, sans-serif;
}

```

## Detalhes

*não irá considerar propriedades anteriores
*valores não especificados irão assumir o valor padrão
*geralmente, a ordem descrita não importa, mas, se houver muitas propriedades
 com valores semelhantes, poderemos encontrar problemas.

# Funções

*nome seguido de abre e fecha parentesis
*recebe argumentos

## Exemplos

```css
@import url("http://urlaqui.com/style.css");

{
    color: rgb(255, 0, 100);
    width: calc(100% - 10px)
}

```

# Vendor Prefixes

Permite que browsers adcionem `features` a fim de colocar em uso alguma novidade
que vemos no css

## Exemplo

```css
p {
  -webkit-background-clip: text; /* Chrome, Safari, iOS e Android */
  -moz-background-clip: text;    /* Mozilla (Firefox) */
  -ms-background-clip: text;     /* Internet Explorer */
  -o-background-clip: text;      /* Opera */
}
```

## Consultas
[https://caniuse.com/]
[https://ireade.github.io/which-vendor-prefix/]