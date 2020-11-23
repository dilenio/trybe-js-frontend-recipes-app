import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import Context from '../../context/Context';
import { getMealsAPI, getDrinksApi } from '../../services/API';
import './CategoryDisplay.css';

const CategoryDisplay = () => {

  const [categoryes, setCategoryes] = useState([]);

  const { pageTitle } = useContext(Context);

  useEffect(() => {
    if (pageTitle === 'Comidas') {
      getMealsAPI('list', 'category').then((data) => {
        setCategoryes(data);
      });
    } else if (pageTitle === 'Bebidas') {
      getDrinksApi('list', 'category').then((data) => {
        setCategoryes(data);
      });
    }
  }, [pageTitle]);

  return (
    <div>
      Categorias
      <tr>
        <td>
          <button
            type="button"
            onClick={ (event) => console.log(categoryes) }
          >
            Teste
          </button>
        </td>
        <td>Melão</td>
      </tr>
    </div>
  );
};

export default CategoryDisplay;