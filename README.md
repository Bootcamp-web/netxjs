# Netx-js

1. [Inicializamos NPM e instalamos paquetes necesarios](#schema1)
1. [ 2 Añadir el script para que compile Typescript y ejecutarlo](#schema2)

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
- `index.tsx`
~~~tsx
export default () => <p>Hello World</p>;
~~~



# Docu
https://nextjs.org/
https://nextjs.org/docs/migrating/from-gatsby#updating-packagejson-and-dependencies