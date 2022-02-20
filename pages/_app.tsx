import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Menu from '../components/Menu';

const MyApp = (props) => {
  const { Component, pageProps, router } = props;
  console.log('router', router.asPath);
  return (
    <>
      <header>
        <Menu />
      </header>
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
  );
};

export default MyApp;