import { BrowserRouter, Route, NavLink, Routes, Navigate } from 'react-router-dom';
import { routes } from './routes';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'
import logo from '../assets/react.svg';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    // ¿Cómo se trabaja sin lazyload?: se carga toda la página al momento de entrar al dominio
    // ¿Cómo se trabaja con lazyload?: te permite seleccionar que partes no se cargan al entrar
    // al dominio en un inicio, puedes crear lazy load de componentes o de modulos, aunque es
    // preferible hacerlo por modulos. Ejemplo: tengo 2 secciones, el primero es un login y el
    // segundo es un simple dashboard, ¿Para qué le cargo el dashboard si ni si quiera esta logueado?
    // entonces al inicio se carga el login, si logra funcionar el login entonces ahí recien te cargo
    // el modulo dashboard
    <Suspense fallback={<span>Loading</span>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt="React logo" />
            <ul>
              { // no es optimo usar dos map del mismo objeto, pero cómo es algo simple
                // lo voy a dejar así, sin embargo, no debería.
                routes.map((data) => (
                  <li key={data.name}>
                    <NavLink to={data.to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{data.name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Routes>
            {
              routes.map((data) => (
                <Route key={data.name} path={data.path} element={<data.Component />} />
              ))
            }

            <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>


      </BrowserRouter>

    </Suspense>

  )
}
