import { Route, Routes, Link } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages'

export const LazyLayout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={'lazy_page-1'}>LazyPage1</Link>
        </li>
        <li>
          <Link to={'lazy_page-2'}>LazyPage2</Link>
        </li>
        <li>
          <Link to={'lazy_page-3'}>LazyPage3</Link>
        </li>
      </ul>

      <Routes>
        <Route path='lazy_page-1' element={ <LazyPage1 /> } />
        <Route path='lazy_page-2' element={ <LazyPage2 /> } />
        <Route path='lazy_page-3' element={ <LazyPage3 /> } />

        <Route path='*' element={ <LazyPage1 /> } />
      </Routes>
    </div>
  )
}

export default LazyLayout;