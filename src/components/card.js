import React, { useEffect, useState } from "react";

const Card = ({ name, itemUrl, setSelectedItem, setIsOpen }) => {
	const [hovered, setHovered] = useState(false);

	const [itemImage, setItemImage] = useState("");

	// fetch item data
	useEffect(() => {
		fetch(itemUrl)
			.then((res) => res.json())
			.then((res) => setItemImage(res.sprites.front_default))
			.catch((err) => console.log(err));
	}, [itemUrl]);

	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};

	return (
		<div 
     key={itemUrl}
			className="w-[10rem]  overflow-hidden
       rounded-lg  shadow-xl bg-white
       shadow-slate-400 border
       
      "
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div
				className="mx-auto flex items-center
      justify-center"
			>
				<img
					className="max-w-full"
					src={itemImage}
					alt={name}
				/>
			</div>
			<div
				className="px-6 py-4 
      relative mx-auto "
			>
				<div className="font-bold text-lg mb-2 pb-2 text-center  ">{name}</div>
				{hovered && (
					<button
						className="px-4 py-1 rounded-full bg-blue-500
           text-white hover:bg-blue-700  text-xs 
           absolute top-12 text-center"
						onClick={() => {
							setSelectedItem(itemUrl);
							setIsOpen(true);
						}}
					>
						View Details
					</button>
				)}
			</div>
		</div>
	);
};

export default Card;
