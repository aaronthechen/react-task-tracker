import React from 'react'

const Filter = ({currentFilter, setFilter}) => {
    // Create filter dropdown options
    const options = [
        {label: "None", value: "none"},
        {label: "Show Reminders Only", value: "reminders"}
    ];

    // When a new dropdown option is chosen.
    const handleChange = (event) => {
        setFilter(event.target.value);
    }

    // Render the actual dropdown menu
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