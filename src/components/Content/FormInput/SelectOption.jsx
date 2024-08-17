const SelectOption = ({ currency }) => {
  const { short_code, symbol, name } = currency;
  const flagCode = short_code.slice(0, 2).toLowerCase();  

  return (
    <>
      <img
        src={`https://flagcdn.com/h20/${flagCode}.png`}
        alt={`${name} flag`}
        width={18}
        height={18}
        loading="lazy"
        decoding="async"
        style={{ marginRight: "1rem", borderRadius: "50%" }}
      />
      <div>
        <span style={{ color: "white", fontSize: "1.25rem" }}>
          {symbol}
        </span> - <span>
          {name}
        </span>
      </div>
    </>
  )
};

export default SelectOption;