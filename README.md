# Netx-js

1. [Inicializamos NPM e instalamos paquetes necesarios](#schema1)
1. [ Ejecutamos Typescript ](#schema2)
1. [ Scripts para ejecutar `Netsjs` ](#schema3)
1. [ Creamos carpeta `pages` ](#schema4)
1. [ Creamos el componente `Menu`y modificamos el archivo `index.tsx`](#schema5)
1. [ Creamos la página `projects` ](#schema6)
1. [ Ejecutamos Typescript ](#schema2)
1. [ Ejecutamos Typescript ](#schema2)

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


# Docu
https://nextjs.org/
https://nextjs.org/docs/migrating/from-gatsby#updating-packagejson-and-dependencies