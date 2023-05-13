const ThemeModal = ({ setThemeButton, setThemeColor }) => {
	const handleChange = (e) => {
		setThemeColor(e.target.value);
	};

	return (
		<div
			className="fixed top-0 left-0 z-50
        h-screen flex justify-center items-center
         w-full backdrop-blur-[1px] bg-black
        bg-opacity-80 "
		>
			<div className="">
				<div className="flex justify-end">
					<button
						className="justicfy-end inline-block
                bg-white mb-4 bg-transparent text-white
				font-extrabold text-2xl"
						onClick={() => setThemeButton(false)}
					> X {/*
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							className=""
							viewBox="0 0 16 16"
						>
							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
							<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
						</svg> */}
					</button>
				</div>

				<div
					className="w-[15rem] rounded-md h-[12rem]
                 "
				>
					<h1
						className="h-[3rem] bg-gray-200 text-lg
                        pt-2
                font-semibold rounded-t-md text-center items-center"
					>
						Choose Theme
					</h1>
					<div
						className="h-[9rem] flex items-center
                justify-center bg-white rounded-b-md gap-2"
					>
						<button
							className="h-6 w-6 rounded-full 
                    bg-pink-500 border border-slate-500 
                     inline-block "
							value="pink-500"
							onClick={handleChange}
						></button>
						<button
							className="h-6 w-6 rounded-full 
                    bg-green-500 border border-slate-500 
                     inline-block "
							value="green-500"
							onClick={handleChange}
						></button>
						<button
							className="h-6 w-6 rounded-full 
                    bg-yellow-500 border border-slate-500 
                     inline-block "
							value="yellow-500"
							onClick={handleChange}
						></button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ThemeModal;
