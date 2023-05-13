import React, { useState, useEffect } from "react";
import ModalContent from "./modalcontent";
import * as Vibrant from "node-vibrant";

const Modal = ({ item, setIsOpen }) => {
	const [itemData, setItemData] = useState(null);
	const [gradColor, setGradColor] = useState("");

	const gradientStyle = {
		background: `linear-gradient(to top, ${gradColor}, #ffffff )`,
	  };
	// fetch item data
	useEffect(() => {
		fetch(item)
			.then((res) => res.json())
			.then((res) => {
				setItemData(res);

				// Calculate dominant color of the image to use in gradient background
				let v = new Vibrant(res.sprites.front_default);
				v.getPalette((err, palette) => setGradColor(palette.Vibrant.getHex()));
			})
			.catch((err) => console.log(err));
	}, [item]);

	const closeModal = () => {
		setIsOpen(false);
	};

	if (gradColor) {
		console.log(gradColor);
	}

	return (
		<div
			className="fixed top-0 left-0 z-50
		    h-screen flex justify-end w-full backdrop-blur-[2px] bg-black
			bg-opacity-50 "
		>
			{/* Modal overlay */}

			{/* Modal content */}
			{itemData && (
				<div
					className=" bg-white w-full
					md:w-1/2 sm:w-2/3 rounded-lg 
					shadow-lg p-4  h-full "
				>
					{/* Modal header */}
					<div
						className="flex px-4 py-2 bg-gray-100 
					h-1/3 relative rounded-md "
					style={gradientStyle}
					>
						{/* Back button */}
						<button
							className="text-gray-500 hover:text-black
							bg-white rounded-md px-1
							inline-block absolute top-2 left-2 z-[60] "
							onClick={closeModal}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M11.707 4.293a1 1 0 010 1.414L8.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						</button>

						<div className="w-[10rem] flex h-auto self-end mx-auto
						">
							<img
								className="max-w-full h-auto mx-auto -mb-8 self-end"
								alt={itemData.name}
								src={itemData.sprites.front_default}
							/>
						</div>
					</div>

					<div className="h-2/3 overflow-y-auto pb-10 relative">

					<div>
						<h2 className="text-lg font-bold my-2 text-center">
							{itemData.name}</h2>
						<p className="flex items-center justify-center" >
							{itemData.types.length &&
								itemData.types.map((type) => {
									<span
										key={type.type.name}
										className="text-base font-semi-bold
									    mx-2"
									>
										{type.type.name}
									</span>;
								})}
						</p>
					</div>

					<ModalContent item={itemData} />
					</div>
				</div>
			)}
		</div>
	);
};

export default Modal;
