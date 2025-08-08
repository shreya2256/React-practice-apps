function InputA({ text, setText }) {
  return (
    <input
      className="border p-2 w-full"
      type="text"
      placeholder="Input A"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default InputA;



