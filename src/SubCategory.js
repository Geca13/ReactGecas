import React from 'react';

const SubCategory = ({ id,description, filterItems }) => {
 
        return (
             <div className="btn-container">
          <button
            type="button"
            className="filter-btn"
            key={id}
            onClick={() => filterItems(description)}
          >
            {description}
          </button>
          </div>
        );
    
    
 
};

export default SubCategory;