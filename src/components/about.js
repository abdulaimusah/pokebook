import React from "react";

const About = ({ item }) => {
	return (
		<div>
			<h2 className="text-lg font-semibold mb-4 text-center" >About </h2>
			<p className="text-center" >Height: {item.height}</p>
			<p className="text-center" >Weight: {item.weight}</p>
			{/*  item.abilities.length > 0 &&  (
        <>
        <p>Abilities:</p>
        <ul>
					
						{item.abilities.map((ability) => (
							<li key={ability.name}>{ability.name}</li>
						))}
				</ul>
        </>
			) */}
		</div>
	);
};

export default About;
