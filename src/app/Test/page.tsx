"use client";
import React, { useState } from "react";
import { Input } from "../components/Input";

let options = [
	"Your profile",
	"company info",
	"manage seats",
	"do not Contact",
	"integration",
];
function Test() {
	let [option, setOpt] = useState<String>("Your profile");
	return (
		<div className="container p-4 md:p-0 mx-auto gap-12 flex flex-col mt-10">
			<h1 className="text-4xl font-bold"> Settings</h1>
			<div className=" w-full justify-evenly md:justify-start flex align-middle gap-2   bg-gray-100 md:w-fit p-2  rounded-xl">
				{" "}
				{options.map((item, index) => {
					if (option == item) {
						return (
							<div
								key={index}
								className="capitalize bg-white p-2 rounded-md shadow-xl"
							>
								{item}
							</div>
						);
					}
					if (index > 2) {
						return (
							<div key={index} className="hidden md:block  text-gray-600 p-2">
								{item}
							</div>
						);
					}
					return (
						<div key={index} className="capitalize text-gray-600 p-2">
							{item}
						</div>
					);
				})}
			</div>

			<div className="flex flex-col-reverse gap-4 ">
				<div className="h-32">
					<div className="rounded-full h-32 w-32 bg-black"></div>
				</div>
				<div className="  flex flex-col gap-6  h-fit my-auto">
					<div className="flex align-middle gap-4 my-4 md:my-0">
						<button className="p-1.5 rounded-lg border-2 bg-red-600 text-white shadow-md shadow-red-200	">
							Remove
						</button>{" "}
						<button className="p-1.5 rounded-lg bg-white shadow-md border-2">
							Change Photo
						</button>{" "}
					</div>
					<p className="text-gray-700">or drag and drop {"{SVG,PNG,JPG}"}</p>
				</div>

				<div className=" justify-center  md:w-auto   flex gap-4 h-fit md:ml-auto md:justify-start">
					<button className="w-full p-1.5 rounded-lg bg-white shadow-md border-2">
						Cancel
					</button>{" "}
					<button className=" w-full  md:whitespace-nowrap p-1.5 rounded-lg border-2 bg-black text-white shadow-md	">
						Save Changes
					</button>{" "}
				</div>
			</div>
			<div className="grid  grid-cols-1 gap-6 gap-cols-6 grid-rows-2 md:grid-cols-2">
				<div className="flex flex-col gap-2">
					<label>Company's Name</label>
					<Input type="name" id="name" placeholder="Company Name" />
				</div>
				<div className="flex flex-col gap-2">
					<label>Company's Website</label>
					<Input type="Website" id="Website" placeholder="Company Website" />
				</div>
				<div className="flex flex-col gap-2">
					<label>Company's Linkedin</label>
					<Input type="" id="" placeholder="Company Linkedin" />
				</div>
				<div className="flex flex-col gap-2">
					<label>Company's Industry</label>
					<Input type="" id="" placeholder="Company Industry" />
				</div>
			</div>
		</div>
	);
}

export default Test;
