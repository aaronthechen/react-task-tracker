import React from 'react'

const Filter = ({currentFilter, setFilter}) => {

    const options = [
        {label: "None", value: "none"},
        {label: "Show Reminders Only", value: "reminders"}
    ];

    const handleChange = (event) => {
        setFilter(event.target.value);
    }

  return (
    <div>
        <label>
            Filters:     
            <select value={currentFilter} onChange={handleChange}>
                {options.map(  
                    (option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    )
                )}
            </select>
        </label>
    </div>
  )
}

export default Filter