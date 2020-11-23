import React, { useState, useContext, useEffect } from 'react';
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
      <table className="category-table">
        <tr>
          {categoryes
            .map(
              (category, index) => {
                const CATEGORY_NUMBER = 5;
                while (index < CATEGORY_NUMBER) {
                  return (
                    <th
                      className="th-category"
                      data-testid={ `${category.strCategory}-category-filter` }
                    >
                      { category.strCategory }
                    </th>
                  );
                }
                return undefined;
              },
            )}
        </tr>
      </table>
    </div>
  );
};

export default CategoryDisplay;
