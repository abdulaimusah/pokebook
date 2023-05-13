import React from "react";
import Card from "./card";

const List = ({ data, setSelectedItem, setIsOpen }) => {
	return (
		<div
			className="flex gap-4 flex-wrap p-8  justify-center
    w-full md:w-4/5 lg-w-2/3 mx-auto bg-slate-200 "
		>
			{data.results.map((item) => (
				<Card
					key={item.url}
					name={item.name}
					itemUrl={item.url}
          setIsOpen={setIsOpen}
					setSelectedItem={setSelectedItem}
				/>
			))}
		</div>
	);
};

export default List;
