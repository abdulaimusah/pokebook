import React from "react";

const PageDropdown = ({ setPageSize, pageSize, setCurrentPage }) => {

	const pageSizes = [8, 12, 18, 24];

	const handlePageSizeChange = (event) => {
		const selectedPageSize = parseInt(event.target.value);
		setPageSize(selectedPageSize);
		setCurrentPage(1);
	};

	return (
		<select
		   className="border-2 border-blue-500 
		   outline-none rounded-md"
			value={pageSize}
			onChange={handlePageSizeChange}
		>
			{pageSizes.map((page) => (
				<option
					key={page}
					value={page}
				>
					{page}
				</option>
			))}
		</select>
	);
};

export default PageDropdown;
