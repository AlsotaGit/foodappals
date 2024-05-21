
const Quote = ({quotes, calcfunc}) => {

	return (<div>
		<h1>Quotes</h1>

		<ul className="list-group">
			{quotes.map((quo, index) => {
				return <li key={index} className="list-group-item">{quo.text}</li>;
			})}
		</ul>

		<button className="btn btn-dark" onClick={() => calcfunc(25)}>Calculate</button> {/* HOW TO CREATE A REACT EVENT/PASS AN EVENT */}
		{/*<button className="btn btn-dark" onClick={function () {calcfunc(30)}}>Calculate</button> /!* HOW TO CREATE A REACT EVENT/PASS AN EVENT *!/*/}

	</div>)
}

export default Quote;