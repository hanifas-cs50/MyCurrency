const Header = ({ status }) => {
  return (
    <div className="container header">
      <div>
        <div className="title">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
          </svg>
          MyCurrency
        </div>
        <div className="subtitle">
          <span>Currency converter using </span>
          <a href="https://currencybeacon.com/">CurrencyBeacon</a>
        </div>
      </div>
      
      <div className="status">
        <div className="status-ping" style={status ? {backgroundColor: "#16a34a"} : {backgroundColor: "#dc2626"}}/>
        <span>Connected</span>
      </div>
    </div>
  )
};

export default Header;