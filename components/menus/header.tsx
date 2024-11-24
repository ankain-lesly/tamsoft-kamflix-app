"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bell,
  ChevronDown,
  Film,
  Menu,
  Search,
  Settings,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useRef, useState } from "react";
import ModalOverlay from "../modals/ui/modal-overlay";
import { BiX } from "react-icons/bi";
import { ThemeHandlerUI } from "../others/theme-handler";
import { useContextProvider } from "@/providers/context-provider";
import MovieSearchModal from "../modals/client/movie-search-modal";

export default function Header() {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const { setModal } = useContextProvider();

  const handleThemeClick = (e: any) => {
    e.stopPropagation();
  };

  const headerRef = useRef<HTMLDivElement>(null);
  const ngClass = "bg-dark-main";

  useEffect(() => {
    const handleScroll = (e: any) => {
      const currentOffset = e.target.scrollingElement.scrollTop;

      if (currentOffset > 67 && headerRef.current)
        headerRef.current.classList.add(ngClass);
      else headerRef.current?.classList.remove(ngClass);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchModal = (e: any) => {
    console.log("click");
    e.stopPropagation();
    setModal({
      label: "Search movie",
      content: MovieSearchModal,
    });
  };
  return (
    <>
      <header className="border-b">
        <div
          ref={headerRef}
          className="container-x gap-4 mx-auto p-3 px-0 md:py-4 flex items-center justify-between">
          <div className="flex-center gap-2">
            {/* CODE: Mobile */}
            <Button
              onClick={() => setIsMobileNav((prev) => !prev)}
              variant="ghost"
              className="px-2 md:hidden shrink-0">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <Film className="h-6 w-6 hidden md:block" />
              <span className="text-lg text-danger md:text-xl font-bold">
                Kamflix
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link
              href="/trending"
              className="text-sm font-medium hover:underline">
              Trending
            </Link>
            <Link
              href="/genres"
              className="text-sm font-medium hover:underline">
              Genres
            </Link>
            <Link
              href="/watchlist"
              className="text-sm font-medium hover:underline">
              Watchlist
            </Link>
          </nav>
          <div className="nav-group">
            <div className="flex items-center gap-2 md:gap-4">
              {/* CODE: Search */}
              {/* <form className="hidden md:block">
              <Input
                type="search"
                placeholder="Search movies..."
                className="w-[200px]"
              />
            </form> */}
              <Button
                onClick={handleSearchModal}
                variant="outline"
                className="mr-2 px-2 md:hidden shrink-0">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search movie</span>
              </Button>

              <div
                className="relative cursor-pointer hidden md:flex"
                onClick={handleSearchModal}>
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search movie..."
                  className="pl-8 md:w-[160px]"
                />
              </div>

              {/* CODE: Register */}
              <div className="flex_ gap-2 hidden">
                <Button asChild variant="ghost" size="sm">
                  <Link href="/login">Log in</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/signup">Sign up</Link>
                </Button>
              </div>
              {/* CODE: User */}
              <nav className="items-center gap-2 flex">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  aria-label="Notifications">
                  <Bell className="h-4 w-4" />
                  <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                      aria-label="User menu">
                      <User className="h-4 w-4" />
                      <span className="hidden md:inline-block">John Doe</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Log out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {isMobileNav && (
        <>
          <ModalOverlay
            onClick={() => setIsMobileNav(false)}
            className="z-50"
          />
          <nav className="mobile-nav flex flex-col fixed top-0 bottom-0 right-0 bg-dark text-light w-4/5 max-w-xs overflow-hidden transition-all z-50">
            <div className="grid place-items-end px-4">
              <button
                className="text-xl p-2 text-danger hover:opacity-50 nav-menu__btn-close"
                onClick={() => setIsMobileNav(false)}>
                <BiX fontSize={26} />
              </button>
            </div>

            <div className="py-8 md:py-0 h-full flex flex-col justify-between">
              <ul
                className="flex flex-col md:flex-row gap-6 px-8 md:p-0 min-w-max"
                onClick={() => setIsMobileNav(false)}>
                <li>
                  <Link href="/trending" className="font-bold hover:opacity-70">
                    Trending
                  </Link>
                </li>
                <li>
                  <Link href="/genres" className="font-bold hover:opacity-70">
                    Genres
                  </Link>
                </li>
                <li>
                  <Link href="/movies" className="font-bold hover:opacity-70">
                    Movies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/watchlist"
                    className="font-bold hover:opacity-70">
                    My Watchlist
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="font-bold hover:opacity-70">
                    Contact Us
                  </Link>
                </li>
                <li className="border-b border-b-muted/20"></li>
                <li>
                  <Link
                    href="/signup"
                    className="btn btn-danger text-light-main rounded-full p-3 w-full font-bold hover:opacity-70">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="btn btn-secondary text-light-main rounded-full p-3 w-full font-bold hover:opacity-70">
                    Log In
                  </Link>
                </li>
              </ul>
              <div
                onClick={handleThemeClick}
                className="mt-auto px-4 flex-center gap-4 border border-muted/20 shadow-md p-2 rounded-full mx-4 bg-light">
                <b>Theme</b>
                <ThemeHandlerUI menuPosition={"top"} />
              </div>
              <p className="text-center text-muted mt-8 font-mono">
                Kamflix <br /> Copyright &copy; 2024
              </p>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
