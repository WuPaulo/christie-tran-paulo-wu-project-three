const RadioInput = ({ label, value, checked, setter }) => {
    return (
        <>
            <label>
                <span>{label}</span>
                <input
                    type="radio"
                    checked={checked === value}
                    onChange={() => {
                        setter(value);
                    }}
                />
            </label>
        </>
    );
};
export default RadioInput;
