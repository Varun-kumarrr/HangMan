function TextInput({ label, type = 'text', value, onChange }) {
    return (
        <label className="block" >
            {label && <span className="text-gray-200">{label}</span>}
            <input
                className="px-4 py-2 border border-yellow-500 bg-black text-white placeholder-gray-400 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onChange={onChange}
                placeholder={label}
                type={type}
                value={value}
            />
        </label>
    );
}

export default TextInput;