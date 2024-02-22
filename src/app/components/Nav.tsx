import React from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "./NavMenu";
import { Squash as Hamburger } from "hamburger-react";
import { Input } from "./Input";

let links = ["dashboard", "messages", "campaigns", "studio"];
function Nav() {
	return (
		<nav className="flex justify-center h-16 items-center">
			<div className="container flex gap-6 items-center">
				<div className="flex items-center justify-center lg:hidden">
					<Hamburger />
				</div>
				<div className="h-full w-100">
					<img src="logo.svg" alt="" />
				</div>

				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>
								<div className="bg-purple-300 w-10 h-10 rounded-full"></div>
								keshva
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<NavigationMenuLink>Link</NavigationMenuLink>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<div className="hidden md:flex gap-6 items-center mx-auto">
					{links.map((item, index) => {
						return (
							<a
								href="#"
								className="capitalize p-4 rounded-md hover:bg-black hover:text-white"
								key={index}
							>
								{item}
							</a>
						);
					})}
				</div>
				<div className="md:flex gap-4 items-center hidden">
					<img src="notification-4-line.svg" alt="" />
					<img src="gift-2-line.svg" alt="" />

					<Input placeholder="search..."></Input>
				</div>

				<div className="block md:hidden  ml-auto">
					<img src="search-2-line.svg" alt="" />
				</div>
			</div>
		</nav>
	);
}

export default Nav;
