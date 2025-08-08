function InputB({ text, setText }) {
  return (
    <input
      className="border p-2 w-full"
      type="text"
      placeholder="Input B"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default InputB;


