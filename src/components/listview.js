import React, { useState } from "react";
import TopBar from "./topbar";
import List from "./list";
import Pagination from "./pagination";
import PageDropdown from "./pagedropdown";
import Modal from "./modal";
import ThemeModal from "./thememodal";

const ListView = ({
	data,
	currentPage,
	pageSize,
	setPageSize,
	setCurrentPage,
	setQuery,
	searchResult,
}) => {
	// Logic for displaying current items
	const indexOfLastItem = currentPage * pageSize;
	const indexOfFirstItem = indexOfLastItem - pageSize;
	// const currentItems = data.results.slice(indexOfFirstItem, indexOfLastItem);

	// Logic for displaying page numbers
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(data.results.length / pageSize); i++) {
		pageNumbers.push(i);
	}

	// modal logic
	const [isOpen, setIsOpen] = useState(searchResult);
	// selected Item
	const [selectedItem, setSelectedItem] = useState(null);

	const [themeButton, setThemeButton] = useState(false);

	const [themeColor, setThemeColor] = useState("pink-500");

	return (
		<div className="flex flex-col min-h-screen 
		bg-slate-200 pb-12">
			<TopBar setQuery={setQuery} 
			setThemeButton={setThemeButton}
			themeColor={themeColor} />
			<div className="flex-1 overflow-y-auto
			">
				<List
					data={data}
					setSelectedItem={setSelectedItem}
					setIsOpen={setIsOpen}
				/>
			</div>
			<div className="flex justify-around items-center px-6 py-1">
				<Pagination
					pageSize={pageSize}
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
					data={data}
					themeColor={themeColor}
				/>
				<div className="bg-white pl-2 p-1 rounded-md shadow-xl shadow-slate-400 " >Items per page: {" "}
				<PageDropdown
					pageSize={pageSize}
					setPageSize={setPageSize}
					setCurrentPage={setCurrentPage}
				/>
				</div>
			</div>
			{isOpen && (
				<Modal
					item={selectedItem}
					setIsOpen={setIsOpen}
				/>
			)}
			{themeButton && (
				<ThemeModal setThemeButton={setThemeButton} 
				setThemeColor={setThemeColor} />
			)}
		</div>
	);
};

export default ListView;
