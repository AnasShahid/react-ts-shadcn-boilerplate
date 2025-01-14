"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { navigationConfig } from "@/config/navigation";

function Header() {
    const [isOpen, setOpen] = useState(false);
    const { mainNav, authNav } = navigationConfig;

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
                <Link to="/" className="font-semibold">
                    TWBlocks
                </Link>
                <NavigationMenu>
                    <NavigationMenuList className="hidden lg:flex gap-6">
                        {mainNav.map((item) => (
                            <NavigationMenuItem key={item.title}>
                                <NavigationMenuLink asChild>
                                    <Link to={item.href}>
                                        <Button variant="ghost">{item.title}</Button>
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="flex items-center gap-4">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link to={authNav.href}>
                                    <Button variant="default">{authNav.title}</Button>
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <Button
                    variant="ghost"
                    className="lg:hidden"
                    size="icon"
                    onClick={() => setOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
            </div>

            {isOpen && (
                <div className="absolute top-14 left-0 right-0 bg-background border-t p-4 lg:hidden">
                    <nav className="flex flex-col gap-4">
                        {mainNav.map((item) => (
                            <Link
                                key={item.title}
                                to={item.href}
                                className="px-4 py-2 hover:bg-accent rounded-md"
                                onClick={() => setOpen(false)}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    );
}

export { Header };
