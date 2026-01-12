import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, FileText, Smartphone } from "lucide-react";

export default function SimpleLayout() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Mobile-Optimized Navigation Bar */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo/Brand */}
                        <div className="flex items-center">
                            <h1 className="text-lg sm:text-xl font-bold text-blue-600">
                                Cashback Loans Guides
                            </h1>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex gap-2">
                            <Link
                                to="/guides/pwa-app"
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isActive("/guides/pwa-app") || isActive("/")
                                        ? "bg-blue-600 text-white"
                                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                    }`}
                            >
                                <Smartphone className="w-5 h-5" />
                                <span>PWA App Guide</span>
                            </Link>
                            <Link
                                to="/guides/portal"
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isActive("/guides/portal")
                                        ? "bg-blue-600 text-white"
                                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                    }`}
                            >
                                <FileText className="w-5 h-5" />
                                <span>Portal Guide</span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-200">
                            <div className="flex flex-col gap-2">
                                <Link
                                    to="/guides/pwa-app"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive("/guides/pwa-app") || isActive("/")
                                            ? "bg-blue-600 text-white"
                                            : "text-gray-700 hover:bg-blue-50"
                                        }`}
                                >
                                    <Smartphone className="w-5 h-5" />
                                    <span className="font-medium">PWA App Guide</span>
                                </Link>
                                <Link
                                    to="/guides/portal"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive("/guides/portal")
                                            ? "bg-blue-600 text-white"
                                            : "text-gray-700 hover:bg-blue-50"
                                        }`}
                                >
                                    <FileText className="w-5 h-5" />
                                    <span className="font-medium">Portal Guide</span>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Page Content */}
            <main className="min-h-[calc(100vh-4rem)]">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-6 mt-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-600">
                        © {new Date().getFullYear()} Cashback Loans. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
