import React from "react";

const borderStyle = {
	border: "1px solid black",
};

const UserDetail = ({ name, transactions }) => {
	return (
		<div>
			<h1>Transactions for: {name}</h1>
			<table style={{ width: "100%", border: "1px solid black" }}>
				<thead>
					<tr>
						<th style={borderStyle}>Item Name</th>
						<th style={borderStyle}>Price</th>
						<th style={borderStyle}>Category</th>
						<th style={borderStyle}>Purchase Date</th>
					</tr>
				</thead>
				<tbody>
					{transactions
						.filter((transaction) => transaction.name === name)
						.map((item) => (
							<tr key={item.transactionID} style={{ textAlign: "center" }}>
								<td style={borderStyle}>{item.itemName}</td>
								<td style={borderStyle}>{item.price}</td>
								<td style={borderStyle}>{item.category}</td>
								<td style={borderStyle}>{item.date}</td>
							</tr>
						))}
				</tbody>
			</table>
			{/* // <p key={item.transactionID}>{item.itemName}</p> */}
			{/* ))} */}
		</div>
	);
};

export default UserDetail;
