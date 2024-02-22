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
	"Integrations",
];
function Test() {
	return (
		<>
			<Nav />
			<div className="container p-4 md:p-2 mx-auto gap-8 flex flex-col mt-10">
				<h1 className="text-4xl font-bold"> Settings</h1>
				<Tabs defaultValue={"Your Profile"}>
					<TabsList className="">
						{" "}
						{options.map((item, index) => {
							if (index > 2) {
								return (
									<div
										className=" rounded-lg hidden md:block focus-within:shadow-lg focus-within:bg-white"
										tabIndex={1}
										key={index}
									>
										<TabsTrigger value={item}>{item}</TabsTrigger>
									</div>
								);
							}
							return (
								<div
									className="rounded-lg focus-within:shadow-lg focus-within:bg-white "
									tabIndex={1}
									key={index}
								>
									<TabsTrigger value={item}>{item}</TabsTrigger>
								</div>
							);
						})}
					</TabsList>
					<TabsContent value="Your Profile">
						<div className="flex flex-col-reverse  gap-6 lg:flex-row lg:gap-2 items-center ">
							<div className="flex  gap-24 md:g-4 items-center md:justify-start w-full md:w-auto">
								<div className="h-32 w-32  bg-black rounded-full flex items-center justify-center">
									<img src="https://i.ibb.co/qdxz5wQ/Vector.png" alt="" />
								</div>
								<div className="flex flex-col h-fit gap-4">
									<div className="flex gap-4">
										<button className="p-2 bg-red-700  shadow shadow-red-200 text-white rounded-lg">
											Remove
										</button>
										<button className="p-2 bg-white outline outline-1 outline-gray-100 shadow-xl rounded-lg">
											Change Photo
										</button>
									</div>
									<p className="text-gray-500">
										or drag and drop (SVG, PNG, JPG)
									</p>
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
				<div className="grid   grid-cols-1 gap-6 gap-cols-6 grid-rows-2 md:grid-cols-2">
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
				<div className="flex-col md:flex gap-2">
					<label>Company description</label>
					<Input></Input>
				</div>
				<div className="flex-col md:flex gap-2">
					<label> What are your company goals</label>
					<Input></Input>
				</div>
				<div className="flex-col md:flex gap-2">
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
