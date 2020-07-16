// importaciones de las librerias
import React, {Fragment} from 'react';

// importo componentes
import CComponent from './CComponent/CComponent';
import ClComponent from './ClComponent/ClComponent';
import FComponent from './FComponent/FComponent';
import ECMAScript from '../ECMAScript';


function App(){
  // const target = { a: 1, b: 2 };
  // const source = { b: 4, c: 5 };
    
  // const objetAssign = () => { return Object.assign(target, source) };
  return(
    <Fragment>
      <CComponent/>
      <ClComponent/>
      <FComponent/>
      {
        Object.entries( ECMAScript() ).map( (x) => { return <p key={x[0]}>{x[0]+' '+x[1]}</p> }  )
      }
    </Fragment>
  );
}

export default App;
