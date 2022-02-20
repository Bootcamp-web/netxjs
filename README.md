# Netx-js

1. [Inicializamos NPM e instalamos paquetes necesarios](#schema1)
1. [ Ejecutamos Typescript ](#schema2)
1. [ Scripts para ejecutar `Netsjs` ](#schema3)
1. [ Creamos carpeta `pages` ](#schema4)
1. [ Creamos el componente `Menu`y modificamos el archivo `index.tsx`](#schema5)
1. [ Creamos la página `projects` ](#schema6)
1. [ Creamos un `layout` para el Menú ](#schema7)
1. [ Transicciones de react ](#schema7)
1. [ Transicciones de react](#schema8)
1. [ React-sweet-state ](#schema9)
1. [ Creamos un botón reutilizable `MyButton`.](#schema10)
1. [ Modificamos el archivo `Counter.tsx`](#schema11)
1. [ Doc](#schema12)

<hr>

<a name="schema1"></a>


# 1 Inicializamos NPM e instalamos paquetes necesarios
~~~bash
npm init -y
~~~ 
Paquetes primeros
~~~ bash
npm install typescript @types/node @types/react react react-dom next  eslint
~~~
Configuramos `eslint`
~~~
npm init @eslint/config
~~~


<hr>

<a name="schema2"></a>

# 2 Ejecutamos Typescript 

~~~bash
tsc --init
~~~


<hr>

<a name="schema3"></a>

# 3 Scripts para ejecutar `Netsjs`
~~~json
    "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
~~~

<hr>

<a name="schema4"></a>

# 4 Creamos carpeta `pages`
Nextjs espera que todas la páginas de nuestro proyecto esté dentro de la carpeta `pages` y creamos el archivo `index.tsx`
index.tsx`
~~~tsx
export default () => <p>Hello World</p>;
~~~

<hr>

<a name="schema5"></a>

# 5 Creamos el componente `Menu`y modificamos el archivo `index.tsx`
~~~tsx
import React from 'react';
import Link from 'next/link';

const Menu = () => {
  
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/about">About me</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Menu;
~~~
- `index.tsx`
~~~tsx

import Menu from "../components/Menu";

export default () => (<main>
        <Menu/>
        <p>Welcome my page</p>
        
</main>

);
~~~

<hr>

<a name="schema6"></a>

# 6 Creamos la página `projects`
~~~tsx
import Menu from "../components/Menu";

export default () => (<main>
    <Menu/>
    <p>Projects</p>
    
</main>

);
~~~
<hr>

<a name="schema7"></a>

# 7 Creamos un `layout` para el Menú
- Creamos el archivo `_app.tsx`
~~~ts 
import  Menu  from '../components/Menu'

const MyApp= ({ Component, pageProps }) =>{
    <>
        <header>
            <Menu/>       
        </header>
        <main>
            <Component {...pageProps}></Component>
        </main>
    </>

}

export default MyApp;
~~~

- Modificamos el archivo `index.tsx`y el de `projects.tsx`.
- `indext.tsx`   
~~~ts
const IndexPage = () => (
    <main>
        <p>Welcome my page</p>
        
    </main>

);

export default IndexPage;
~~~
- `projects.tsx`
~~~ts
import MyButton from "../components/MyButtom";


const Projects = () => (
    <div>
      <p>Projects</p>
      <MyButton/>
    </div>
  );
  
  export default Projects;
~~~
<hr>

<a name="schema8"></a>

# 8 Transicciones de react
- Instalar:
~~~bash
npm install react-transition-group @types/react-transition-group
~~~
- Añadimos a `_app.tsx`
~~~ts
import React from "react"
import  Menu  from '../components/Menu'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const MyApp = (props) =>{
    const {Component, pageProps,router}= props
   
    return   (
        <>
            <header>
                <Menu/>       
            </header>
            <main>
            <TransitionGroup className="todo-list" style={{ display: 'grid' }}>
            <CSSTransition
                key={router.asPath}
                timeout={1500}
                transitionname="app-page"
            >
                <div className="page">
                    <Component {...pageProps} />
                </div>
            </CSSTransition>
            </TransitionGroup>
            </main>
        </>

    )
}
  

export default MyApp;
~~~

- Y le añadimos estilos
~~~html
     <style jsx>
        {`
				main {
					position: relative;
					overflow: hidden;
				}
				.page {
					transition: 0.5s all;
					grid-row-start: 1;
					grid-column-start: 1;
				}
				.exit-active {
					transform: translateX(-100%);
				}
			`}
      </style>
~~~

<hr>

<a name="schema9"></a>

# 9 React-sweet-state
- Instalamos 
~~~
npm i react-sweet-state
~~~
- Creamos el archivo `Counter.tsx`
~~~tsx
import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    count: 0,
  },
  // actions that trigger store mutation
  actions: {
    increment:
      () =>
      ({ setState, getState }) => {
        // mutate state synchronously
        setState({
          count: getState().count + 1,
        });
      },
  },
  // optional, mostly used for easy debugging
  name: 'counter',
});

export const useCounter = createHook(Store);
~~~
- Modificamos el `about.tsx`
~~~tsx
import React from 'react';
import MyButtom from '../components/MyButtom';
import {useCounter} from "../lib/Pokedex"

const About= () => {
  const [state, {increment}]= useCounter();
  return(
    <div>
      <p>About</p>
      <img src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5beaba975bafe86f2c2b41c4/marvel-heroes_0.jpg" alt="" width= "500px" />
      <MyButtom  text = "Add one"/>
    </div>
  
  )

}
 

export default About;
~~~
<hr>

<a name="schema10"></a>

# 10 Creamos un botón reutilizable `MyButton`.
Para cambiar el texto del botón y la función a ejecutar en el botón
~~~ts
import React from 'react';
import { Button } from 'antd';


const MyButtom = (props) => {
    const {text, actionsButton} = props
return(

    <Button type="primary" onClick={actionsButton}>{text}</Button>
)
};

export default MyButtom

~~~

<hr>

<a name="schema11"></a>

# 11 Modificamos el archivo `Counter.tsx`
- 1º Para ponerle un decremento
~~~ts
import { createStore, createHook, defaults } from 'react-sweet-state';

// if (typeof window !== 'undefined'){
//   console.log( 'enable devtools')
//   defaults.devtools=true
// }


const Store = createStore({
  // value of the store on initialisation
  initialState: {
    count: 0,
  },
  // actions that trigger store mutation
  actions: {
    increment:
      () =>
      ({ setState, getState }) => {
        // mutate state synchronously
        setState({
          count: getState().count + 1,
        });
      },
      decrease:
        () =>
        ({ setState, getState }) => {
          // mutate state synchronously
          setState({
            count: getState().count - 1,
          });
      },
  },
  // optional, mostly used for easy debugging
  name: 'counter',
});

export const useCounter = createHook(Store);
~~~
- 2º Refactorizamos
~~~ts
import { createStore, createHook, defaults } from 'react-sweet-state';

// if (typeof window !== 'undefined'){
//   console.log( 'enable devtools')
//   defaults.devtools=true
// }

const increment = (by = 1) =>({ setState, getState }) => {

  setState({
    count: getState().count + by,
  });
};

const Store = createStore({
  
  initialState: {
    count: 0,
  },
  
  actions: {
    increment,
    decrease: (by=1) =>({dispatch})=>{
      dispatch(increment(by *-1));

    },
      
  },

  name: 'counter',
});

export const useCounter = createHook(Store);
~~~
- 3º Al refactorizar tenemos que cambiar el archivo `about.tsx` para llamar las funciones
~~~tsx
  <MyButtom actionsButton = {() => increment()} text = "Add one" />
  <MyButtom actionsButton = {()=>decrease()} text = "Delete one" />
~~~

<hr>

<a name="schema12"></a>

# 12 Docu
https://nextjs.org/
https://nextjs.org/docs/migrating/from-gatsby#updating-packagejson-and-dependencies
https://es.reactjs.org/docs/animation.html
http://reactcommunity.org/react-transition-group/transition-group
https://github.com/atlassian/react-sweet-state