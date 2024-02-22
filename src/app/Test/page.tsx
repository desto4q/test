"use client";
import React, { useState } from "react";
import { Input } from "../components/Input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/Tab";
import Nav from "../components/Nav";

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
			<div className="container p-4 md:p-0 mx-auto gap-12 flex flex-col mt-10">
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
						<div className="flex bg-red-300">
							<div className="flex gap-4 items-center ">
								<div className="h-32 w-32 bg-black rounded-full"></div>
								<div className=" flex-col h-fit gap-4 bg-blue-200">
									<div className="flex gap-4">
										<button>Remove</button>
										<button>Change Photo</button>
									</div>
									<p></p>
								</div>
							</div>
							<div className="flex gap-4 ml-auto">
								<button>Remove</button>
								<button>Change Photo</button>
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
				<div>
					<h2>Employee Count</h2>
					
				</div>

				<div className="flex">
					<label></label>
					<Input></Input>
				</div>
				<div className="flex">
					<label></label>
					<Input></Input>
				</div>
				<div className="flex">
					<label></label>
					<Input></Input>
				</div>

				div
			</div>
		</>
	);
}

export default Test;
