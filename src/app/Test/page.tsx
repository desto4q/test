"use client";
import React, { useState } from "react";
import { Input } from "../components/Input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/Tab";
import Nav from "../components/Nav";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

let options = [
	"Your Profile",
	"Company Info",
	"Manage Seats",
	"Do Not Contact",
	"Integration",
];
function Test() {
	return (
		<>
			<Nav />
			<div className="container p-4 md:p-2 mx-auto gap-12 flex flex-col mt-10">
				<h1 className="text-4xl font-bold"> Settings</h1>
				<Tabs>
					<TabsList>
						{" "}
						{options.map((item, index) => {
							return (
								<TabsTrigger key={index} value={item}>
									{item}
								</TabsTrigger>
							);
						})}
					</TabsList>
					<TabsContent value="Your Profile">
						<div className="flex flex-col-reverse  gap-6 lg:flex-row lg:gap-2 items-center">
							<div className="flex  gap-4 items-center ">
								<div className="h-32 w-32 bg-black rounded-full"></div>
								<div className="flex flex-col h-fit gap-4">
									<div className="flex gap-4">
										<button className="p-2 bg-red-700  shadow shadow-red-200 text-white rounded-lg">
											Remove
										</button>
										<button className="p-2 bg-white outline outline-1 outline-gray-100 shadow-xl rounded-lg">
											Change Photo
										</button>
									</div>
									<p>or drag and drop (SVG, PNG, JPG)</p>
								</div>
							</div>
							<div className="flex gap-4 lg:ml-auto h-fit my-6 lg:my-0 w-full lg:w-fit">
								<button className=" w-full md:w-auto p-2 bg-white outline outline-1 outline-gray-100 shadow-xl rounded-lg">
									Cancel
								</button>
								<button className=" w-full md:w-auto p-2 bg-black text-white outline outline-1 outline-gray-100 shadow-xl rounded-lg">
									{" "}
									Save Changes
								</button>
							</div>
						</div>
					</TabsContent>
				</Tabs>
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
				<div className="flex-col ">
					<h2>Employee Count</h2>
					<div className="w-fit mt-2">
						<ToggleGroup type="single">
							<ToggleGroupItem value="a">1-10</ToggleGroupItem>
							<ToggleGroupItem value="b">10-100</ToggleGroupItem>
							<ToggleGroupItem value="c">100-500</ToggleGroupItem>
							<ToggleGroupItem value="c">1000+</ToggleGroupItem>
						</ToggleGroup>
					</div>
				</div>
				<div className="flex-col md:flex">
					<label>Company description</label>
					<Input></Input>
				</div>
				<div className="flex-col md:flex">
					<label> What are your company goals</label>
					<Input></Input>
				</div>
				<div className="flex-col md:flex">
					<label>Headquarters</label>
					<Input></Input>
				</div>
				<div className="grid  grid-cols-1 gap-6 gap-cols-6 grid-rows-2 md:grid-cols-2">
					<div className="flex flex-col gap-2">
						<label>Funding Round</label>
						<Input type="name" id="name" placeholder="Company Name" />
					</div>
					<div className="flex flex-col gap-2">
						<label>FAQ's</label>
						<Input type="name" id="name" placeholder="Company Name" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Test;
