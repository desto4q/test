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
import { Input } from "./Input";

let links = ["dashboard", "messages", "campaigns", "studio"];
function Nav() {
	return (
		<nav className="flex justify-center h-16 items-center">
			<div className="container bg-red-200 flex gap-6">
				<div className="rounded-full bg-blue-300 h-12 w-12"></div>
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
				<div className="flex gap-6 items-center mx-auto">
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
				<div className="flex gap-4 items-center">
                    
					<Input placeholder="search..."></Input>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
