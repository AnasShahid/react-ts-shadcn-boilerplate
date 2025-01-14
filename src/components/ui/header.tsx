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
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from "@/components/language-switcher";

function Header() {
    const [isOpen, setOpen] = useState(false);
    const { mainNav, authNav } = navigationConfig;
    const { t } = useTranslation();

    // Split navigation items into left and right sections
    const leftNavItems = mainNav.slice(0, Math.ceil(mainNav.length / 2));
    const rightNavItems = mainNav.slice(Math.ceil(mainNav.length / 2));

    return (
        <div className="flex items-center justify-between py-4">
            {/* Left Navigation */}
            <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList>
                    {leftNavItems.map((item) => (
                        <NavigationMenuItem key={item.title}>
                            <NavigationMenuLink asChild>
                                <Link 
                                    to={item.href}
                                    className="group text-primary inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                >
                                    {t(`common.navigation.${item.title.toLowerCase()}`)}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            {/* Logo */}
            <div className="flex items-center justify-center">
                <Link to="/" className="text-xl font-bold text-primary no-underline hover:text-accent-foreground">
                    {t('common.welcome')}
                </Link>
            </div>

            {/* Right Navigation */}
            <div className="hidden lg:flex items-center gap-4">
                <NavigationMenu>
                    <NavigationMenuList>
                        {rightNavItems.map((item) => (
                            <NavigationMenuItem key={item.title}>
                                <NavigationMenuLink asChild>
                                    <Link 
                                        to={item.href}
                                        className="group text-primary inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                    >
                                        {t(`common.navigation.${item.title.toLowerCase()}`)}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center gap-4 ml-4">
                    <div className="h-4 w-px bg-border hidden md:inline"></div>
                    <LanguageSwitcher />
                    <Link to={authNav.href} className="text-sm font-medium text-primary hover:bg-primary/90 rounded-md">
                        <Button variant="outline">{t('common.navigation.login')}</Button>
                    </Link>
                    <Button>{t('home.getStarted')}</Button>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
                variant="ghost"
                className="lg:hidden"
                size="icon"
                onClick={() => setOpen(!isOpen)}
            >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-[4rem] left-0 right-0 bg-background border-t p-4 lg:hidden">
                    <nav className="flex flex-col gap-4">
                        {mainNav.map((item) => (
                            <Link
                                key={item.title}
                                to={item.href}
                                className="px-4 py-2 text-sm hover:bg-accent rounded-md"
                                onClick={() => setOpen(false)}
                            >
                                {t(`common.navigation.${item.title.toLowerCase()}`)}
                            </Link>
                        ))}
                        <div className="border-t pt-4 mt-4">
                            <Link
                                to={authNav.href}
                                className="px-4 py-2 text-sm hover:bg-accent rounded-md block"
                                onClick={() => setOpen(false)}
                            >
                                {t('common.navigation.login')}
                            </Link>
                            <Button className="w-full mt-4">{t('home.getStarted')}</Button>
                            <div className="mt-4">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
}

export { Header };
