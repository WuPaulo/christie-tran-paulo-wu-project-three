const Select = ({ id, values, onValueChange, selectedValue }) => {
    return (
        <>
            <label htmlFor={id} className="sr-only">
                {id}
            </label>
            <select
                id={id}
                defaultValue={selectedValue}
                onChange={({ target: { value } }) => onValueChange(value)}
            >
                {/* map the array of options for the select dropdown */}
                {values.map(([value, text]) => (
                    <option key={value} value={value}>
                        {text}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Select;
