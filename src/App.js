import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import FetchData from "./components/fetchdata";
import Home from "./components/home";
import ListView from "./components/listview";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

function App() {
	const [pageSize, setPageSize] = useState(8);
	const [currentPage, setCurrentPage] = useState(1);
	const [data, setData] = useState(null);
	const [query, setQuery] = useState(null);

	/*
	const [apiurl, setApiurl] = useState(
		`${BASE_URL}?limit=${pageSize}&offset=${(currentPage - 1) * pageSize}`,
	);

	

	 const [data, setData] = useState(FetchData({ apiurl })); */

	useEffect(() => {
		fetch(
			`${BASE_URL}?limit=${pageSize}&offset=${(currentPage - 1) * pageSize}`,
		)
			.then((res) => res.json())
			.then((res) => setData(res))
			.catch((err) => console.log(err));
	}, [pageSize, currentPage]);

	const [searchUrl, setSearchUrl] = useState(`${BASE_URL}/${query}`);

	

	useEffect(() => {
		if (query) {
			fetch(
				`${BASE_URL}/${query}`
			)
				.then((res) => res.json())
				.then((res) => setData(res))
				.catch((error) => console.log(error));
		}
	}, [ query]);

	return (
		<>
			<Routes>
				<Route
					index
					element={<Home setQuery={setQuery} />}
				/>
				<Route
					path="/viewall"
					element={
						<ListView
							query={query}
							data={data}
							pageSize={pageSize}
							setPageSize={setPageSize}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							setQuery={setQuery}
						/>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
